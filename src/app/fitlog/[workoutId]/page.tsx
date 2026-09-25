import AddToPlanButton from "../../../components/workoutDetails/AddToPlanButton";
import SaveForLaterButton from "../../../components/workoutDetails/SaveForLaterButton";
import { getWorkoutById } from "@/library/getWorkouts";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IWorkoutDetailsPageProps {
    params: Promise<{
        workoutId: string;
    }>;
}

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
    const { workoutId } = await params;
    const workout = await getWorkoutById(workoutId);

    if (!workout) notFound();

    const specs = [
        { label: "Equipment", value: workout.equipment },
        { label: "Difficulty", value: workout.difficulty },
        { label: "Sets", value: workout.sets },
        { label: "Reps", value: workout.reps },
        { label: "Duration", value: `${workout.duration} min` },
        { label: "Calories", value: `${workout.caloriesBurned} kcal` },
        { label: "Rating", value: `${workout.rating}` },
    ];

    return (
        <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 rounded-2xl lg:grid-cols-2 lg:gap-10">
                {/* Workout Image */}
                <div className="relative min-h-87.5 overflow-hidden rounded-xl bg-line lg:min-h-125">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                        className="object-cover"
                    />
                </div>

                {/*Workout Details */}
                <div className="flex flex-col justify-between">
                    <div>

                        {/*Name*/}
                        <h1 className="mb-2 font-secondary text-3xl font-extrabold uppercase tracking-wide text-white md:text-4xl">
                            {workout.name}
                        </h1>

                        {/*Description */}
                        <p className="font-primary mb-4 text-base font-normal text-muted">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mb-6 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((group) => (
                                <span
                                    key={group}
                                    className="rounded-xl bg-lime px-3 py-1 text-xs font-semibold uppercase text-black"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* Specs Panel */}
                        <div className="mb-6 overflow-hidden rounded-xl bg-dark">
                            <table className="w-full text-xs">
                                <tbody className="divide-y divide-line">
                                    {specs.map((spec) => (
                                        <tr key={spec.label}>
                                            <td className="font-primary font-xs font-bold uppercase text-muted px-4 py-2.5">
                                                {spec.label}
                                            </td>
                                            <td className="font-inter text-right font-sm font-medium text-light px-4 py-2.5">
                                                {spec.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/*Instructions */}
                        <div className="mb-8">
                            <h3 className="mb-3 font-secondary text-base font-extrabold uppercase text-white">
                                Instructions
                            </h3>

                            <ol className="space-y-2 text-sm text-muted">
                                {workout.instructions.map((step, index) => (
                                    <li key={index} className="flex gap-2">
                                        <span className="font-primary font-normal text-muted">{index + 1}.</span>
                                        <span className="font-primary font-normal text-gray-light">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/*Button */}
                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                        <AddToPlanButton workout={workout} />
                        <SaveForLaterButton workout={workout} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;