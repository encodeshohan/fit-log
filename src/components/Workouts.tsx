import { getWorkouts } from "@/library/getWorkouts";
import { IWorkout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

const Workouts = async () => {
    const workouts = await getWorkouts();

    return (
        <section
            id="library"
            className="container mx-auto scroll-mt-24 px-4 py-10 md:px-6 lg:px-8"
        >
            {/* Section Heading */}
            <div className="mb-8">
                <h2 className="font-secondary text-3xl font-bold text-white">
                    THE LIBRARY
                </h2>
                <p className="text-sm font-normal text-muted">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workouts Grid */}
            {workouts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout: IWorkout) => (
                        <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
            ) : (
                <p className="py-16 text-center text-muted">
                    No workouts found!
                </p>
            )}
        </section>
    );
};

export default Workouts;