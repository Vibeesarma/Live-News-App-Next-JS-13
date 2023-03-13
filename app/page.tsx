import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

const HomePage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log("🚀 ~ file: page.tsx:6 ~ HomePage ~ NewsResponse:", news)

  return <div>{/* News list */}</div>;
};

export default HomePage;
