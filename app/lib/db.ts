import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getTargetsCoordinates = async (id:number) => {
    const res = await prisma.coordinates.findFirst({
        where:{
            map:id
        }
    });
    return res?.coordinates;
}