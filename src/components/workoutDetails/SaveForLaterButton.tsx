"use client";

import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/workout";
import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ workout }: { workout: IWorkout }) => {
    const { savedList, setSavedList } = useContext(PlanContext);

    const handleSave = () => {
        const alreadySaved = savedList.some((item) => item.id === workout.id);

        if (alreadySaved) {
            toast.info("Already in your saved list!");
            return;
        }

        setSavedList([...savedList, workout]);
        toast.success(`${workout.name} saved for later!`);
    };

    return (
        <button
            onClick={handleSave}
            className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-muted px-4 py-3 text-sm font-bold text-white transition hover:border-lime"
        >
            <Bookmark className="h-4 w-4" /> Save for later
        </button>
    );
};

export default SaveForLaterButton;