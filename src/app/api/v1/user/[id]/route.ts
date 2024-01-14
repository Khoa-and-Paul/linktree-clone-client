import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

// Grab a user's information based on a id passed in the param
export async function GET(
    request: NextRequest,
    { params } : { params: {id: string}}
) {
    try {
        if (!params.id) {
            return new NextResponse("User id is required", { status: 400 });
        }
        const { id } = params;
        const user = await prisma.users.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (user) {
            return NextResponse.json(user);
        } else {
            return NextResponse.json({}, {status: 404});
        }
    } catch(e) {
        return NextResponse.json(e, {status: 500});
    }
}