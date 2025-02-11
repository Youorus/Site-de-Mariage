"use client";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Confirmation() {
  const [isCouple, setIsCouple] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [formError, setFormError] = useState("");

  const handleCoupleChange = (e) => {
    setIsCouple(e.target.checked);
  };

  const validateInputs = (data) => {
    if (!data.prenom || !data.nom) {
      return "Veuillez remplir tous les champs obligatoires.";
    }

    if (data.isCouple && !data.nomPartenaire) {
      return "Veuillez indiquer le nom de votre partenaire.";
    }

    return ""; // Aucun problème
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    const formData = new FormData(e.target);

    const data = {
      prenom: formData.get("prenom"),
      nom: formData.get("nom"),
      isCouple: isCouple,
      nomPartenaire: isCouple ? formData.get("nomPartenaire") : "",
    };

    console.log("Données envoyées à l'API:", data);

    const errorMessage = validateInputs(data);
    if (errorMessage) {
      setFormError(errorMessage);
      return;
    }

    try {
      const response = await fetch("/api/invites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowThankYouModal(true);
        e.target.reset();
        setIsCouple(false);
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
      <div className="flex mt-20 flex-col items-center justify-center text-center flex-grow relative z-10 px-4 py-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-60 p-8 rounded-lg shadow-xl max-w-lg w-full"
        >
          {formError && (
            <p className="text-red-500 font-medium ">{formError}</p>
          )}
          <p className="text-lg italic mb-4 text-gray-800">
            Nous avons hâte de vous compter parmi nous !
          </p>

          <div className="mb-4 p-3 border-l-4 border-yellow-500 text-yellow-700 rounded">
            Merci de confirmer votre présence avant le <br />
            <strong>31 mai 2025</strong>.
          </div>

          <div className="mb-6">
            <label
              htmlFor="prenom"
              className="block text-left font-medium text-gray-700 mb-2"
            >
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F]"
              placeholder="Entrez votre prénom"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="nom"
              className="block text-left font-medium text-gray-700 mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F]"
              placeholder="Entrez votre nom"
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="isCouple"
              name="isCouple"
              checked={isCouple}
              onChange={handleCoupleChange}
              className="w-5 h-5 text-[#A87E6F] focus:ring-[#A87E6F] border-gray-300 rounded"
            />
            <label
              htmlFor="isCouple"
              className="ml-2 text-left font-medium text-gray-700"
            >
              Je viens en couple
            </label>
          </div>

          {isCouple && (
            <div className="mb-6">
              <label
                htmlFor="nomPartenaire"
                className="block text-left font-medium text-gray-700 mb-2"
              >
                Nom de votre partenaire
              </label>
              <input
                type="text"
                id="nomPartenaire"
                name="nomPartenaire"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F]"
                placeholder="Entrez le nom de votre partenaire"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#A87E6F] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#936A5F] transition-all duration-300"
          >
            🎉 Je serai là !
          </button>
        </form>

        {showThankYouModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
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
