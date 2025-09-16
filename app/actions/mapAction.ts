'use server'
import { getTargetsCoordinates } from "../lib/db";

export const getCoordinatesAction = async (id:string) => {
    try{
        const coordinates = await getTargetsCoordinates(Number(id));
        return coordinates;
    }
    catch(e){
        console.error(e)
    }
}