import Image from "next/image";
import Layout from "../components/Layout";

export default function Histoire() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center flex-grow relative z-10 px-4 pt-20 sm:pt-24 lg:pt-28">
        {/* Titre principal */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-10 iphone-se:text-4xl">
          Notre histoire
        </h2>

        {/* Section principale avec scroll */}
        <section className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl iphone-se:max-w-sm iphone-14-pro:max-w-lg h-[500px] overflow-y-scroll">
          {/* Image responsive */}
          <div className="w-full flex justify-center">
            <Image
              src="/home.jpg"
              alt="Moment spécial"
              width={600}
              height={400}
              className="rounded-lg shadow-lg iphone-se:w-[300px] iphone-se:h-auto iphone-14-pro:w-[450px]"
            />
          </div>

          {/* Texte avec une meilleure présentation */}
          <div className="mt-6 text-justify space-y-6 text-lg sm:text-xl iphone-se:text-base iphone-14-pro:text-lg leading-relaxed">
            <p>
              <strong>La rencontre des tangentes</strong> <br /> <br />— Il
              était une fois... <br /> Tout commence au point{" "}
              <strong>4.0482183N, 9.7010417E</strong> pour elle et au point{" "}
              <strong>5.43471N, 10.419E</strong> pour lui, soit 239 km l’un de
              l’autre. Elle partira pour Marseille et puis Paris; et lui pour
              Cape Town et ensuite Leuven. Des trajectoires qui n’étaient pas
              prédestinées à se rencontrer mais qui ont fini par se croiser à
              Paris, par l’intermédiaire d’amis.
            </p>

            <p>
              <strong>Paris, capitale de l’amour…</strong> Pourtant, après cette
              rencontre, une vague de doutes prend le dessus et notre histoire
              s’arrête à ce point !
            </p>

            <p>
              <strong>
                Treize ans plus tard…
                <br />
              </strong>{" "}
              En ce <strong>16 Août 2025</strong>, nous avons décidé d’écrire un
              nouveau chapitre des tangentes en vous conviant à célébrer avec
              nous cette journée unique, le début de notre « Pour Toujours ».
            </p>

            <p>
              <strong> Merci</strong> d’être présents pour nous accompagner dans
              cette belle aventure et partager ce moment de convergence rempli
              d’amour, d’émotion et de joie.
            </p>

            <p>
              <em>
                Comment en sommes-nous arrivés là ? Vous le saurez ce 16 Août
                2025…
              </em>
            </p>

            <p>
              Avec tout notre amour,
              <br />
              <strong>Muriel et Fabrice</strong>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
