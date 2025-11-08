import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const CORS_PROXY = "https://api.allorigins.win/raw?url=";
const API_KEY = "29a181df3b53d3c9b92d88e8aaea66da";

const News = ({ category, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=hi&country=in&max=9&page=1${
    category ? `&topic=${category}` : ""
  }`;

  useEffect(() => {
    async function fetchNews() {
      try {
        setProgress(10);
        setLoading(true);
        setError(null);

       
        const url =
          window.location.hostname === "localhost"
            ? API_URL
            : `${CORS_PROXY}${encodeURIComponent(API_URL)}`;

        setProgress(40);
        const response = await fetch(url);
        setProgress(70);

        if (!response.ok) throw new Error(`Error ${response.status}`);

        const data = await response.json();

        
        const articlesData =
          typeof data === "string" ? JSON.parse(data).articles : data.articles;

        setArticles(articlesData || []);
        setProgress(100);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
        setProgress(100);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [category, setProgress]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;

  return (
    <div className="news-container">
      <h2 className="text-center mb-4">📰 Top Headlines</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <NewsItem
              title={article.title}
              description={article.description}
              imageUrl={article.image || "https://via.placeholder.com/300x200"}
              url={article.url}
              author={article.source?.name || article.author || "NewsApp Team"}
              publishedAt={article.publishedAt}
              category={category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
