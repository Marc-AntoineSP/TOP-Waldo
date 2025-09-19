import { CheckableCoordinatesMap } from "./types"

export const checkForTargets = (x:number, y:number, targetList:CheckableCoordinatesMap, setTargets:CallableFunction) => {
    console.log(targetList)
    const topLeft = {x:x - 30, y:y - 50}
    const bottomRight = {x:x + 30, y:y+50}
    for(const targetCoords in targetList){
        if(topLeft.x <= targetList[targetCoords].x && bottomRight.x >= targetList[targetCoords].x && targetList[targetCoords].checked !== true){
            if(topLeft.y <= targetList[targetCoords].y && bottomRight.y >= targetList[targetCoords].y){
                console.log('Dedans.')
                targetList[targetCoords].checked = true
                setTargets((prev: CheckableCoordinatesMap) => ({...prev, [targetCoords]:{...prev[targetCoords], checked: true}}));
                return true
            }
        }
    }
    return false;
}