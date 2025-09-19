'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { CheckableCoordinatesMap } from "../lib/types";

type TargetsContextType = {
    targets:CheckableCoordinatesMap;
    setTargets: (targetToReplace:CheckableCoordinatesMap) => void;
}

const TargetsContext = createContext<TargetsContextType | undefined>(undefined);

export function TargetsProvider({children, initial}:{children:ReactNode, initial:CheckableCoordinatesMap}){
    const [targets, setTargets] = useState<CheckableCoordinatesMap>(initial);

    return (
        <TargetsContext.Provider value={{targets, setTargets}}>{children}</TargetsContext.Provider>
    )
}

export function useTargetsContext(){
    const context = useContext(TargetsContext);
    if(!context){
        throw new Error('useTargetsContext doit etre utilisé dans un <TargetsProvider>');
    }
    return context;
}