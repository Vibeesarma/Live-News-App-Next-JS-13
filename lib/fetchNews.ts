import { gql } from "graphql-request";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // graphql query
  const GET_QUERY = gql`
    query MyQuery(
      $access_key:String!
      $categories:String!
      $keywords:String
    ){
      myQuery(
        access_key: $access_key
        categories:$categories
        countries:"gb"
        sort:"published_desc"
        keywords:$keywords
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

  // fetch function with nextjs13 cache
  // sort function by images vs not images present
  // return res
};

export default fetchNews;
