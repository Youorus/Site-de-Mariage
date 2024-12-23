import Layout from "../components/Layout";

export default function Confirmation() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center flex-grow relative z-10 px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-white  iphone-se:text-3xl iphone-14-pro:text-5xl">
          Confirmez votre présence
        </h1>

        <p className="text-lg sm:text-2xl italic mb-6 text-white animate-fade-in delay-200 iphone-se:text-sm iphone-14-pro:text-lg">
          Nous avons hâte de vous compter parmi nous !
        </p>

        <form className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-lg w-full animate-slide-up delay-400 iphone-se:p-6 iphone-14-pro:max-w-md">
          <div className="mb-6">
            <label
              htmlFor="prenom"
              className="block text-left font-medium mb-2 iphone-se:text-sm iphone-14-pro:text-base"
            >
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F] iphone-se:p-2 iphone-14-pro:p-3"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="nom"
              className="block text-left font-medium mb-2 iphone-se:text-sm iphone-14-pro:text-base"
            >
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F] iphone-se:p-2 iphone-14-pro:p-3"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-left font-medium mb-2 iphone-se:text-sm iphone-14-pro:text-base"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A87E6F] iphone-se:p-2 iphone-14-pro:p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#A87E6F] text-white py-4 rounded-full font-extrabold text-lg hover:bg-[#936A5F] transition-all duration-300 iphone-se:py-3 iphone-14-pro:py-4"
          >
            🎉 Je serai là !
          </button>
        </form>
      </div>
    </Layout>
  );
}
