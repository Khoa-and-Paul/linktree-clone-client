import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

// GET All user's links based off param userId passed in
export async function GET() {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const links = await prisma.links.findMany({
      where: {
        userId: userId,
      },
    });

    if (!links) {
      return NextResponse.json("No links found", { status: 404 });
    }

    return NextResponse.json(links);
  } catch (e) {
    console.log("[LINKS_GET]", e);
    return NextResponse.json("Internal Error", { status: 500 });
  }
}

// Create link to user profile
export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const { url } = await request.json();

    await prisma.links.create({
      data: {
        url,
        userId,
      },
    });
    return NextResponse.json({}, { status: 200 });
  } catch (e) {
    console.log("[LINKS_POST]", e);
    return NextResponse.json(e, { status: 500 });
  }
}
