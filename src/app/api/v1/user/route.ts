import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(
    request: NextRequest,
) {
    try {
        const { imageUrl, name } = await request.json();
        await prisma.users.create({
            data: {
                imageUrl,
                name
            }
        });
        return NextResponse.json({}, {status: 200});
    } catch(e) {
        return NextResponse.json(e, {status: 500});
    }
}