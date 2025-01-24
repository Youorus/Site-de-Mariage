import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Image de fond responsive */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/FM-Home.jpg"
          alt="Mariage"
          layout="fill"
          objectFit="cover"
          priority
          className="mr-10"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-700 ease-in-out"></div>
      </div>

      <Header />

      <main className="relative flex items-center justify-center flex-grow z-10 opacity-0 animate-fade-in-bounce">
        {children}
      </main>

      <Footer />
    </div>
  );
}
