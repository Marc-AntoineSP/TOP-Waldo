'use client'
import Image from "next/image"
import React, { useRef, useState } from "react";
import Overlay from "./Overlay";
import { Coordinates } from "../lib/types";
import { checkForTargets } from "../lib/utils";
import { useTargetsContext } from "../context/targetContext";


export default function ImgController(props:{id:string}){
    //GERE LE STATE EN HAUT
    const {targets, onChangeTarget} = useTargetsContext();
    const [layer, setLayer] = useState<Coordinates[]>([]);
    const layerRef = useRef<HTMLDivElement | null>(null);
    const imgName = `map-${props.id}.webp`;
    const getCoordinates = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log(targets)
        if(checkForTargets(x, y, targets, onChangeTarget))
            setLayer(prev => [...prev, {x:x, y:y}]);
    }
    return (
        <div id="layer" ref={layerRef} className="relative">
            <Image
                src={`/assets/${imgName}`}
                alt={`Image de la map ${props.id}`}
                width={700}
                height={513}
                onClick={(e) => getCoordinates(e)}
            />
            {layer.map((l) => <Overlay key={l.x*2.365/l.y} cx={l.x} cy={l.y}/>)}
        </div>
    )
}