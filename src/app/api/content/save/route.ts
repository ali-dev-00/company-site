import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { HomeContactUsBanner, HomeHeroSection, HomeJoinWorkWithUs, SiteContentWithBanner } from "@/types/content";

export const runtime = "nodejs";

export async function PATCH(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<{
      HomeHeroSection: Partial<HomeHeroSection>;
      HomeJoinWorkWithUs: Partial<HomeJoinWorkWithUs>;
      HomeContactUsBanner: Partial<HomeContactUsBanner>;
    }>;
    const contentPath = path.join(process.cwd(), "public", "content.json");
    const raw = await fs.readFile(contentPath, "utf8");
    const json = JSON.parse(raw) as SiteContentWithBanner;

    // Determine which sections are being updated
    const updates: Partial<{
      HomeHeroSection: HomeHeroSection;
      HomeJoinWorkWithUs: HomeJoinWorkWithUs;
      HomeContactUsBanner: HomeContactUsBanner;
    }> = {};

    if (body && typeof body === "object") {
      if ("HomeHeroSection" in body) {
        json.HomeHeroSection = {
          ...json.HomeHeroSection,
          ...(body.HomeHeroSection || {}),
        };
        updates.HomeHeroSection = json.HomeHeroSection;
      }
      if ("HomeJoinWorkWithUs" in body) {
        json.HomeJoinWorkWithUs = {
          ...json.HomeJoinWorkWithUs,
          ...(body.HomeJoinWorkWithUs || {}),
        };
        updates.HomeJoinWorkWithUs = json.HomeJoinWorkWithUs;
      }
      if ("HomeContactUsBanner" in body) {
        json.HomeContactUsBanner = {
          ...json.HomeContactUsBanner,
          ...(body.HomeContactUsBanner || {}),
        };
        updates.HomeContactUsBanner = json.HomeContactUsBanner;
      }
    }

    // Back-compat: if no known keys provided, treat entire body as HomeHeroSection patch
    if (Object.keys(updates).length === 0) {
      json.HomeHeroSection = {
        ...json.HomeHeroSection,
        ...(body ?? {}),
      };
      updates.HomeHeroSection = json.HomeHeroSection;
    }

    await fs.writeFile(contentPath, JSON.stringify(json, null, 2), "utf8");

    // If only one section was updated, return it directly; else return the map
    const keys = Object.keys(updates) as Array<keyof typeof updates>;
    const data = keys.length === 1 && keys[0] ? updates[keys[0]] : updates;
    return NextResponse.json({ status: true, data });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Update failed";
    return NextResponse.json({ status: false, message }, { status: 500 });
  }
}
