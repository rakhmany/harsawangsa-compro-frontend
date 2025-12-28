"use client";

import { useState } from "react";
import Link from "next/link";

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    document.body.classList.toggle("sidebar-enable");
  };

  return (
    <header id="page-topbar" style={{ background: 'linear-gradient(135deg, #1e88e5 0%, #1976d2 100%)', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
      <div className="navbar-header">
        <div className="d-flex align-items-center">
          {/* LOGO */}
          <div className="navbar-brand-box" style={{ background: 'transparent' }}>
            <Link href="/sysadmin" className="logo logo-light">
              <span className="logo-sm">
                <img src="/harsawangsa-orange-square.png" alt="" height="28" />
              </span>
              <span className="logo-lg d-flex align-items-center">
                <img src="/harsawangsa-orange-square.png" alt="" height="28" />
                <span className="logo-txt ms-2 text-white fw-bold" style={{ fontSize: '18px' }}>HARSAWANGSA</span>
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-18 header-item waves-effect vertical-menu-btn text-white"
            id="vertical-menu-btn"
            onClick={toggleMenu}
            style={{ background: 'transparent', border: 'none' }}
          >
            <i className="mdi mdi-menu"></i>
          </button>

          {/* App Search - Centered */}
          <form className="app-search d-none d-lg-block ms-4" style={{ flex: '0 0 400px' }}>
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  border: 'none',
                  color: 'white',
                  borderRadius: '6px',
                  paddingLeft: '40px'
                }}
              />
              <button 
                type="submit" 
                className="btn position-absolute" 
                style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', padding: 0 }}
              >
                <i className="mdi mdi-magnify text-white font-size-18"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="d-flex align-items-center">
          {/* Language Selector */}
          <div className="dropdown d-none d-lg-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect text-white"
              style={{ background: 'transparent', border: 'none' }}
            >
              <img src="https://flagcdn.com/w40/us.png" alt="English" height="16" className="me-1" />
            </button>
          </div>

          {/* Dark/Light Mode */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect text-white"
              style={{ background: 'transparent', border: 'none' }}
              onClick={() => {
                const mode = document.body.getAttribute("data-layout-mode");
                document.body.setAttribute(
                  "data-layout-mode",
                  mode === "dark" ? "light" : "dark"
                );
              }}
            >
              <i className="mdi mdi-weather-night font-size-20"></i>
            </button>
          </div>

          {/* Grid/Apps */}
          <div className="dropdown d-none d-lg-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect text-white"
              style={{ background: 'transparent', border: 'none' }}
            >
              <i className="mdi mdi-apps font-size-20"></i>
            </button>
          </div>

          {/* Notification */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect text-white position-relative"
              id="page-header-notifications-dropdown"
              style={{ background: 'transparent', border: 'none' }}
            >
              <i className="mdi mdi-bell-outline font-size-20"></i>
              <span className="badge bg-danger rounded-pill position-absolute" style={{ top: '8px', right: '8px', fontSize: '9px', padding: '2px 5px' }}>3</span>
            </button>
          </div>

          {/* Settings */}
          <div className="dropdown d-none d-lg-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect text-white"
              style={{ background: 'transparent', border: 'none' }}
            >
              <i className="mdi mdi-cog-outline font-size-20"></i>
            </button>
          </div>

          {/* Profile */}
          <div className="dropdown d-inline-block ms-1">
            <button
              type="button"
              className="btn header-item waves-effect d-flex align-items-center"
              id="page-header-user-dropdown"
              style={{ background: 'transparent', border: 'none', color: 'white' }}
            >
              <img
                className="rounded-circle header-profile-user"
                src="/assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Admin&background=f48a1d&color=fff";
                }}
              />
              <span className="d-none d-xl-inline-block ms-2 fw-medium font-size-14 text-white">
                Admin
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block ms-1 font-size-14"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
