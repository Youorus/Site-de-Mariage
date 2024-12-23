import Layout from "../components/Layout";

export default function Confirmation() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center text-center flex-grow relative z-10 px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-white animate-slide-in">
          Confirmez votre présence
        </h1>
        <p className="text-lg sm:text-2xl italic mb-6 text-white animate-fade-in delay-200">
          Nous avons hâte de vous compter parmi nous !
        </p>

        <form className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-lg w-full animate-slide-up delay-400">
          <div className="mb-6">
            <label
              htmlFor="prenom"
              className="block text-left font-medium mb-2"
            >
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="nom" className="block text-left font-medium mb-2">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-left font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#A87E6F] text-white py-4 rounded-full font-extrabold text-lg hover:bg-[#936A5F] transition-all duration-300"
          >
            🎉 Je serai la !
          </button>
        </form>
      </main>
    </Layout>
  );
}
