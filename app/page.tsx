import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

const HomePage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      {/* News list */}
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
