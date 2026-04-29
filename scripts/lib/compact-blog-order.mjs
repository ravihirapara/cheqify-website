import { createClient } from "@sanity/client";

const PROJECT_ID = "4lvsthqk";
const DATASET = "production";

export function makeWriteClient(token) {
  if (!token) {
    throw new Error("SANITY_WRITE_TOKEN is required for blog reorder.");
  }
  return createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: "2024-01-01",
    token,
    useCdn: false,
  });
}

/**
 * Rewrite `order` on every published blogPost so the sequence is 1..N
 * ordered by current `order` (with `_createdAt` as tiebreaker for nulls / dupes).
 *
 * Returns the changes that were applied: [{_id, slug, oldOrder, newOrder}].
 * Documents already at the correct order are skipped (no patch).
 */
export async function compactBlogOrder(client) {
  const posts = await client.fetch(
    `*[_type=="blogPost" && !(_id in path("drafts.**"))]{
       _id, _createdAt, order, "slug": slug.current
     } | order(coalesce(order, 99999) asc, _createdAt asc)`,
  );

  const changes = [];
  const tx = client.transaction();

  posts.forEach((post, i) => {
    const newOrder = i + 1;
    if (post.order !== newOrder) {
      changes.push({
        _id: post._id,
        slug: post.slug,
        oldOrder: post.order ?? null,
        newOrder,
      });
      tx.patch(post._id, { set: { order: newOrder } });
    }
  });

  if (changes.length > 0) {
    await tx.commit();
  }

  return { total: posts.length, changes };
}
