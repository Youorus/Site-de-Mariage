"use client";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const test = [
  {
    id: 1,
    nom: "Ndiaye",
    prenom: "Jean-Paul",
    date_confirmation: "2024-05-15",
  },
  {
    id: 2,
    nom: "Mbarga",
    prenom: "Lucie",
    date_confirmation: "2024-05-16",
  },
  {
    id: 3,
    nom: "Ewane",
    prenom: "Paul-Arthur",
    date_confirmation: "2024-05-20",
  },
  {
    id: 4,
    nom: "Tchatchoua",
    prenom: "Amandine",
    date_confirmation: "2024-05-22",
  },
  {
    id: 5,
    nom: "Kamdem",
    prenom: "Emmanuel",
    date_confirmation: "2024-05-25",
  },
  {
    id: 6,
    nom: "Biloa",
    prenom: "Patricia",
    date_confirmation: "2024-05-27",
  },
  {
    id: 7,
    nom: "Ngono",
    prenom: "Serge-Alain",
    date_confirmation: "2024-05-30",
  },
  {
    id: 8,
    nom: "Ekobo",
    prenom: "Sylvie",
    date_confirmation: "2024-06-01",
  },
  {
    id: 9,
    nom: "Fomena",
    prenom: "Michel",
    date_confirmation: "2024-06-05",
  },
  {
    id: 10,
    nom: "Tientcheu",
    prenom: "Estelle",
    date_confirmation: "2024-06-07",
  },
];

export default function Invites() {
  const [invites, setInvites] = useState([]);
  const [totalInvites, setTotalInvites] = useState(0);

  // Simuler la récupération des données de la DB
  useEffect(() => {
    const fetchInvites = async () => {
      // const response = await fetch("/api/invites"); // Exemple d'API
      const data = test;
      setInvites(data);
      setTotalInvites(data.length);
    };

    fetchInvites();
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-[#A87E6F] mb-10">
          Liste des Invités
        </h1>

        {/* Section Total */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Total des invités :</h2>
          <span className="text-3xl font-bold text-[#8C6B5D]">
            {totalInvites}
          </span>
        </div>

        {/* Scrollable Card */}
        <div className="h-[400px] overflow-y-auto border-t border-gray-200">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#A87E6F] text-white">
                <th className="px-4 py-3 text-left">Nom</th>
                <th className="px-4 py-3 text-left">Prénom</th>
                <th className="px-4 py-3 text-left">Date de Confirmation</th>
              </tr>
            </thead>
            <tbody>
              {invites.map((invite, index) => (
                <tr
                  key={invite.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-4 py-4">{invite.nom}</td>
                  <td className="px-4 py-4">{invite.prenom}</td>
                  <td className="px-4 py-4">
                    {new Date(invite.date_confirmation).toLocaleDateString(
                      "fr-FR"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Message si aucun invité */}
          {invites.length === 0 && (
            <p className="text-center py-6 text-lg italic text-gray-500">
              Aucun invité pour le moment...
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}