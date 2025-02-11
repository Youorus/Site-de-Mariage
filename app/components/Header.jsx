"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center  py-4 px-4 sm:px-12 absolute top-0 z-30 bg-transparent text-white">
      {/* Logo cliquable - caché en mode tablette et mobile */}
      <Link
        href="/"
        className="hidden md:block text-4xl sm:text-5xl font-extrabold cursor-pointer iphone-se:text-3xl iphone-14-pro:text-4xl"
      >
        M&F
      </Link>

      {/* Navigation principale */}
      <nav className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-8 w-full md:w-auto">
        <Link
          href="/programme"
          className="w-full md:w-auto text-center whitespace-nowrap p-2 sm:p-4 text-sm sm:text-lg iphone-se:text-xs iphone-14-pro:text-sm border border-[var(--color-primary)] transition-all duration-300"
        >
          Programme
        </Link>

        <Link
          href="/notreHistoire"
          className="w-full md:w-auto text-center whitespace-nowrap p-2 sm:p-4 text-sm sm:text-lg iphone-se:text-xs iphone-14-pro:text-sm border border-[var(--color-primary)] transition-all duration-300"
        >
          Notre Histoire
        </Link>

        <Link
          href="/confirmation"
          className="w-full md:w-auto text-center whitespace-nowrap p-2 sm:p-4 text-sm sm:text-lg iphone-se:text-xs iphone-14-pro:text-sm bg-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:scale-105 transition-all duration-300"
        >
          Confirmation ma présence
        </Link>

        <button onClick={() => setIsModalOpen(true)}>ℹ️ Infos</button>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white text-black p-6 rounded-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">
              Informations Utiles
            </h2>

            {/* Section Hôtels */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Hôtels à proximité :
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ibis Nivelles</li>
                <li>Le Côté Vert Waterloo</li>
                <li>Van der Valk Nivelles</li>
                <li>Van der Valk Waterloo</li>
                <li>Ibis Waterloo</li>
                <li>Hôtel le 1815</li>
              </ul>
            </div>

            {/* Section Couleurs du thème */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                Couleurs du thème du mariage :
              </h3>
              <div className="flex justify-around items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#CC5500] rounded shadow-md"></div>
                  <p className="mt-2 text-sm">Orange Brûlé</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#556B2F] rounded shadow-md"></div>
                  <p className="mt-2 text-sm">Vert Olive</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#FEFEFE] rounded shadow-md border"></div>
                  <p className="mt-2 text-sm">Ivoire Clair</p>
                </div>
              </div>
              <p className="text-sm italic text-gray-600 mt-3 text-center">
                Ces couleurs sont une inspiration, mais rien n'est obligatoire !
                😊
              </p>
            </div>

            {/* Section sur les enfants */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                À propos des enfants :
              </h3>
              <p className="text-gray-700 text-center">
                Nous aimons nos tout-petits, mais malheureusement, nous ne
                pourrons pas les accueillir avec nous à la réception. Merci de
                votre compréhension 🤗
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:bg-[var(--color-accent)] transition-all duration-300 w-full"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
