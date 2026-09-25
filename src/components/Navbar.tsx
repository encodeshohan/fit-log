"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlanContext } from "@/context/PlanContext";
import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const { planList, savedList } = useContext(PlanContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = (
        <>
            <li>
                <Link
                    href="/"
                    className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition md:px-5 ${pathname === "/"
                        ? "border-lime bg-lime text-black"
                        : "border-line bg-card text-muted hover:border-muted hover:text-white"
                        }`}
                >
                    Workouts
                </Link>
            </li>
            <li>
                <Link
                    href="/my-plan"
                    className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition md:px-5 ${pathname === "/my-plan"
                        ? "border-lime bg-lime text-black"
                        : "border-line bg-card text-muted hover:border-muted hover:text-white"
                        }`}
                >
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-surface">

            {/* Mobile Version*/}
            <nav className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-6 md:flex md:justify-between md:px-6 lg:px-8">
                
                {/* Hamburger Portion*/}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    className="cursor-pointer text-white md:hidden"
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Logo */}
                <Link href="/" className="flex items-center justify-center gap-2.5 md:justify-start">
                    <Image
                        src="/assets/logo.png"
                        width={28}
                        height={28}
                        alt="FitLog Logo"
                        className="shrink-0"
                    />
                    <span className="font-secondary text-lg font-bold leading-none text-white">
                        FITLOG
                    </span>
                </Link>

                {/* Nav Links Desktop Version */}
                <ul className="hidden items-center gap-2 md:flex">{links}</ul>

                {/*Plan & Save Counter*/}
                <div className="flex items-center justify-end gap-2">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 rounded-full border border-transparent px-3 py-1 text-xs font-medium text-white transition hover:border-line hover:bg-card"
                    >
                        <span className="hidden sm:inline">Plan</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-xl bg-lime px-3 text-[11px] font-bold text-black">
                            {planList.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 rounded-full border border-transparent px-3 py-1 text-xs font-medium text-white transition hover:border-line hover:bg-card"
                    >
                        <span className="hidden sm:inline">Saved</span>
                        <span className="flex h-5 w-5 items-center justify-center rounded-xl border px-3 text-[10px] font-bold text-white">
                            {savedList.length}
                        </span>
                    </Link>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <ul
                    className="flex flex-col gap-1 border-t border-line bg-surface px-4 py-3 [&_a]:block [&_a]:w-full md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {links}
                </ul>
            )}
        </header>
    );
};

export default Navbar;