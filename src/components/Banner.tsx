import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Banner = () => {
    return (
        <section className="bg-black px-4 py-8 md:px-6 md:py-12 lg:px-8">
            <div className="container mx-auto flex flex-col items-center gap-8 rounded-2xl border border-line bg-card p-6 md:flex-row md:gap-6 md:p-8 lg:gap-8 lg:p-10 xl:gap-12 xl:p-14">
                {/* Left Side */}
                <div className="flex w-full flex-col items-center gap-4 text-center md:min-w-0 md:flex-1 md:items-start md:gap-5 md:text-left">
                    {/* Eyebrow Text */}
                    <span className="font-primary text-[11px] font-bold text-lime">
                        WORKOUT LIBRARY
                    </span>

                    {/* Main Heading */}
                    <h1 className="font-secondary text-4xl font-extrabold leading-tight text-white lg:text-5xl xl:text-[60px]">
                        TRAIN WITH INTENT. LOG <br className="hidden xl:block" />
                        EVERY SET.
                    </h1>

                    {/* Subtitle */}
                    <p className="font-primary text-base font-normal text-muted">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
                        <br className="hidden xl:block" />
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* Button */}
                    <Link
                        href="#library"
                        className="inline-flex items-center gap-2 cursor-pointer rounded-md bg-lime px-6 py-3 font-primary text-xs font-bold text-black transition hover:brightness-90"
                    >
                        BROWSE WORKOUTS <ChevronDown className="h-4 w-4" />
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex w-full justify-center md:w-60 md:shrink-0 lg:w-83.5">
                    <Image
                        src="/assets/banner.png"
                        width={334}
                        height={334}
                        alt="Banner Image"
                        className="h-auto w-full max-w-83.5"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;