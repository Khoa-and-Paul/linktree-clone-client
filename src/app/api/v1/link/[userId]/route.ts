import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Grab user's links based off param userId passed in
export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }
    const { userId } = params;
    const links = await prisma.links.findMany({
      where: {
        userId: userId,
      },
    });
    if (links) {
      return NextResponse.json(links);
    } else {
      return NextResponse.json({}, { status: 404 });
    }
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
