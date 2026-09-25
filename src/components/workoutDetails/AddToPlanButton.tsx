"use client";

import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/workout";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CalendarPlus2 } from "lucide-react";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
    const { planList, setPlanList } = useContext(PlanContext);

    const handleAddToPlan = () => {
        const alreadyAdded = planList.some((item) => item.id === workout.id);

        if (alreadyAdded) {
            toast.info("Already in today's plan!");
            return;
        }

        if (planList.length >= 5) {
            toast.error("Plan limit reached. You can add up to 5 lifts.");
            return;
        }

        setPlanList([...planList, workout]);
        toast.success(`${workout.name} added to today's plan`);
    };

    return (
        <button
            onClick={handleAddToPlan}
            className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-lime px-4 py-3 text-sm font-bold text-black transition hover:brightness-90"
        >
            <CalendarPlus2 /> Add to today&apos;s plan
        </button>
    );
};

export default AddToPlanButton;