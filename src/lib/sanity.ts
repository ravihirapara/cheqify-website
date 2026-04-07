import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "4lvsthqk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const sanityWriteClient = createClient({
  projectId: "4lvsthqk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
