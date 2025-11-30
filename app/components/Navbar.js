"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const moduleRef = useRef(null);

  // Close module when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moduleRef.current && !moduleRef.current.contains(event.target)) {
        setIsModuleOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const academies = [
    {
      title: "CONCEPT ART + ILLUS",
      subtitle: "ACADEMY OF DESIGN",
      courses: "73 courses",
      color: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
      icon: "🎨"
    },
    {
      title: "GAME ART",
      subtitle: "ACADEMY OF DESIGN", 
      courses: "123 courses",
      color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      icon: "🎮"
    },
    {
      title: "VFX",
      subtitle: "ACADEMY OF DESIGN",
      courses: "12 courses", 
      color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      icon: "✨"
    }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top" style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #333" }}>
        <div className="container-fluid px-4">
          {/* Logo and Module Button */}
          <div className="d-flex align-items-center">
            {/* Module Toggle Button */}
            <button
              className="btn btn-link p-0 me-3 module-toggle-btn"
              onClick={() => setIsModuleOpen(!isModuleOpen)}
              style={{ color: "#ffffff", fontSize: "18px", textDecoration: "none" }}
            >
              <div className="grid-icon">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </button>

            {/* Logo */}
            <Link href="/" className="navbar-brand fw-bold text-white d-flex align-items-center">
              <span className="logo-text">JayJay</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ boxShadow: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/kursus" className="nav-link text-white hover-link px-3">Kursus</Link>
              </li>
              <li className="nav-item">
                <Link href="/tentang-kami" className="nav-link text-white hover-link px-3">Tentang Kami</Link>
              </li>
              <li className="nav-item">
                <Link href="/ulasan" className="nav-link text-white hover-link px-3">Ulasan</Link>
              </li>
              <li className="nav-item">
                <Link href="/media" className="nav-link text-white hover-link px-3">Media</Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-link text-white hover-link px-3">Blog</Link>
              </li>
              <li className="nav-item">
                <Link href="/b2b-teams" className="nav-link text-white hover-link px-3">B2B For Teams</Link>
              </li>
            </ul>
            
            {/* Right Side Icons */}
            <div className="d-flex align-items-center">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn whatsapp-btn d-flex align-items-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: "70px" }}></div>

      {/* Module Dropdown */}
      {isModuleOpen && (
        <div className="module-overlay" onClick={() => setIsModuleOpen(false)}>
          <div 
            ref={moduleRef}
            className="module-dropdown"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="module-header">
              <h2 className="module-title">Academies</h2>
              <button 
                className="close-btn"
                onClick={() => setIsModuleOpen(false)}
              >
                ×
              </button>
            </div>
            
            <div className="academies-grid">
              {academies.map((academy, index) => (
                <div key={index} className="academy-card" style={{ background: academy.color }}>
                  <div className="academy-content">
                    <div className="academy-icon">{academy.icon}</div>
                    <div className="academy-info">
                      <h3 className="academy-title">{academy.title}</h3>
                      <p className="academy-subtitle">{academy.subtitle}</p>
                      <span className="academy-courses">{academy.courses}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="module-footer">
              <button className="view-all-btn">VIEW ALL COURSES</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .grid-icon {
          display: grid;
          grid-template-columns: repeat(3, 4px);
          grid-gap: 3px;
          width: 20px;
          height: 20px;
        }
        
        .dot {
          width: 4px;
          height: 4px;
          background-color: currentColor;
          border-radius: 50%;
        }
        
        .module-toggle-btn:hover {
          opacity: 0.8;
          transform: scale(1.05);
          transition: all 0.2s ease;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          letter-spacing: -0.5px;
        }
        
        .whatsapp-btn {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }
        
        .whatsapp-btn:hover {
          background: linear-gradient(135deg, #128c7e 0%, #25d366 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
          color: white;
          text-decoration: none;
        }
        
        .hover-link {
          transition: all 0.3s ease;
          position: relative;
          font-weight: 500;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }
        
        .hover-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 50%;
          background-color: #4ade80;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .hover-link:hover {
          color: #4ade80 !important;
        }
        
        .hover-link:hover::after {
          width: 100%;
        }
        
        .gift-link {
          color: #4ade80 !important;
          font-weight: 600;
        }
        
        .gift-link::after {
          background-color: #4ade80;
        }
        
        .nav-icon-btn {
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .nav-icon-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }
        
        .navbar {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .module-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1050;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 120px;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }
        
        .module-dropdown {
          background: linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%);
          border-radius: 20px;
          width: 90%;
          max-width: 800px;
          box-shadow: 
            0 25px 80px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: modalSlideIn 0.3s ease-out;
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .module-header {
          padding: 30px 30px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #333;
          margin-bottom: 30px;
        }
        
        .module-title {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
          padding-bottom: 20px;
          background: linear-gradient(135deg, #fff 0%, #ccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .close-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 8px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .academies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 0 30px 30px;
        }
        
        .academy-card {
          border-radius: 15px;
          padding: 30px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          min-height: 200px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .academy-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          filter: brightness(1.1);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        
        .academy-card:hover::before {
          opacity: 1;
        }
        
        .academy-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }
        
        .academy-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 1;
        }
        
        .academy-icon {
          font-size: 2rem;
          margin-bottom: 15px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        
        .academy-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 5px;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .academy-subtitle {
          font-size: 0.9rem;
          opacity: 0.9;
          margin-bottom: 15px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .academy-courses {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-top: auto;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        
        .module-footer {
          padding: 0 30px 30px;
          text-align: center;
        }
        
        .view-all-btn {
          background: linear-gradient(135deg, #666 0%, #777 100%);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .view-all-btn:hover {
          background: linear-gradient(135deg, #555 0%, #666 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }
        
        @media (max-width: 991px) {
          .navbar-nav {
            margin: 20px 0;
          }
          
          .navbar-nav .nav-link {
            padding: 10px 0;
            border-bottom: 1px solid #333;
          }
          
          .navbar-nav .nav-link:last-child {
            border-bottom: none;
          }
        }
        
        @media (max-width: 768px) {
          .module-dropdown {
            width: 95%;
            margin: 20px;
          }
          
          .module-header {
            padding: 25px 25px 0;
          }
          
          .module-title {
            font-size: 2.2rem;
          }
          
          .academies-grid {
            grid-template-columns: 1fr;
            padding: 0 25px 25px;
            gap: 20px;
          }
          
          .academy-card {
            padding: 30px;
            min-height: 200px;
          }
          
          .module-footer {
            padding: 0 25px 25px;
          }
          
          .logo-text {
            font-size: 1.3rem;
          }
          
          .logo-subtitle {
            font-size: 0.7rem;
          }
        }
        
        @media (max-width: 576px) {
          .module-overlay {
            padding-top: 100px;
          }
          
          .academy-title {
            font-size: 1.4rem;
          }
          
          .academy-card {
            padding: 25px;
            min-height: 180px;
          }
          
          .module-header {
            padding: 20px 20px 0;
          }
          
          .module-title {
            font-size: 2rem;
          }
          
          .academies-grid {
            padding: 0 20px 20px;
          }
          
          .module-footer {
            padding: 0 20px 20px;
          }
        }
      `}</style>
    </>
  );
}
