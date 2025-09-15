import { NextResponse } from "next/server";
import { list } from "@vercel/blob";
import type { SiteContentWithBanner } from "@/types/content";
import fallbackContent from "@/data/content.json";

export const runtime = "nodejs";

export async function GET() {
  try {
    const blobKey = process.env.CONTENT_BLOB_KEY || "site-content/content.json";
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    let json: SiteContentWithBanner | null = null;

    if (token) {
      try {
        const result = await list({ token, prefix: blobKey, limit: 1 });
        const found = result.blobs?.find((b) => b.pathname === blobKey) ?? result.blobs?.[0];
        if (found?.url) {
          const res = await fetch(found.url, { cache: "no-store" });
          if (res.ok) {
            json = (await res.json()) as SiteContentWithBanner;
          }
        }
      } catch {
        // ignore and fall back to file
      }
    }

    if (!json) {
      json = (fallbackContent as unknown) as SiteContentWithBanner;
    }

    return NextResponse.json({ status: true, data: json });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Failed to load content";
    return NextResponse.json({ status: false, message }, { status: 500 });
  }
}
