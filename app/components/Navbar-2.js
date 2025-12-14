"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav 
        className="navbar navbar-expand-lg navbar-dark position-absolute w-100"
        style={{ 
          zIndex: 1040,
          backgroundColor: "transparent",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem"
        }}
      >
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <img 
              src="/harsawangsa-orange.png" 
              alt="Harsawangsa Logo" 
              height="35"
              className="d-inline-block me-2"
            /> 
            <div className="d-flex flex-column">
              <span className="fw-bold text-white" style={{ fontSize: "1.15rem", lineHeight: "1.2", letterSpacing: "0.05em" }}>
                HARSAWANGSA
              </span>
              <span className="fw-normal text-white-50" style={{ fontSize: "0.6rem", lineHeight: "1", letterSpacing: "0.1em" }}>
                EDUKASI INDONESIA
              </span>
            </div>
          </Link>

          {/* Hamburger Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link text-white fw-medium px-3"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/bootcamp"
                  className="nav-link text-white fw-medium px-3"
                >
                  Bootcamp
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/events"
                  className="nav-link text-white fw-medium px-3"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/course"
                  className="nav-link text-white fw-medium px-3"
                >
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/article"
                  className="nav-link text-white fw-medium px-3"
                >
                  Article
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className="nav-link text-white fw-medium px-3"
                >
                  Contact
                </Link>
              </li>
              
              {/* Login & Register Buttons */}
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <Link
                  href="/login"
                  className="btn btn-outline-light px-4 py-2 rounded-pill me-2"
                  style={{ 
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    border: "2px solid rgba(255,255,255,0.8)"
                  }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <Link
                  href="/register"
                  className="btn btn-light px-4 py-2 rounded-pill"
                  style={{ 
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    color: "#5B51D8"
                  }}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .navbar {
          transition: all 0.3s ease;
        }

        .navbar-nav {
          z-index: 1041;
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          display: block !important;
          text-decoration: none !important;
          opacity: 0.9 !important;
          font-size: 0.95rem;
        }

        .nav-link:hover {
          opacity: 1 !important;
          color: #ffffff !important;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 50%;
          background-color: #ffffff;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after {
          width: 60%;
        }

        .btn-outline-light {
          transition: all 0.3s ease;
        }

        .btn-outline-light:hover {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }

        .btn-light {
          transition: all 0.3s ease;
          background-color: #fff;
          border: none;
        }

        .btn-light:hover {
          background-color: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          color: #4834DF !important;
        }

        .navbar-collapse.show,
        .navbar-collapse.collapsing {
          display: block !important;
        }

        @media (max-width: 991.98px) {
          .navbar {
            background-color: rgba(91, 81, 216, 0.95) !important;
            backdrop-filter: blur(10px);
          }

          .navbar-collapse {
            padding: 1rem 0;
          }

          .nav-item {
            text-align: center;
          }

          .nav-link::after {
            display: none;
          }

          .btn-outline-light,
          .btn-light {
            width: 100%;
            margin: 0.5rem 0;
          }
        }

        @media (min-width: 992px) {
          .navbar-expand-lg .navbar-collapse {
            display: flex !important;
            flex-basis: auto;
          }

          .navbar-expand-lg .navbar-nav {
            flex-direction: row;
          }
        }
      `}</style>
    </>
  );
}
