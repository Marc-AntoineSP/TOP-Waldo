import { getCoordinatesFromDb } from "../lib/db";

export const getCoordinatesAction = async (id:string) => {
    try{
        const coordinates = await getCoordinatesFromDb(Number(id));
        return coordinates;
    }
    catch(e){
        console.error(e)
    }
}