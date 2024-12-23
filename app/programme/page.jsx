"use client";
import { useState } from "react";
import Layout from "../components/Layout";

const programmeData = [
  {
    id: 1,
    time: "14h00",
    title: "Cérémonie Laïque",
    description:
      "Rejoignez-nous au jardin pour une cérémonie magique célébrant notre amour.",
    location: "Jardin du Domaine des Rêves",
  },
  {
    id: 2,
    time: "16h00",
    title: "Cocktail",
    description:
      "Savourez un cocktail en plein air accompagné de musique douce et de moments de partage.",
    location: "Terrasse du Domaine",
  },
  {
    id: 3,
    time: "19h00",
    title: "Dîner de Réception",
    description:
      "Un dîner gastronomique dans une ambiance chaleureuse au Domaine des Rêves.",
    location: "Salle de Réception Principale",
  },
  {
    id: 4,
    time: "22h00",
    title: "Ouverture du Bal",
    description:
      "Nous danserons ensemble pour ouvrir cette soirée mémorable sous les étoiles.",
    location: "Grande Salle de Bal",
  },
  {
    id: 5,
    time: "00h00",
    title: "Surprise de Minuit",
    description:
      "Une surprise spéciale attend tous nos invités pour clôturer cette merveilleuse journée.",
    location: "Jardin des Lanternes",
  },
];

export default function Programme() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % programmeData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? programmeData.length - 1 : prevIndex - 1
    );
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center flex-grow relative z-10 px-4 iphone-se:px-2">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 text-white animate-fade-in iphone-se:text-3xl iphone-14-pro:text-6xl">
          Programme du Mariage
        </h1>

        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-2xl w-full iphone-se:p-6 iphone-14-pro:max-w-lg animate-slide-up">
          <h2 className="text-3xl font-bold text-[#A87E6F] mb-4 iphone-se:text-2xl iphone-14-pro:text-3xl">
            {programmeData[activeIndex].title}
          </h2>

          <p className="text-lg mb-2 iphone-se:text-sm iphone-14-pro:text-base">
            {programmeData[activeIndex].time}
          </p>

          <p className="text-sm italic text-[#8C6B5D] mb-4 iphone-se:text-xs iphone-14-pro:text-sm">
            📍 {programmeData[activeIndex].location}
          </p>

          <p className="text-base mb-8 iphone-se:text-sm iphone-14-pro:text-base leading-relaxed">
            {programmeData[activeIndex].description}
          </p>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              className="px-6 py-3 bg-[#8C6B5D] text-white rounded-full hover:bg-[#7A5C50] transition-all duration-300 iphone-se:px-4 iphone-se:py-2"
            >
              ← Précédent
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-[#A87E6F] text-white rounded-full hover:bg-[#936A5F] transition-all duration-300 iphone-se:px-4 iphone-se:py-2"
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
