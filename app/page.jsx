import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 iphone-se:px-2">
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-7xl font-extrabold text-white iphone-se:text-3xl iphone-14-pro:text-5xl">
          Fabrice 💍 Murielle
        </h1>

        {/* Phrase d'introduction */}
        <p className="text-lg sm:text-2xl italic mt-4 text-white iphone-se:text-base iphone-14-pro:text-lg">
          Célébrer notre amour avec ceux que nous aimons
        </p>

        {/* Date du mariage */}
        <p className="text-lg sm:text-lg font-semibold mt-4 text-white iphone-se:text-sm iphone-14-pro:text-base">
          le 15 Aout 2025
        </p>

        {/* Boutons */}
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/programme"
            className="px-6 py-3 rounded text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 iphone-se:px-4 iphone-14-pro:px-5"
          >
            Programme
          </Link>
          <Link
            href="/confirmation"
            className="px-6 py-3 rounded text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 iphone-se:px-4 iphone-14-pro:px-5"
          >
            Confirmer ma présence
          </Link>
        </div>
      </div>
    </Layout>
  );
}
