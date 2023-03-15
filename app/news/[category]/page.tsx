import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};

const NewsCategory = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

// when you change this page to statstic you want to generate page when that function default nexts js gives you
export const generateStaticParams = () => {
  return categories.map((category) => ({ category: category }));
};
