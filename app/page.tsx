import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

const HomePage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return <div>{/* News list */}</div>;
};

export default HomePage;
