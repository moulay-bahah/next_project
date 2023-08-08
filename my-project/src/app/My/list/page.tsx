import MyArticleItem from "../../../Components/MyArticleItem";
import PageTitle from "../../../Components/pageTitle";
import Link from "next/link";

export default function page() {
  return (
    <>
      <PageTitle title="list" />
      <div className="container mx-auto grid gap-5 grid-cols-fluid pt-5">
        <Link
          href="/My/add"
          className="bg-white flex items-center flex-col rounded-lg justify-between"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80%"
            viewBox="0 0 448 512"
          >
            <path
              className="text-secondary"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          <p className="text-lg text-secondary font-bold mb-4">add</p>
        </Link>
        <MyArticleItem />
        <MyArticleItem />
        <MyArticleItem />
      </div>
    </>
  );
}
