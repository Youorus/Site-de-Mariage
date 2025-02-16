"use client";
import { useState } from "react";
import Layout from "../components/Layout";

const programmeData = [
  {
    id: 1,
    time: "14h00",
    title: "Cérémonie Religieuse",
    description: "Rejoignez-nous pour une cérémonie empreinte d'émotion.",
    location: "La Pelouse de la Grange Géraldine",
  },
  {
    id: 2,
    time: "16h00",
    title: "Vin d’Honneur",
    description:
      "Partageons un moment convivial autour de délicieux rafraîchissements.",
    location: "La Terrasse de la Grange Géraldine",
  },
  {
    id: 3,
    time: "18h00",
    title: "Réception",
    description:
      "Un dîner festif et chaleureux vous attend dans un cadre élégant.",
    location: "La Grange Géraldine",
  },
  {
    id: 4,
    time: "22h00",
    title: "Ouverture du Bal",
    description:
      "Nous ouvrons la piste de danse pour une soirée mémorable pleine de joie.",
    location: "La Grange Géraldine",
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
      <div className="flex flex-col items-center justify-center text-center flex-grow relative z-10 px-4 py-10">
        {/* Titre principal */}
        <h2 className="text-5xl sm:text-7xl font-extrabold mb-6 text-white iphone-se:text-3xl iphone-14-pro:text-6xl">
          Programme
        </h2>

        {/* Conteneur principal avec hauteur fixe */}
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-2xl max-w-2xl w-full iphone-se:p-6 iphone-14-pro:max-w-lg animate-slide-up min-h-[400px] h-[450px] flex flex-col justify-between">
          {/* Indicateur d'étape */}
          <div className="flex justify-center mb-4 space-x-2">
            {programmeData.map((item, index) => (
              <div
                key={item.id}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-[#A87E6F]" : "bg-gray-300"
                } transition-all duration-300`}
              ></div>
            ))}
          </div>

          {/* Contenu dynamique */}
          <div className="flex-grow flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#A87E6F] mb-2 iphone-se:text-2xl iphone-14-pro:text-3xl">
              {programmeData[activeIndex].title}
            </h2>

            <p className="text-lg mb-1 iphone-se:text-sm iphone-14-pro:text-base">
              ⏰ {programmeData[activeIndex].time}
            </p>

            <p className="text-sm italic text-[#8C6B5D] mb-4 iphone-se:text-xs iphone-14-pro:text-sm">
              📍 {programmeData[activeIndex].location}
            </p>

            <p className="text-base iphone-se:text-sm iphone-14-pro:text-base leading-relaxed">
              {programmeData[activeIndex].description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              className="px-6 py-2 bg-[#8C6B5D] text-white rounded-lg hover:bg-[#7A5C50] transition-all duration-300 iphone-se:px-4 iphone-se:py-2"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-[#A87E6F] text-white rounded-lg hover:bg-[#936A5F] transition-all duration-300 iphone-se:px-4 iphone-se:py-2"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
