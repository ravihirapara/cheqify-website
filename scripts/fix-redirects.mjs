import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, join } from "node:path";

const OUT_DIR = resolve("out");
const BASE = "https://cheqify.app";

if (!existsSync(OUT_DIR)) {
  console.log("[fix-seo] out/ not found, nothing to do.");
  process.exit(0);
}

function fixRedirects() {
  const redirectsPath = join(OUT_DIR, "_redirects");
  if (!existsSync(redirectsPath)) return;

  const original = readFileSync(redirectsPath, "utf8");
  const patched = original.replace(/^(\s*\/\s+\/en\s+)302(\s*)$/gim, "$1301!$2");

  if (patched !== original) {
    writeFileSync(redirectsPath, patched, "utf8");
    console.log("[fix-seo] Rewrote / -> /en from 302 to 301! in _redirects");
  }
}

function walkHtml(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walkHtml(full, acc);
    } else if (entry.endsWith(".html")) {
      acc.push(full);
    }
  }
  return acc;
}

function injectXDefault() {
  const htmlFiles = walkHtml(OUT_DIR);
  let patched = 0;

  const hreflangEnPattern = new RegExp(
    `(<link rel="alternate" hrefLang="en" href="${BASE.replace(/[./]/g, "\\$&")}(/en[^"]*)"/>)`,
  );

  for (const file of htmlFiles) {
    const html = readFileSync(file, "utf8");
    if (html.includes('hrefLang="x-default"')) continue;

    const match = html.match(hreflangEnPattern);
    if (!match) continue;

    const enHref = `${BASE}${match[2]}`;
    const xDefaultTag = `<link rel="alternate" hrefLang="x-default" href="${enHref}"/>`;
    const next = html.replace(match[1], `${match[1]}${xDefaultTag}`);

    if (next !== html) {
      writeFileSync(file, next, "utf8");
      patched++;
    }
  }

  console.log(`[fix-seo] Injected x-default into ${patched} HTML file(s).`);
}

fixRedirects();
injectXDefault();
