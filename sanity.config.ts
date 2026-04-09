import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "cheqify",
  title: "Cheqify Blog",
  projectId: "4lvsthqk",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
