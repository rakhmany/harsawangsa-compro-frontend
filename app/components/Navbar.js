// Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../style/Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
            <img 
              src="/harsawangsa-white.png" 
              alt="Harsawangsa Logo" 
              height="35"
              className="d-inline-block me-2"
            /> 
            <div className="d-flex flex-column">
              <span className="fw-bold" style={{ fontSize: "1.15rem", lineHeight: "1.2", letterSpacing: "0.05em", color : "#ffffff" }}>
                HARSAWANGSA
              </span>
              <span className="fw-normal text-white" style={{ fontSize: "0.6rem", lineHeight: "1", letterSpacing: "0.1em" }}>
                EDUKASI INDONESIA
              </span>
            </div>
          </Link>

        {/* Menu Items */}
        <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
            <li>
              <Link 
                href="/" 
                className={`${styles.menuLink} ${pathname === "/" ? styles.menuLinkActive : ""}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`${styles.menuLink} ${pathname === "/about/" ? styles.menuLinkActive : ""}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className={`${styles.menuLink} ${pathname === "/services/" ? styles.menuLinkActive : ""}`}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/explore" 
                className={`${styles.menuLink} ${pathname === "/explore/" ? styles.menuLinkActive : ""}`}
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            {/* <li>
              <Link href="/latest-tips" className={styles.menuLink}>
                Latest Tips
              </Link>
            </li> */}
        </ul>

        {/* Auth Buttons */}
        {/* <div className={styles.authButtons}>
          <Link href="/contact" className={styles.contactusBtn}>
            Contact Us
          </Link>
          <Link href="/register" className={styles.registerBtn}>
            Register
          </Link>
          <Link href="/login" className={styles.loginBtn}>
            Login
          </Link>
        </div> */}

        {/* Mobile Menu Toggle */}
        <button 
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.mobileToggleOpen : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileOverlay} 
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
}