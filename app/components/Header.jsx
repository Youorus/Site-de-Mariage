import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4 px-4 sm:px-12 absolute top-0 z-30 bg-transparent text-white">
      {/* Logo cliquable */}
      <Link
        href="/"
        className="text-4xl sm:text-5xl font-extrabold cursor-pointer"
      >
        F&M
      </Link>

      {/* Navigation principale */}
      <nav className="flex space-x-2 sm:space-x-8">
        <Link
          href="/programme"
          className="p-5 text-base sm:text-lg border  border-[var(--color-primary)] transition-all duration-300
       "
        >
          Programme
        </Link>
        <Link
          href="/notre-histoire"
          className="p-5 text-base sm:text-lg bg-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:scale-105 transition-all duration-300"
        >
          Notre Histoire
        </Link>
      </nav>
    </header>
  );
}
