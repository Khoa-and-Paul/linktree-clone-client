import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { url, userId } = await request.json();
    await prisma.links.create({
      data: {
        url,
        userId,
      },
    });
    return NextResponse.json({}, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
