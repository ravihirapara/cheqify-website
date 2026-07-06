import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";

type TableRow = { _key?: string; cells?: string[] };
type TableValue = { rows?: TableRow[] };

const components: PortableTextComponents = {
  block: {
    callout: ({ children }) => <aside className="callout">{children}</aside>,
    // SEO guard: the post title is already the page's single <h1>. Demote any
    // stray body H1 (drafts should use [H2]/[H3] only) to <h2> so a post can
    // never render two <h1> tags — Bing flags that as a High-severity error.
    h1: ({ children }) => <h2>{children}</h2>,
  },
  types: {
    table: ({ value }: { value: TableValue }) => {
      const rows = value?.rows ?? [];
      if (rows.length === 0) return null;
      const [head, ...body] = rows;
      return (
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            {head?.cells && (
              <thead>
                <tr className="border-b border-foreground/20">
                  {head.cells.map((cell, i) => (
                    <th
                      key={i}
                      className="px-3 py-2 text-left font-semibold"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row, rIdx) => (
                <tr
                  key={row._key ?? rIdx}
                  className="border-b border-foreground/10"
                >
                  {(row.cells ?? []).map((cell, cIdx) => (
                    <td key={cIdx} className="px-3 py-2 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

export function BlogPortableText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
