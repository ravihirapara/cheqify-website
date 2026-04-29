import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { table } from "@sanity/table";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "cheqify",
  title: "Cheqify Blog",
  projectId: "4lvsthqk",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), table()],
  schema: {
    types: schemaTypes,
  },
});
