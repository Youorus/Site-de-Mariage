import Image from "next/image";
import Layout from "../components/Layout";

export default function Histoire() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center flex-grow relative z-10 px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-10 iphone-se:text-4xl">
          Notre Histoire
        </h1>

        {/* Section principale avec scroll */}
        <section className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl iphone-se:max-w-sm iphone-14-pro:max-w-lg h-[500px] overflow-y-scroll">
          <p className="text-lg sm:text-xl mb-6 iphone-se:text-base iphone-14-pro:text-lg leading-relaxed">
            Nec piget dicere avide magis hanc insulam populum Romanum invasisse
            quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii
            nostri angustias iusso sine ulla culpa proscribi ideoque hausto
            veneno voluntaria morte deleto et tributaria facta est et velut
            hostiles eius exuviae classi inpositae in urbem advectae sunt per
            Catonem, nunc repetetur ordo gestorum.
          </p>

          {/* Image responsive */}
          <div className="w-full flex justify-center">
            <Image
              src="/histoire1.jpg"
              alt="Moment spécial"
              width={600}
              height={400}
              className="rounded-lg shadow-lg iphone-se:w-[300px] iphone-se:h-auto iphone-14-pro:w-[450px]"
            />
          </div>

          <p className="text-lg sm:text-xl mt-6 iphone-se:text-base iphone-14-pro:text-lg leading-relaxed">
            Victus universis caro ferina est lactisque abundans copia qua
            sustentantur, et herbae multiplices et siquae alites capi per
            aucupium possint, et plerosque mos vidimus frumenti usum et vini
            penitus ignorantes. Homines enim eruditos et sobrios ut infaustos et
            inutiles vitant, eo quoque accedente quod et nomenclatores adsueti
            haec et talia venditare, mercede accepta lucris quosdam et prandiis
            inserunt subditicios ignobiles et obscuros.
          </p>

          {/* Deuxième Image */}
          <div className="w-full flex justify-center mt-6">
            <Image
              src="/histoire1.jpg"
              alt="Moment spécial"
              width={600}
              height={400}
              className="rounded-lg shadow-lg iphone-se:w-[300px] iphone-se:h-auto iphone-14-pro:w-[450px]"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
