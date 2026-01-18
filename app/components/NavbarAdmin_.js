"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../style/Navbar.module.css";

export default function NavbarAdmin() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container-fluid">
        <Link href="/sysadmin" className="navbar-brand fw-bold">
          <span style={{ color: "#f48a1d" }}>Harsawangsa</span> Admin
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarAdminContent"
          aria-controls="navbarAdminContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarAdminContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                href="/sysadmin" 
                className={`nav-link ${pathname === "/sysadmin" ? "active" : ""}`}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/sysadmin/content" 
                className={`nav-link ${pathname === "/sysadmin/content" ? "active" : ""}`}
              >
                Content
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/sysadmin/users" 
                className={`nav-link ${pathname === "/sysadmin/users" ? "active" : ""}`}
              >
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/sysadmin/settings" 
                className={`nav-link ${pathname === "/sysadmin/settings" ? "active" : ""}`}
              >
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/" 
                className="nav-link text-warning"
              >
                <i className="mdi mdi-arrow-left-box"></i> Back to Site
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
