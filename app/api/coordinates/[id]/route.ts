import { PrismaClient } from "@/app/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, context: {params: Promise<{id:string}>}){
    const {id} = await context.params;
    const res = await prisma.coordinates.findFirst({
        where:{
            map:Number(id)
        }
    })
    return NextResponse.json(res);
}