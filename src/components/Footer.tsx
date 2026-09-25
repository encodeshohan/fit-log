import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t border-line bg-surface">
            <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-6 md:flex-row md:justify-between md:px-6 md:py-8 lg:px-8">
                {/*Logo Portion */}
                <Link href="/" className="flex items-center gap-2.5">
                    <Image
                        src="/assets/logo.png"
                        height={20}
                        width={20}
                        alt="FitLog Logo"
                        className="shrink-0"
                    />
                    <span className="font-secondary text-sm font-bold leading-none text-white">
                        FITLOG
                    </span>
                </Link>

                {/*Copyright Portion */}
                <p className="text-center font-primary text-xs text-muted md:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;