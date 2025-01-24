import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4 px-4 sm:px-12 absolute top-0 z-30 bg-transparent text-white">
      {/* Logo cliquable */}
      <Link
        href="/"
        className="text-4xl sm:text-5xl font-extrabold cursor-pointer iphone-se:text-3xl iphone-14-pro:text-4xl"
      >
        M&F
      </Link>

      {/* Navigation principale */}
      <nav className="flex space-x-2 sm:space-x-8">
        <Link
          href="/programme"
          className="p-4 text-sm sm:text-lg iphone-se:text-xs iphone-14-pro:text-sm border border-[var(--color-primary)] transition-all duration-300"
        >
          Programme
        </Link>
        <Link
          href="/notreHistoire"
          className="p-4 text-sm sm:text-lg iphone-se:text-xs iphone-14-pro:text-sm bg-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:scale-105 transition-all duration-300"
        >
          Notre Histoire
        </Link>
      </nav>
    </header>
  );
}
