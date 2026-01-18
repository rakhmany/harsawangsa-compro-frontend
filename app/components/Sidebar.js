"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  
  // Normalize pathname - hapus trailing slash untuk matching yang akurat
  const normalizedPathname = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;

  const menuItems = [
    {
      label: "Dashboard",
      icon: "mdi mdi-home-variant",
      href: "/sysadmin",
      badge: "9+",
      badgeColor: "bg-success"
    },
    {
      label: "Content",
      icon: "mdi mdi-file-document-outline",
      href: "/sysadmin/content",
    },
    {
      label: "Company Values",
      icon: "mdi mdi-star-circle",
      href: "/sysadmin/company-values",
    },
    {
      label: "Team Members",
      icon: "mdi mdi-account-multiple",
      href: "/sysadmin/team-members",
    },
    {
      label: "Portfolio",
      icon: "mdi mdi-briefcase",
      href: "/sysadmin/portfolio",
    },
    {
      label: "Services",
      icon: "mdi mdi-tools",
      href: "/sysadmin/services",
    },
    {
      label: "Messages",
      icon: "mdi mdi-email",
      href: "/sysadmin/messages",
    },
    {
      label: "Menu Management",
      icon: "mdi mdi-menu",
      href: "/sysadmin/menus",
    },
    {
      label: "Users",
      icon: "mdi mdi-account-group",
      href: "/sysadmin/users",
    },
    {
      label: "Settings",
      icon: "mdi mdi-cog-outline",
      href: "/sysadmin/settings",
    },
  ];

  const appsMenu = [
    { label: "Ecommerce", icon: "mdi mdi-cart-outline", href: "#" },
    { label: "Chat", icon: "mdi mdi-message-outline", href: "#" },
    { label: "Email", icon: "mdi mdi-email-outline", href: "#" },
    { label: "Calendar", icon: "mdi mdi-calendar-outline", href: "#" },
    { label: "Contacts", icon: "mdi mdi-account-outline", href: "#" },
    { label: "Tasks", icon: "mdi mdi-clipboard-check-outline", href: "#" },
  ];

  const pagesMenu = [
    { label: "Authentication", icon: "mdi mdi-shield-account-outline", href: "#" },
    { label: "Pages", icon: "mdi mdi-file-document-multiple-outline", href: "#" },
    { label: "Horizontal", icon: "mdi mdi-view-grid-outline", href: "#" },
  ];

  const componentsMenu = [
    { label: "Bootstrap", icon: "mdi mdi-bootstrap", href: "#" },
    { label: "Icons", icon: "mdi mdi-shape-outline", href: "#" },
    { label: "Charts", icon: "mdi mdi-chart-line", href: "#" },
    { label: "Tables", icon: "mdi mdi-table", href: "#" },
    { label: "Forms", icon: "mdi mdi-form-select", href: "#" },
    { label: "Maps", icon: "mdi mdi-map-marker-outline", href: "#" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className="vertical-menu" style={{ background: 'white', borderRight: '1px solid #f0f0f0', height: '100vh', position: 'fixed', top: 0, left: 0, overflowY: 'auto', overflowX: 'hidden' }}>
        <div className="h-100" style={{ paddingTop: '70px', paddingBottom: '20px' }}>
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title" key="menu" style={{ color: '#98a6ad', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', padding: '15px 20px 5px', letterSpacing: '0.5px' }}>Menu</li>

              {menuItems.map((item, index) => {
                const isActive = normalizedPathname === item.href;
                return (
                  <li key={index} className={isActive ? "mm-active" : ""}>
                    <Link 
                      href={item.href} 
                      className={`waves-effect ${isActive ? "active" : ""}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 20px',
                        color: isActive ? '#f48a1d' : '#20202093',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: isActive ? '700' : '500',
                        background: isActive ? '#f4891d4c' : 'transparent',
                        borderLeft: isActive ? '4px solid #f48a1d' : '4px solid transparent',
                        transition: 'all 0.2s ease',
                        boxShadow: isActive ? 'inset 0 0 10px rgba(244, 138, 29, 0.1)' : 'none',
                        position: 'relative'
                      }}
                    >
                      <i className={item.icon} style={{ fontSize: '18px', marginRight: '12px', minWidth: '20px' }}></i>
                      <span className="menu-text">{item.label}</span>
                      {item.badge && (
                        <span className={`badge ${item.badgeColor} rounded-pill ms-auto`} style={{ fontSize: '10px', padding: '3px 7px' }}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}

              <li className="menu-title mt-3" key="apps" style={{ color: '#98a6ad', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', padding: '15px 20px 5px', letterSpacing: '0.5px' }}>Apps</li>
              
              {appsMenu.map((item, index) => (
                <li key={`app-${index}`}>
                  <Link 
                    href={item.href} 
                    className="waves-effect"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 20px',
                      color: '#6c757d',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className={item.icon} style={{ fontSize: '18px', marginRight: '12px', minWidth: '20px' }}></i>
                    <span className="menu-text">{item.label}</span>
                  </Link>
                </li>
              ))}

              <li className="menu-title mt-3" key="pages" style={{ color: '#98a6ad', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', padding: '15px 20px 5px', letterSpacing: '0.5px' }}>Pages</li>
              
              {pagesMenu.map((item, index) => (
                <li key={`page-${index}`}>
                  <Link 
                    href={item.href} 
                    className="waves-effect"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 20px',
                      color: '#6c757d',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className={item.icon} style={{ fontSize: '18px', marginRight: '12px', minWidth: '20px' }}></i>
                    <span className="menu-text">{item.label}</span>
                  </Link>
                </li>
              ))}

              

              <li className="mt-4">
                <Link 
                  href="/" 
                  className="waves-effect"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 20px',
                    color: '#6c757d',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <i className="mdi mdi-arrow-left-box" style={{ fontSize: '18px', marginRight: '12px', minWidth: '20px' }}></i>
                  <span className="menu-text">Back to Website</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
        </div>
      </div>
      {/* Left Sidebar End */}

      <style jsx global>{`
        /* Active menu state - SUPER IMPORTANT untuk visibility */
        .vertical-menu li.mm-active > a,
        .vertical-menu a.active {
          color: #f48a1d !important;
          background: rgba(244, 138, 29, 0.1) !important;
          border-left: 4px solid #f48a1d !important;
          font-weight: 700 !important;
          box-shadow: inset 0 0 10px rgba(244, 138, 29, 0.1) !important;
        }

        /* Scrollbar styling untuk sidebar */
        .vertical-menu::-webkit-scrollbar {
          width: 6px;
        }

        .vertical-menu::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .vertical-menu::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .vertical-menu::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Sidebar collapsed state */
        body:not(.sidebar-enable) .vertical-menu {
          margin-left: 0;
          width: 70px;
        }

        body:not(.sidebar-enable) .vertical-menu .menu-text,
        body:not(.sidebar-enable) .vertical-menu .menu-title,
        body:not(.sidebar-enable) .vertical-menu .badge {
          display: none;
        }

        body:not(.sidebar-enable) .vertical-menu a {
          justify-content: center;
          padding: 15px 0;
        }

        body:not(.sidebar-enable) .vertical-menu a i {
          margin-right: 0;
          font-size: 22px;
        }

        body:not(.sidebar-enable) .main-content {
          margin-left: 70px;
        }

        /* Sidebar expanded state */
        body.sidebar-enable .vertical-menu {
          width: 240px;
        }

        body.sidebar-enable .main-content {
          margin-left: 240px;
        }

        /* Hover effects - ORANGE COLOR #f48a1d */
        .vertical-menu a:hover {
          color: #f48a1d !important;
          background: rgba(244, 138, 29, 0.08) !important;
        }

        .vertical-menu a:hover i {
          color: #f48a1d !important;
        }

        .vertical-menu ul li a:hover {
          color: #f48a1d !important;
          background: rgba(244, 138, 29, 0.08) !important;
        }

        /* Override any blue hover from template */
        .vertical-menu .waves-effect:hover {
          color: #f48a1d !important;
          background: rgba(244, 138, 29, 0.08) !important;
        }

        /* Transition for smooth animation */
        .vertical-menu,
        .main-content {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
}
