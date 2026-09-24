import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#090A0D] border-t border-[#1A1D24] py-6 md:py-8 lg:py-4">
            <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-6 md:flex-row md:justify-between md:px-6 md:py-8 lg:px-8">
                {/* Logo Portion */}
                <Link href="/" className="flex items-center gap-2.5">
                    <Image
                        src="/assets/logo.png"
                        height={20}
                        width={20}
                        alt="Logo Image"
                        className="shrink-0"
                    />
                    <span className="font-secondary font-bold text-sm leading-none text-white">
                        FITLOG
                    </span>
                </Link>

                {/* Copyright Portion */}
                <div>
                    <p className="font-primary text-xs text-[#6B7280] text-center md:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
}