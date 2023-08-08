import PageTitle from "../../../Components/pageTitle";
export default function page() {
  return (
    <>
      <PageTitle title="add" />
      <form className="mx-auto container grid gap-4 grid-cols-2">
        <div className="mb-4">
          <label
            htmlFor="article"
            className="block text-gray-700 font-bold mb-2"
          >
            article
          </label>
          <input
            type="text"
            id="article"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="categorie"
            className="block text-gray-700 font-bold mb-2"
          >
            categorie
          </label>
          <input
            type="text"
            id="categorie"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="lieu" className="block text-gray-700 font-bold mb-2">
            lieu
          </label>
          <input
            type="text"
            id="lieu"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="titel" className="block text-gray-700 font-bold mb-2">
            titel
          </label>
          <input
            type="text"
            id="titel"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            description
          </label>
          <input
            type="text"
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="prix" className="block text-gray-700 font-bold mb-2">
            prix
          </label>
          <input
            type="text"
            id="prix"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between col-span-2">
          <button
            type="submit"
            className="mt-4 bg-secondary text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
