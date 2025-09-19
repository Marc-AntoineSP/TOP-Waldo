'use client'
import { useEffect, useRef, useState } from "react"

export default function Timer(){
    const [time, setTime] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval>>(null)
    useEffect(() => {
        timerRef.current = setInterval(() => setTime(prev => prev + 1), 1000)
        return () => clearInterval(timerRef.current!)   
    }, [])
    return (
        <p className="text-4xl font-semibold leading-10">{time}</p>
    )
}