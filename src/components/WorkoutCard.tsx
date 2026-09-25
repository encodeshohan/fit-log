import { IWorkout } from "@/types/workout";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IWorkoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
    return (
        <Link
            href={`/fitlog/${workout.id}`}
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-card transition hover:border-lime"
        >
            <div>
                {/*Card Image */}
                <div className="relative w-full aspect-16/10 overflow-hidden bg-line">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition duration-300 group-hover:scale-105"
                    />
                </div>

                {/*Card Content */}
                <div className="p-5">
                    {/* Muscle Groups */}
                    <div className="mb-2 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="rounded-xl font-primary bg-lime px-2 py-0.5 text-[11px] font-bold uppercase text-black"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/*Name */}
                    <h3 className="mb-1 font-secondary text-lg font-bold uppercase text-white transition group-hover:text-lime">
                        {workout.name}
                    </h3>

                    {/*Equipment */}
                    <p className="text-xs text-muted">{workout.equipment}</p>
                </div>
            </div>

            {/*Stats */}
            <div className="flex items-center gap-4 border-t border-line px-5 py-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 font-primary" /> {workout.duration} min
                </span>
                <span className="flex items-center gap-1">
                    <Flame className="font-primary h-3.5 w-3.5" />{" "}
                    {workout.caloriesBurned} kcal
                </span>
                <span className="flex items-center gap-1">
                    <Star className="font-primary h-3.5 w-3.5" />{" "}
                    {workout.rating}
                </span>
            </div>
        </Link>
    );
};

export default WorkoutCard;