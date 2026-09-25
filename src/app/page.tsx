import Banner from "@/components/Banner";
import Workouts from "@/components/Workouts";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Banner />

      <Suspense
        fallback={
          <div className="flex items-center justify-center gap-4 py-24">
            <span className="h-3 w-3 animate-bounce rounded-full bg-lime [animation-delay:-0.3s]"></span>
            <span className="h-3 w-3 animate-bounce rounded-full bg-lime [animation-delay:-0.15s]"></span>
            <span className="h-3 w-3 animate-bounce rounded-full bg-lime"></span>
          </div>
        }
      >
        <Workouts />
      </Suspense>
    </>
  );
};

export default Home;