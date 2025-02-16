"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center py-4 px-4 sm:px-12 absolute top-0 z-30 bg-transparent text-white">
      {/* Logo cliquable */}
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
          Notre histoire
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
          <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[85vh] overflow-y-auto animate-fade-in">
            <h2 className="text-xl font-bold mb-4 text-center">
              Informations Utiles
            </h2>

            {/* Section Lieu */}
            <div className="mb-6 text-start">
              <p className="text-gray-700">
                <strong>📍Ferme Bertinchamps</strong> - Chemin Bertinchamps, 51,
                1421 Ophain{" "}
                <a
                  href="https://www.lafermebertinchamps.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] font-semibold underline hover:text-[var(--color-accent)] transition"
                >
                  Visiter le site officiel
                </a>
              </p>

              {/* Carte Google Maps */}
              <div className="mt-4">
                {/* Carte intégrée avec un marqueur rouge */}
                <iframe
                  title="Ferme Bertinchamps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.555566690165!2d4.367762076551957!3d50.64193247152381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c60d5f711cf3%3A0xd89e3b3e5793709a!2sFerme%20Bertinchamps!5e0!3m2!1sen!2sfr!4v1708090133727"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>

                {/* Lien pour ouvrir Google Maps avec un marqueur rouge */}
                <div className="text-center mt-2">
                  <a
                    href="https://www.google.com/maps?q=Chem.+Bertinchamps+51,+1421+Braine-l'Alleud,+Belgique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex underline items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-all duration-200"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Section Hôtels */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Hôtels à proximité :
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Ibis Nivelles</li>
                <li>Le Côté Vert Waterloo</li>
                <li>Van der Valk Nivelles</li>
                <li>Van der Valk Waterloo</li>
                <li>Ibis Waterloo</li>
                <li>Hôtel le 1815</li>
              </ul>
            </div>

            {/* Section Couleurs du thème */}
            <div className="mb-8">
              {/* Thème du mariage */}
              <div className="text-start mb-6">
                <h4 className="text-xl sm:text-xl font-semibold mb-2 ">
                  Thème du Mariage
                </h4>
                <p className="text-gray-700 text-lg sm:text-lg">
                  Retournons sur les tendances du passé avec du Vintage.
                </p>
              </div>

              {/* Couleurs du mariage */}
              <div className="text-start">
                <h4 className="text-xl sm:text-xl font-semibold mb-4 ">
                  Couleurs
                </h4>

                <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#CC5500] rounded-full shadow-md transition-transform transform hover:scale-110"></div>
                    <p className="mt-2 text-sm sm:text-base">Orange </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#556B2F] rounded-full shadow-md transition-transform transform hover:scale-110"></div>
                    <p className="mt-2 text-sm sm:text-base">Vert Olive</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#F8F4E3] rounded-full shadow-md border transition-transform transform hover:scale-110"></div>
                    <p className="mt-2 text-sm sm:text-base">Ivoire Clair</p>
                  </div>
                </div>

                <p className="text-sm italic text-gray-600 mt-4 text-start">
                  Ces couleurs sont une inspiration, mais rien n'est
                  obligatoire.
                </p>
              </div>
            </div>

            {/* Section sur les enfants */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                À propos des enfants :
              </h3>
              <p className="text-gray-700 text-start">
                Nous aimons nos tout-petits, mais malheureusement nous ne
                pourrons pas les accueillir à la réception. Merci de votre
                compréhension.
              </p>
            </div>

            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-[var(--color-primary)] text-white font-semibold rounded hover:bg-[var(--color-accent)] active:scale-95 transition-all duration-300 mx-auto block"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
