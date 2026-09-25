"use client";

import { IWorkout } from "@/types/workout";
import React, { createContext, ReactNode, useState } from "react";

interface IPlanContext {
    planList: IWorkout[];
    setPlanList: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savedList: IWorkout[];
    setSavedList: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    completedIds: string[];
    setCompletedIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const PlanContext = createContext<IPlanContext>({
    planList: [],
    setPlanList: () => { },
    savedList: [],
    setSavedList: () => { },
    completedIds: [],
    setCompletedIds: () => { },
});

const PlanProvider = ({ children }: { children: ReactNode }) => {
    const [planList, setPlanList] = useState<IWorkout[]>([]);
    const [savedList, setSavedList] = useState<IWorkout[]>([]);
    const [completedIds, setCompletedIds] = useState<string[]>([]);

    const sharedData = {
        planList,
        setPlanList,
        savedList,
        setSavedList,
        completedIds,
        setCompletedIds,
    };

    return (
        <PlanContext.Provider value={sharedData}>{children}</PlanContext.Provider>
    );
};

export default PlanProvider;