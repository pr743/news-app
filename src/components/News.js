import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  const lastSpace = text.lastIndexOf(" ", maxLength);
  return text.slice(0, lastSpace > 0 ? lastSpace : maxLength) + "...";
};

const News = ({ heading, category, setProgress }) => {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(9);
  const [hasMore, setHasMore] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

 
  const fetchNews = useCallback(
    async (pageNum = 1, append = false) => {
      setLoading(true);
      try {
        setProgress(10);
        let url = `https://gnews.io/api/v4/top-headlines?token=29a181df3b53d3c9b92d88e8aaea66da&lang=hi&country=in&max=${pageSize}&page=${pageNum}`;
        if (category) url += `&topic=${category}`;

        setProgress(40);
        const res = await fetch(url);
        setProgress(70);
        const data = await res.json();
        setProgress(90);

        const newArticles = data.articles || [];
        setCurrentArticles((prev) =>
          append ? [...prev, ...newArticles] : newArticles
        );
        setHasMore(newArticles.length > 0);
        setLoading(false);
        setProgress(100);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
        setHasMore(false);
        setProgress(100);
      }
    },
    [category, pageSize, setProgress]
  );

  
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      loadMore();
    }

    setShowScrollTop(window.scrollY > 300);
  }, [loading, hasMore]);

  
  const loadMore = () => {
    setPage
    ((prev) => prev + 1);
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  useEffect(() => {
    fetchNews(1, false);
  }, [fetchNews]);

  
  useEffect(() => {
    if (page > 
      1) {
      fetchNews(page, true);
    }
  }, [page, fetchNews]);

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">
        {heading || "Live News Updates"}
      </h1>

      <div className="row">
        {currentArticles.map((article, index) => (
          <div className="col-md-4 mb-4" key={article.url + index}>
            <NewsItem
              title={truncateText(article.title, 90)}
              description={truncateText(article.description, 120)}
              imageUrl={article.image || "https://via.placeholder.com/300x200"}
              url={article.url}
              author={
                article.source?.name || article.author || "By NewsApp Team"
              }
              publishedAt={article.publishedAt}
              category={category}
            />
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center my-3">
          <Spinner />
        </div>
      )}

      {!loading && currentArticles.length === 0 && (
        <p className="text-center">कोई समाचार उपलब्ध नहीं है।</p>
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="btn btn-dark position-fixed"
          style={{
            bottom: "30px",
            right: "30px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            zIndex: 1000,
            boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default News;
