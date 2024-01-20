import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

// Update specific user's link
export async function PATCH(
  req: Request,
  { params }: { params: { linkId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.linkId) {
      return new NextResponse("User id is required", { status: 400 });
    }
    const { linkId } = params;
    const body = await req.json();

    const { url } = body;

    const links = await prisma.links.update({
      where: {
        id: linkId,
      },
      data: {
        url,
      },
    });

    return NextResponse.json(links);
  } catch (e) {
    console.log("[LINK_PATCH]", e);
    return NextResponse.json("Internal Error", { status: 500 });
  }
}

// DELETE user's link
export async function DELETE({ params }: { params: { linkId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.linkId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const links = await prisma.links.deleteMany({
      where: {
        id: params.linkId,
        userId,
      },
    });

    return NextResponse.json(links);
  } catch (error) {
    console.log("[LINKS_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
