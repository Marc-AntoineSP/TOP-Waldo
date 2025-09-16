'use client'
import Image from "next/image"
import React from "react";

export default function ImgController(props:{id:string}){

    const imgName = `map-${props.id}.webp`;
    const getCoordinates = (e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log(`x: ${x}, y: ${y}`);
    }
    return (
        <Image
            src={`/assets/${imgName}`}
            alt={`Image de la map ${props.id}`}
            width={700}
            height={513}
            onClick={(e) => getCoordinates(e)}
        />
    )
}