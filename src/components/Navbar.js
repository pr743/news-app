import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={handleClose}>
          NEWSORA
        </Link>

        
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span
              style={{
                fontSize: "1.8rem",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ✕
            </span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/", name: "Home" },
              { path: "/latest", name: "Latest" },
              { path: "/sports", name: "Sports" },
              { path: "/business", name: "Business" },
              { path: "/entertainment", name: "Entertainment" },
              { path: "/health", name: "Health" },
              { path: "/science", name: "Science" },
              { path: "/technology", name: "Technology" },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  to={item.path}
                  onClick={handleClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
