import crypto from "node:crypto";
import { compactBlogOrder, makeWriteClient } from "../../scripts/lib/compact-blog-order.mjs";

const INDEXNOW_KEY = "d8eb73242a5a4abcbeb833d31fe081f2";
const HOST = "cheqify.app";
const LOCALES = ["en", "hi", "gu"] as const;
const SIGNATURE_HEADER = "sanity-webhook-signature";
const OPERATION_HEADER = "sanity-operation";
const REPLAY_TOLERANCE_MS = 5 * 60 * 1000;

function verifySanitySignature(
  body: string,
  header: string | null,
  secret: string,
): boolean {
  if (!header) return false;

  const parts: Record<string, string> = {};
  for (const segment of header.split(",")) {
    const eq = segment.indexOf("=");
    if (eq === -1) continue;
    parts[segment.slice(0, eq).trim()] = segment.slice(eq + 1).trim();
  }

  const timestamp = parts.t;
  const signature = parts.v1;
  if (!timestamp || !signature) return false;

  const age = Date.now() - Number(timestamp);
  if (!Number.isFinite(age) || Math.abs(age) > REPLAY_TOLERANCE_MS) return false;

  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}.${body}`)
    .digest("base64url");

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export default async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const secret = process.env.SANITY_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("SANITY_WEBHOOK_SECRET not configured", { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get(SIGNATURE_HEADER);

  if (!verifySanitySignature(body, signature, secret)) {
    return new Response("Invalid signature", { status: 401 });
  }

  const operation = req.headers.get(OPERATION_HEADER);

  // Delete events: re-compact blogPost order to 1..N. No IndexNow ping.
  if (operation === "delete") {
    const writeToken = process.env.SANITY_WRITE_TOKEN;
    if (!writeToken) {
      return new Response("SANITY_WRITE_TOKEN not configured", { status: 500 });
    }
    const client = makeWriteClient(writeToken);
    const { total, changes } = await compactBlogOrder(client);
    return Response.json({
      operation,
      action: "reorder",
      total,
      patched: changes.length,
      changes,
    });
  }

  let payload: { slug?: string | { current?: string } };
  try {
    payload = JSON.parse(body);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const slug =
    typeof payload.slug === "string"
      ? payload.slug
      : payload.slug?.current ?? "";

  if (!slug) {
    return Response.json(
      { error: "No slug in payload", payload },
      { status: 400 },
    );
  }

  const urlList = LOCALES.map(
    (loc) => `https://${HOST}/${loc}/blog/${slug}`,
  );

  const indexNowResponse = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  return Response.json({
    submitted: urlList,
    indexNowStatus: indexNowResponse.status,
  });
};

export const config = {
  path: "/api/indexnow",
};
