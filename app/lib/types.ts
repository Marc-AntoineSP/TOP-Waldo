export type Coordinates = {
    x: number
    y: number
}

export type CoordinatesMap = Record<string, Coordinates>
export type GlobalCoordinates = Record<number, CoordinatesMap>