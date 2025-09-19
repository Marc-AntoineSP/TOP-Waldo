'use client'

import { useTargetsContext } from "../context/targetContext"

export default function Objectives(){
    const {targets} = useTargetsContext();
    console.log('Targets from objectives : ', targets)
    return (
        <>
            <h2 className="text-4xl">Objectifs : </h2>
            <ul>
                {Object.entries(targets).map(([key, value]) => (
                    <li className={`${value.checked ? 'line-through' : ''} text-xl`} key={value.x + value.y}>{key}</li>
                )
                )}
            </ul>
        </>
    )
}