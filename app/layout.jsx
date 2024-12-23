import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head"; // Import du composant Head
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${poppins.variable}`}>
      <Head>
        <title>Fabrice & Murielle - Mariage</title>
        <meta
          name="description"
          content="Célébrons ensemble l'union de Fabrice & Murielle. Rejoignez-nous pour cette journée mémorable !"
        />
        <meta property="og:title" content="Mariage de Fabrice & Murielle" />
        <meta
          property="og:description"
          content="Découvrez le programme et confirmez votre présence."
        />
      </Head>

      <body className="min-h-screen flex flex-col">
        <div className="relative w-full min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
