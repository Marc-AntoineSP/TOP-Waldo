export interface RectangleProps {
    cx:number;
    cy:number;
}

export default function Overlay({cx,cy}:RectangleProps){
    const radiusW = 30;
    const radiusH = 50;
    return (
        <div style={{
            position:"absolute",
            left: cx - radiusW / 2,
            top: cy - radiusH / 2,
            width: radiusW,
            height: radiusH,
            border: '2px solid red',
            pointerEvents: 'none',
        }}></div>
    )
}