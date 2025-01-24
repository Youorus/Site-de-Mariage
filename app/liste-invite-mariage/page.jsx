"use client";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function Invites() {
  const [invites, setInvites] = useState([]);
  const [totalInvites, setTotalInvites] = useState(0);
  const [totalFamilles, setTotalFamilles] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedInvite, setSelectedInvite] = useState(null);

  // Fonction pour récupérer les données via API
  const fetchInvites = async () => {
    try {
      const response = await fetch("/api/invites", { method: "GET" });
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des invités");
      }
      const data = await response.json();

      setInvites(data);

      // Calcul des totaux
      const totalPersons = data.reduce(
        (acc, invite) => acc + invite.adultes + invite.enfants,
        0
      );
      setTotalInvites(totalPersons);

      const totalFamilies = data.filter((invite) => invite.is_family).length;
      setTotalFamilles(totalFamilies);
    } catch (error) {
      console.error("Erreur:", error.message);
    }
  };

  useEffect(() => {
    fetchInvites();
  }, []);

  // Fonction pour ouvrir le modal
  const handleDeleteClick = (invite) => {
    setSelectedInvite(invite);
    setShowModal(true);
  };

  // Fonction pour confirmer la suppression
  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`/api/invites?id=${selectedInvite.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de l'invité");
      }
      setInvites((prevInvites) =>
        prevInvites.filter((invite) => invite.id !== selectedInvite.id)
      );
      setShowModal(false);
      setSelectedInvite(null);
    } catch (error) {
      console.error("Erreur:", error.message);
    }
  };

  // Fonction pour fermer le modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInvite(null);
  };

  return (
    <Layout>
      <div className="max-w-full sm:max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-8">
        {/* Titre principal */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-[#A87E6F] mb-6">
          Liste des Invités
        </h1>

        {/* Section Totaux */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold">
              Total des invités : {totalInvites}
            </h2>
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold">
              Familles présentes : {totalFamilles}
            </h2>
          </div>
        </div>

        {/* Table des invités */}
        <div className="h-[300px] sm:h-[400px] overflow-x-auto border-t border-gray-200 rounded-lg">
          {invites.length > 0 ? (
            <table className="w-full table-auto border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-[#A87E6F] text-white">
                  <th className="px-2 sm:px-4 py-2 text-left">Nom</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Prénom</th>
                  <th className="px-2 sm:px-4 py-2 text-left">
                    Date de Confirmation
                  </th>
                  <th className="px-2 sm:px-4 py-2 text-left">Nombre</th>
                  <th className="px-2 sm:px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {invites.map((invite, index) => (
                  <tr
                    key={invite.id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 group transition-colors`}
                  >
                    <td className="px-2 sm:px-4 py-2">{invite.nom}</td>
                    <td className="px-2 sm:px-4 py-2">{invite.prenom}</td>
                    <td className="px-2 sm:px-4 py-2">
                      {new Date(invite.date_confirmation).toLocaleDateString(
                        "fr-FR"
                      )}
                    </td>
                    <td className=" sm:px-1 py-2">
                      {invite.adultes + invite.enfants}{" "}
                      {invite.is_family ? "personnes" : "personne"}
                    </td>
                    <td className="px-2 sm:px-4 py-2">
                      <button
                        onClick={() => handleDeleteClick(invite)}
                        className="text-red-600 hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center py-4 sm:py-6 italic text-gray-500">
              Aucun invité pour le moment...
            </p>
          )}
        </div>

        {/* Modal de confirmation */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl w-[95%] sm:w-[80%] md:max-w-md">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
                Confirmez la suppression
              </h2>
              <p className="mb-6 text-center">
                Êtes-vous sûr de vouloir supprimer{" "}
                <strong>
                  {selectedInvite?.prenom} {selectedInvite?.nom}
                </strong>{" "}
                de la liste des invités ?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Annuler
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
