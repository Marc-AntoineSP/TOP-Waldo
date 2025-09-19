export type Coordinates = {
    x: number
    y: number
}

export type CheckableCoordinates = {
    x:number
    y:number
    checked:boolean
}

export type CoordinatesMap = Record<string, Coordinates>
export type CheckableCoordinatesMap = Record<string, CheckableCoordinates>
export type GlobalCoordinates = Record<number, CoordinatesMap>