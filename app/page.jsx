"use client";
import { useState } from "react";
import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  const [showInfoBubble, setShowInfoBubble] = useState(false);

  const handleMouseEnter = () => {
    setShowInfoBubble(true);
  };

  const handleMouseLeave = () => {
    setShowInfoBubble(false);
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 iphone-se:px-2">
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-7xl font-extrabold text-white iphone-se:text-3xl iphone-14-pro:text-5xl">
          Muriel💍Fabrice
        </h1>

        {/* Phrase d'introduction */}
        <p className="text-lg sm:text-2xl italic mt-4 text-white iphone-se:text-base iphone-14-pro:text-lg">
          Célébrer notre amour avec ceux que nous aimons
        </p>

        {/* Date du mariage */}
        <p className="text-xl sm:text-lg font-bold mt-4 text-white iphone-se:text-sm iphone-14-pro:text-base">
          le 16 Août 2025
        </p>
        <p className="text-lg sm:text-lg font-semibold mt-4 text-white iphone-se:text-sm iphone-14-pro:text-base">
          📍 La Ferme de Bertinchamps - Chemin de Bertinchamps, 51 - 1421 Ophain
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

        {/* Tooltip pour les infos */}
        <div
          className="mt-10 relative flex flex-col items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="text-white text-sm">ℹ️ Infos</button>

          {showInfoBubble && (
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-72 bg-white rounded-lg shadow-lg p-4 text-left z-50">
              <h3 className="text-sm text-center font-semibold mb-2 text-[var(--color-primary)]">
                Informations pratiques
              </h3>
              <ul className="text-xs text-gray-700 space-y-2">
                <li>
                  🏨 <strong>Hôtel Bertinchamps</strong> - 2 min à pied
                </li>
                <li>
                  🏨 <strong>Hôtel Grand Luxe</strong> - 5 min en voiture
                </li>
                <li>
                  🚖 Taxi recommandé : <strong>+32 123 45 67 89</strong>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
