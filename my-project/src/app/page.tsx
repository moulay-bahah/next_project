import ArticleItem from "../Components/ArticleItem";
import PageTitle from "../Components/pageTitle";

export default function page() {
  return (
    <>
      <PageTitle title="home" />
      <div className="container mx-auto grid gap-5 grid-cols-fluid pt-5">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    </>
  );
}
