'use client'
import Image from "next/image"
import React, { useRef, useState } from "react";
import Overlay from "./Overlay";
import { Coordinates } from "../lib/types";
import { checkForTargets } from "../lib/utils";
import { useTargetsContext } from "../context/targetContext";


export default function ImgController(props:{id:string}){
    const [scale, setScale] = useState(1);
    const [layer, setLayer] = useState<Coordinates[]>([]);
    const imgRef = useRef<HTMLImageElement | null>(null);
    //GERE LE STATE DEPUIS TARGETCONTEXT
    const {targets, setTargets} = useTargetsContext();

    const imgName = `map-${props.id}.webp`;
    
    const getCoordinates = (e: React.MouseEvent<HTMLImageElement>) => {
        const img = imgRef.current;
        if (!img) return;

        const rect = img.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const x = offsetX / scale;
        const y = offsetY / scale;

        if (checkForTargets(x, y, targets, setTargets)) {
            setLayer(prev => [...prev, { x, y }]);
        }
    };
    return (
        <div id="layer" className="relative">
            <Image
                ref={imgRef}
                src={`/assets/${imgName}`}
                alt={`Image de la map ${props.id}`}
                width={700}
                height={513}
                onClick={(e) => getCoordinates(e)}
                onWheel={(e) => {
                    const img = imgRef.current;
                    if (!img) return;
                    const rect = img.getBoundingClientRect();
                    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
                    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

                    const newScale = Math.min(Math.max(1, scale + e.deltaY * -0.001), 3);
                    setScale(newScale);

                    // On change seulement l'origine du zoom
                    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                    img.style.transform = `scale(${newScale})`;
                }}
            />
            {layer.map((l) => <Overlay key={l.x*2.365/l.y} cx={l.x} cy={l.y}/>)}
        </div>
    )
}