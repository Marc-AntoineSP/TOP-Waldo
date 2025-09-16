// import { PrismaClient } from "../generated/prisma";
import { CoordinatesMap, GlobalCoordinates } from "./types";

// const prisma = new PrismaClient();

export const mockCoordinates:GlobalCoordinates = {
    1:{
    "fontaine":{"x":450, "y":314},
    "test":{"x":0, "y":0},
    },
    2:{
    "fontaine":{"x":450, "y":314},
    "test":{"x":450, "y":314},
    },
    3:{
    "fontaine":{"x":450, "y":314},
    "test":{"x":450, "y":314},
    },
}

export const getCoordinatesFromDb = async (id:number):Promise<CoordinatesMap> => {
    return new Promise((res, rej) => {
        const mapCoordinates = mockCoordinates[id];
        if(mapCoordinates === undefined)
            rej('Failed to fetch : Wrong id');
        res(mapCoordinates)
    })
}