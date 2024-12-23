import Link from "next/link";

export default function Button({ href, children, variant = "primary" }) {
  const bgColor =
    variant === "primary"
      ? "bg-[var(--color-primary)] hover:bg-[var(--color-accent)]"
      : "bg-[var(--color-secondary)] hover:bg-[var(--color-accent)]";

  return (
    <Link
      href={href}
      className={`px-6 py-3 rounded-full text-white ${bgColor} transition-all duration-300`}
    >
      {children}
    </Link>
  );
}
