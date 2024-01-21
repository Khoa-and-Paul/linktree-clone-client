import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    const { imageUrl, name } = await request.json();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const user = await prisma.users.create({
      data: {
        id: userId,
        imageUrl,
        name,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    console.log("[USER_POST]", e);
    return NextResponse.json("Internal Error", { status: 500 });
  }
}
