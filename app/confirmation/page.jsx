"use client";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Confirmation() {
  const [isFamily, setIsFamily] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [formError, setFormError] = useState("");

  const handleFamilyChange = (e) => {
    setIsFamily(e.target.checked);
    console.log(isFamily);
  };

  const validateInputs = (data) => {
    if (!data.prenom || !data.nom) {
      return "Veuillez remplir tous les champs obligatoires.";
    }

    if (data.isFamily && (data.adultes <= 0 || data.adultes === "")) {
      return "Le nombre d'adultes doit être au moins 1.";
    }

    return ""; // Aucun problème
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(""); // Réinitialise les erreurs

    const formData = new FormData(e.target);

    const data = {
      prenom: formData.get("prenom"),
      nom: formData.get("nom"),
      isFamily: isFamily, // Utilisez l'état directement
      adultes: isFamily ? Number(formData.get("adultes")) || 0 : 1, // Force 1 adulte si pas une famille
      enfants: isFamily ? Number(formData.get("enfants")) || 0 : 0, // Pas d'enfants si pas une famille
    };

    // Valider les données
    const errorMessage = validateInputs(data);
    if (errorMessage) {
      setFormError(errorMessage);
      return;
    }

    try {
      // Appel de l'API
      const response = await fetch("/api/invites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowThankYouModal(true); // Affiche le modal de remerciement
        e.target.reset(); // Réinitialise le formulaire
        setIsFamily(false); // Réinitialise le checkbox famille
      } else {
        const error = await response.json();
        setFormError(error.message || "Une erreur est survenue.");
      }
    } catch (error) {
      setFormError("Impossible d'envoyer les données. Réessayez plus tard.");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center flex-grow relative z-10 px-4 py-8 iphone-se:px-3 iphone-se:py-6">
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white iphone-se:text-3xl iphone-14-pro:text-4xl">
          Confirmez votre présence
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl italic mb-4 text-white iphone-se:text-sm iphone-14-pro:text-base">
          Nous avons hâte de vous compter parmi nous !
        </p>

        {/* Message d'erreur */}
        {formError && (
          <p className="text-red-500 font-medium mb-4">{formError}</p>
        )}

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-lg w-full animate-slide-up delay-300 iphone-se:p-4 iphone-14-pro:max-w-sm"
        >
          {/* Champ : Prénom */}
          <div className="mb-6">
            <label
              htmlFor="prenom"
              className="block text-left font-medium text-gray-700 mb-2 iphone-se:text-sm iphone-14-pro:text-base"
            >
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F] iphone-se:p-3 iphone-14-pro:p-3"
              placeholder="Entrez votre prénom"
            />
          </div>

          {/* Champ : Nom */}
          <div className="mb-6">
            <label
              htmlFor="nom"
              className="block text-left font-medium text-gray-700 mb-2 iphone-se:text-sm iphone-14-pro:text-base"
            >
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F] iphone-se:p-3 iphone-14-pro:p-3"
              placeholder="Entrez votre nom"
            />
          </div>

          {/* Question : Viendrez-vous avec votre famille ? */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="isFamily"
              name="isFamily"
              checked={isFamily}
              onChange={handleFamilyChange}
              className="w-5 h-5 text-[#A87E6F] focus:ring-[#A87E6F] border-gray-300 rounded iphone-se:w-4 iphone-se:h-4"
            />
            <label
              htmlFor="isFamily"
              className="ml-2 text-left font-medium text-gray-700 iphone-se:text-sm iphone-14-pro:text-base"
            >
              Je viens avec ma famille
            </label>
          </div>

          {/* Si l'utilisateur vient avec sa famille, afficher ces champs */}
          {isFamily && (
            <div className="mb-6">
              <label
                htmlFor="nombre-personnes"
                className="block text-left font-medium text-gray-700 mb-2 iphone-se:text-sm iphone-14-pro:text-base"
              >
                Nombre de personnes
              </label>
              <div className="grid grid-cols-2 gap-4">
                {/* Nombre d'adultes */}
                <div>
                  <label
                    htmlFor="adultes"
                    className="block text-left font-medium text-gray-700 mb-1 iphone-se:text-xs iphone-14-pro:text-sm"
                  >
                    Adultes
                  </label>
                  <input
                    type="number"
                    id="adultes"
                    name="adultes"
                    min="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F] iphone-se:p-2 iphone-14-pro:p-3"
                    placeholder="0"
                    required
                  />
                </div>

                {/* Nombre d'enfants */}
                <div>
                  <label
                    htmlFor="enfants"
                    className="block text-left font-medium text-gray-700 mb-1 iphone-se:text-xs iphone-14-pro:text-sm"
                  >
                    Enfants
                  </label>
                  <input
                    type="number"
                    id="enfants"
                    name="enfants"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F] iphone-se:p-2 iphone-14-pro:p-3"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full bg-[#A87E6F] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#936A5F] transition-all duration-300 iphone-se:text-base iphone-14-pro:text-lg"
          >
            🎉 Je serai là !
          </button>
        </form>

        {/* Modal de remerciement */}
        {showThankYouModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-[#A87E6F]">
                Merci pour votre confirmation !
              </h2>
              <p className="mb-6">Nous avons hâte de vous voir ✨</p>
              <button
                onClick={() => setShowThankYouModal(false)}
                className="px-4 py-2 bg-[#A87E6F] text-white rounded-lg hover:bg-[#936A5F] transition-all duration-300"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
