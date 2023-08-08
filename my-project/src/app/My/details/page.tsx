import Image from "next/image";
import PageTitle from "../../../Components/pageTitle";
import Link from "next/link";

export default function page() {
  return (
    <>
      <PageTitle title="list details" />
      <div className="bg-white rounded-lg shadow-lg p-4 container mx-auto my-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Ma Voiture</h2>
          <span className="text-gray-500">$10,000</span>
        </div>
        <Image
          src="/img1.webp"
          width={500}
          height={500}
          alt="Picture of the prodact"
          className="w-full mb-4 rounded-lg"
        />
        <div>
          <p className="text-gray-600">Une superbe voiture en vente.</p>
          <ul className="mt-4">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1C5.935 1 1 5.935 1 12C1 18.065 5.935 23 12 23C18.065 23 23 18.065 23 12C23 5.935 18.065 1 12 1ZM12 21C6.478 21 2 16.522 2 11C2 5.478 6.478 1 12 1C17.522 1 22 5.478 22 11C22 16.522 17.522 21 12 21Z"
                  fill="currentColor"
                />
                <path
                  d="M17.707 7.293L11 14L6.293 9.293L7.707 7.879L11 11.172L16.293 5.879L17.707 7.293Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-gray-600">2022</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 9H3V7H21V9ZM21 13H3V11H21V13ZM21 17H3V15H21V17Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-gray-600">10,000 miles</span>
            </li>
          </ul>
        </div>
        <button className="mt-4 bg-secondary text-white font-semibold py-2 px-4 rounded-lg mr-4">
          update
        </button>
        <button className="mt-4 bg-secondary text-white font-semibold py-2 px-4 rounded-lg">
          <Link href="/My/list">
            retirer
          </Link>
        </button>
      </div>
    </>
  );
}
