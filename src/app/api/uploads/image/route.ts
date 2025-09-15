import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
  const res = await fetch(`${backendUrl}/uploads/image`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const text = await res.text();
    return new NextResponse(text, { status: res.status });
  }
  const data = (await res.json()) as { url: string };
  return NextResponse.json(data);
}
