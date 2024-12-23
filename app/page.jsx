import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center text-center relative">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-white">
          Fabrice 💍 Murielle
        </h1>
        <p className="text-lg sm:text-2xl italic mt-4 text-white">
          Célébrer notre amour avec ceux que nous aimons
        </p>
        <br />
        <p className="text-lg sm:text-lg bold mt-4 text-white">
          le 15 Aout 2025
        </p>

        <div className="mt-10 flex space-x-6">
          <Link
            className={`px-6 py-3 rounded text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
            href="/programme"
          >
            Programme
          </Link>
          <Link
            className={`px-6 py-3 rounded text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
            href="/confirmation"
          >
            Confirmer ma presence
          </Link>
        </div>
      </div>
    </Layout>
  );
}
