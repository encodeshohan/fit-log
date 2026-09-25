import { IWorkout } from "@/types/workout";

const API_URL = process.env.WORKOUTS_API_URL;

export const getWorkouts = async (): Promise<IWorkout[]> => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching workouts:", error);
        return [];
    }
};

export const getWorkoutById = async (
    id: string,
): Promise<IWorkout | null> => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) return null;

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching workout:", error);
        return null;
    }
};