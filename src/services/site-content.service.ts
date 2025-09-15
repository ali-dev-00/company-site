"use client";

import baseContent from "../../public/content.json";
import type { HomeHeroSection, HomeJoinWorkWithUs, HomeContactUsBanner, SiteContentWithBanner } from "@/types/content";

const STORAGE_KEY = "site-content-overrides";

function getOverrides(): Partial<SiteContentWithBanner> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<SiteContentWithBanner>) : null;
  } catch {
    return null;
  }
}

function setOverrides(overrides: Partial<SiteContentWithBanner>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
}

// Simple: read content from content.json with optional local overrides
export function getSiteContent(): SiteContentWithBanner {
  const overrides: Partial<SiteContentWithBanner> = getOverrides() ?? {};
  const base = baseContent as unknown as SiteContentWithBanner;
  return {
    ...base,
    HomeHeroSection: {
      ...(base.HomeHeroSection ?? ({} as HomeHeroSection)),
      ...(overrides.HomeHeroSection ?? {}),
    },
    HomeJoinWorkWithUs: {
      ...(base.HomeJoinWorkWithUs ?? ({} as HomeJoinWorkWithUs)),
      ...(overrides.HomeJoinWorkWithUs ?? {}),
    },
    HomeContactUsBanner: {
      ...(base.HomeContactUsBanner ?? ({} as HomeContactUsBanner)),
      ...(overrides.HomeContactUsBanner ?? {}),
    },
  } as SiteContentWithBanner;
}

// Optional local cache override update
export function saveHomeHeroSection(update: Partial<HomeHeroSection>) {
  const current = getOverrides() ?? {};
  const merged: Partial<SiteContentWithBanner> = {
    ...current,
    HomeHeroSection: {
      ...(current.HomeHeroSection ?? {}),
      ...update,
    } as HomeHeroSection,
  };
  setOverrides(merged);
}

export function saveContactUsBanner(update: Partial<HomeContactUsBanner>) {
  const current = getOverrides() ?? {};
  const merged: Partial<SiteContentWithBanner> = {
    ...current,
    HomeContactUsBanner: {
      ...(current.HomeContactUsBanner ?? {}),
      ...update,
    } as HomeContactUsBanner,
  };
  setOverrides(merged);
}

export async function uploadHeroImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch("/api/uploads/image", {
    method: "POST",
    body: form,
  });
  if (!res.ok) throw new Error("Upload failed");
  const data = (await res.json()) as { url: string };
  return data.url;
}

// Persist the updated HomeHeroSection fields into public/content.json via API
export async function persistHomeHeroToServer(payload: Partial<HomeHeroSection>): Promise<HomeHeroSection | null> {
  try {
    const res = await fetch("/api/content/save", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ HomeHeroSection: payload }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { status: boolean; data: HomeHeroSection };
    return data?.data ?? null;
  } catch {
    return null;
  }
}

export async function persistJoinWorkWithUsToServer(payload: Partial<HomeJoinWorkWithUs>): Promise<HomeJoinWorkWithUs | null> {
  try {
    const res = await fetch("/api/content/save", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ HomeJoinWorkWithUs: payload }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { status: boolean; data: HomeJoinWorkWithUs };
    return data?.data ?? null;
  } catch {
    return null;
  }
}

export async function persistContactUsBannerToServer(payload: Partial<HomeContactUsBanner>): Promise<HomeContactUsBanner | null> {
  try {
    const res = await fetch("/api/content/save", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ HomeContactUsBanner: payload }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { status: boolean; data: HomeContactUsBanner };
    return data?.data ?? null;
  } catch {
    return null;
  }
}
