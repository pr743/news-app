import React from "react";

const  NewsItem = (props) => {
    let { title, description, imageUrl, url, author, publishedAt, category } =
      props;

    const formattedCategory =
      category && category.length > 0
        ? category.charAt(0).toUpperCase() + category.slice(1)
        : "Top News";

    return (
      <div className="my-3">
        <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
          <div className="position-relative">
            <img
              src={
                imageUrl || "https://via.placeholder.com/300x200?text=No+Image"
              }
              className="card-img-top"
              alt="news"
              style={{ height: "200px", objectFit: "cover" }}
            />
            
            <span
              className={`position-absolute top-0 start-0 m-2 badge rounded-pill shadow text-light ${
                formattedCategory === "Sports"
                  ? "bg-success"
                  : formattedCategory === "Technology"
                  ? "bg-primary"
                  : formattedCategory === "Entertainment"
                  ? "bg-warning text-dark"
                  : formattedCategory === "Health"
                  ? "bg-danger"
                  : formattedCategory === "Business"
                  ? "bg-dark"
                  : "bg-secondary"
              }`}
              style={{ fontSize: "0.75rem", padding: "6px 10px" }}
            >
              {formattedCategory}
            </span>
          </div>

          <div className="card-body">
            <h5 className="card-title fw-semibold text-dark">{title}</h5>

            <p
              className="card-text text-secondary"
              style={{ fontSize: "0.9rem" }}
            >
              {description}
            </p>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                <strong>
                  {author && author.trim() !== "" ? author : "By NewsApp Team"}
                </strong>
                <br />
                {publishedAt
                  ? new Date(publishedAt).toLocaleDateString("en-IN", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "Date Not Available"}

                <br />
                <br />
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-dark rounded-pill px-3"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default NewsItem;
