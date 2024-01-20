import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

// Grab a user's information based on a id passed in the param
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return new NextResponse("User id is required", { status: 400 });
    }

    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      return NextResponse.json("User doesn't exist", { status: 404 });
    }

    return NextResponse.json(user);
  } catch (e) {
    console.log("[USER_GET]", e);
    return NextResponse.json(e, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = auth();
    const body = await req.json();

    if(!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const { name, imageUrl } = body;

    const user = await prisma.users.updateMany({
      where: {
        id: userId
      }
    })
  }
}
