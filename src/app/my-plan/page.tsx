"use client";

import PlanCard from "@/components/PlanCard";
import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/workout";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useContext, useState } from "react";
import { toast } from "react-toastify";

type TTab = "plan" | "saved";
type TSortBy = "duration" | "caloriesBurned" | "rating";

const MyPlanContent = () => {
    const {
        planList,
        setPlanList,
        savedList,
        setSavedList,
        completedIds,
        setCompletedIds,
    } = useContext(PlanContext);

    const router = useRouter();
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");

    
    const activeTab: TTab = tabParam === "saved" ? "saved" : "plan";
    const [sortBy, setSortBy] = useState<TSortBy>("duration");

    const setActiveTab = (tab: TTab) => {
        router.push(`/my-plan?tab=${tab}`);
    };

    const currentList = activeTab === "plan" ? planList : savedList;

    const sortedList = [...currentList].sort((a, b) => b[sortBy] - a[sortBy]);

    // Total
    const totalMinutes = currentList.reduce((sum, w) => sum + w.duration, 0);
    const totalCalories = currentList.reduce(
        (sum, w) => sum + w.caloriesBurned,
        0,
    );

    const stats = [
        { label: "Exercises", value: currentList.length, accent: true },
        { label: "Minutes", value: totalMinutes, accent: false },
        { label: "Calories", value: totalCalories, accent: false },
    ];

    const handleToggleDone = (workout: IWorkout, isDone: boolean) => {
        if (isDone) {
            setCompletedIds(
                completedIds.filter((id) => id !== String(workout.id)),
            );
            toast.success("Marked as incomplete!");
        } else {
            setCompletedIds([...completedIds, String(workout.id)]);
            toast.success("Marked as done!");
        }
    };

    const handleAddToPlan = (workout: IWorkout) => {
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

    const handleRemove = (workout: IWorkout) => {
        if (activeTab === "plan") {
            setPlanList(planList.filter((item) => item.id !== workout.id));
            setCompletedIds(
                completedIds.filter((id) => id !== String(workout.id)),
            );
            toast.success("Removed from plan!");
        } else {
            setSavedList(savedList.filter((item) => item.id !== workout.id));
            toast.success("Removed from saved!");
        }
    };

    return (
        <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">

            {/*Header */}
            <div className="mb-8">
                <h1 className="font-secondary text-4xl font-extrabold uppercase text-white">
                    My Plan
                </h1>
                <p className="mt-1 text-sm text-muted">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Totals */}
            <div className="mb-8 grid grid-cols-1 gap-6 rounded-2xl border border-line bg-surface p-8 md:grid-cols-3">
                {stats.map((stat) => (
                    <div key={stat.label}>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                            {stat.label}
                        </span>
                        <p
                            className={`mt-2 font-secondary text-4xl font-extrabold ${stat.accent ? "text-lime" : "text-white"
                                }`}
                        >
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>

            {/*Tabs & Sort */}
            <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">

                {/* Tabs */}
                <div className="flex rounded-xl border border-line bg-surface p-1.5">
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`cursor-pointer rounded-lg px-6 py-2 text-xs font-bold transition ${activeTab === "plan"
                            ? "bg-card text-white shadow"
                            : "text-muted hover:text-white"
                            }`}
                    >
                        Today&apos;s Plan
                    </button>
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`cursor-pointer rounded-lg px-6 py-2 text-xs font-bold transition ${activeTab === "saved"
                            ? "bg-card text-white shadow"
                            : "text-muted hover:text-white"
                            }`}
                    >
                        Saved
                    </button>
                </div>

                {/*Sort */}
                <div className="flex items-center gap-3 text-xs text-muted">
                    <span>Sort By</span>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as TSortBy)}
                            className="cursor-pointer appearance-none rounded-xl border border-line bg-surface py-2 pl-4 pr-9 text-white focus:border-muted focus:outline-none"
                        >
                            <option value="duration">Duration</option>
                            <option value="caloriesBurned">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-2.5 h-4 w-4 text-muted" />
                    </div>
                </div>
            </div>

            {/*List */}
            {sortedList.length > 0 ? (
                <div className="space-y-4">
                    {sortedList.map((workout) => {
                        const isDone = completedIds.includes(String(workout.id));

                        return (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                                tab={activeTab}
                                isDone={isDone}
                                onToggleDone={() => handleToggleDone(workout, isDone)}
                                onAddToPlan={() => handleAddToPlan(workout)}
                                onRemove={() => handleRemove(workout)}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-line bg-surface p-16 text-center">
                    <h2 className="mb-2 font-secondary text-xl font-bold uppercase text-white">
                        Nothing here yet
                    </h2>
                    <p className="mb-6 text-xs text-muted">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <Link
                        href="/"
                        className="inline-block rounded-xl bg-lime px-6 py-2.5 text-xs font-extrabold text-black transition hover:brightness-90"
                    >
                        Go to workouts
                    </Link>
                </div>
            )}
        </div>
    );
};

const MyPlan = () => (
    <Suspense fallback={null}>
        <MyPlanContent />
    </Suspense>
);

export default MyPlan;