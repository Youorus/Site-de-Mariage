"use client";
import { useState } from "react";
import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
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
      </div>
    </Layout>
  );
}
