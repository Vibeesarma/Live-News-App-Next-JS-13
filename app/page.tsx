import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

// tempory data because limited api calles
import response from "../response.json";

const HomePage = async () => {
  const news: NewsResponse = response 

    // const news: NewsResponse =  (await fetchNews(categories.join(",")));
 
  return (
    <div>
      {/* News list */}
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
