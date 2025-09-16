import { CoordinatesMap } from "./types"

export const checkForTargets = (x:number, y:number, targetList:CoordinatesMap) => {
    const topLeft = {x:x - 30, y:y - 50}
    const bottomRight = {x:x + 30, y:y+50}
    for(const targetCoords in targetList){
        if(topLeft.x <= targetList[targetCoords].x && bottomRight.x >= targetList[targetCoords].x){
            if(topLeft.y <= targetList[targetCoords].y && bottomRight.y >= targetList[targetCoords].y){
                console.log('Dedans.')
                return true
            }
        }
    }
    return false;
}