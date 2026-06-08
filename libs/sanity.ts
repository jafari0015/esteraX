import { createClient, type SanityClient } from "@sanity/client";

let sanityClient: SanityClient | null = null;

export function isSanityConfigured() {
  return Boolean(process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET);
}

export function getSanityClient() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;

  if (!projectId || !dataset) {
    throw new Error("Sanity configuration requires SANITY_PROJECT_ID and SANITY_DATASET.");
  }

  if (!sanityClient) {
    sanityClient = createClient({
      projectId,
      dataset,
      apiVersion: "2025-01-01",
      useCdn: false,
      token: process.env.SANITY_WRITE_TOKEN,
    });
  }

  return sanityClient;
}
