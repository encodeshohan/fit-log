import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-32 text-center">
            <h1 className="mb-2 font-secondary text-7xl font-extrabold text-lime">
                404
            </h1>
            <h2 className="mb-4 font-secondary text-xl font-bold uppercase text-white">
                PAGE NOT FOUND!
            </h2>
            <p className="font-primary mb-6 text-xs text-regular text-muted">
                The page you are looking for does not exist!
            </p>

            <Link
                href="/"
                className="rounded-xl bg-lime px-6 py-2.5 text-xs font-bold text-black transition hover:brightness-90"
            >
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;