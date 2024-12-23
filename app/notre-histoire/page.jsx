import Image from "next/image";
import Layout from "../components/Layout";

export default function Histoire() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-6xl font-extrabold text-white mb-10">
          Notre Histoire
        </h1>
        <section className="bg-white p-8 rounded-lg shadow-xl max-w-3xl h-[500px] overflow-y-scroll">
          <p className="text-lg mb-6">
            Nec piget dicere avide magis hanc insulam populum Romanum invasisse
            quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii
            nostri angustias iusso sine ulla culpa proscribi ideoque hausto
            veneno voluntaria morte deleto et tributaria facta est et velut
            <br />
            <Image
              src="/histoire1.jpg"
              alt="Moment spécial"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            hostiles eius exuviae classi inpositae in urbem advectae sunt per
            Catonem, nunc repetetur ordo gestorum. Victus universis caro ferina
            est lactisque abundans copia qua sustentantur, et herbae multiplices
            et siquae alites capi per aucupium possint, et plerosque mos vidimus
            frumenti usum et vini penitus ignorantes. Homines enim eruditos et
            sobrios ut infaustos et inutiles vitant, eo quoque accedente quod et
            nomenclatores adsueti haec et talia venditare, mercede accepta
            lucris quosdam et prandiis inserunt subditicios ignobiles et
            obscuros.
          </p>
          <Image
            src="/histoire1.jpg"
            alt="Moment spécial"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </section>
      </div>
    </Layout>
  );
}
