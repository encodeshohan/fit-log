import { IWorkout } from "@/types/workout";
import { Check, Clock, Flame, Plus, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IPlanCardProps {
    workout: IWorkout;
    tab: "plan" | "saved";
    isDone: boolean;
    onToggleDone: () => void;
    onAddToPlan: () => void;
    onRemove: () => void;
}

const PlanCard = ({
    workout,
    tab,
    isDone,
    onToggleDone,
    onAddToPlan,
    onRemove,
}: IPlanCardProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-card p-4 transition hover:border-muted md:flex-row">

            {/*Image & Details */}
            <div className="flex w-full items-center gap-5 md:w-auto">
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-line">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="112px"
                        className="object-cover"
                    />
                </div>

                <div>
                    <h3 className="font-secondary text-sm font-extrabold uppercase tracking-wide text-white">
                        {workout.name}
                    </h3>
                    <p className="mb-2 text-xs text-muted">{workout.equipment}</p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {workout.duration} min
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Flame className="h-3.5 w-3.5" />{" "}
                            {workout.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Star className="h-3.5 w-3.5" />{" "}
                            {workout.rating}
                        </span>
                    </div>
                </div>
            </div>

            {/*Buttons */}
            <div className="flex w-full items-center justify-end gap-3 md:w-auto">
                <Link
                    href={`/fitlog/${workout.id}`}
                    className="rounded-xl border border-line bg-surface px-5 py-2.5 text-xs font-bold text-white transition hover:border-muted"
                >
                    View Details
                </Link>

                {/*Tab: mark done */}
                {tab === "plan" && (
                    <button
                        onClick={onToggleDone}
                        className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold transition ${isDone
                            ? "bg-line text-muted hover:text-white"
                            : "bg-lime text-black hover:brightness-90"
                            }`}
                    >
                        <Check className="h-3.5 w-3.5" />
                        {isDone ? "Completed" : "Mark as Done"}
                    </button>
                )}

                {/*Tab: move to plan */}
                {tab === "saved" && (
                    <button
                        onClick={onAddToPlan}
                        className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-lime px-4 py-2.5 text-xs font-bold text-black transition hover:brightness-90"
                    >
                        <Plus className="h-3.5 w-3.5" /> Add to Plan
                    </button>
                )}

                {/*Remove */}
                <button
                    onClick={onRemove}
                    aria-label="Remove"
                    className="cursor-pointer rounded-xl p-2.5 text-muted transition hover:bg-line hover:text-white"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default PlanCard;