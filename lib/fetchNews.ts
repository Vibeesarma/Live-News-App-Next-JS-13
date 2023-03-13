import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // graphql query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        courtries: "gb"
        sources: $categories
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          language
          published_at
          source
          image
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // fetch function with nextjs13 caching...........
  const res = await fetch(
    "https://guapua.stepzen.net/api/exiled-elephant/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      // the below one mean if not dynminc it's vslidate the response and fetch only after 20s
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  // sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // return res
  return news;
};

export default fetchNews;
