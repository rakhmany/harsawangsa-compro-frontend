"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

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
      <div className="vertical-menu" style={{ background: 'white', borderRight: '1px solid #f0f0f0' }}>
        <div data-simplebar className="h-100">
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title" key="menu" style={{ color: '#98a6ad', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', padding: '15px 20px 5px', letterSpacing: '0.5px' }}>Menu</li>

              {menuItems.map((item, index) => (
                <li key={index} className={pathname === item.href ? "mm-active" : ""}>
                  <Link 
                    href={item.href} 
                    className={`waves-effect ${pathname === item.href ? "active" : ""}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 20px',
                      color: pathname === item.href ? '#1e88e5' : '#6c757d',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: pathname === item.href ? '600' : '500',
                      background: pathname === item.href ? 'rgba(30, 136, 229, 0.1)' : 'transparent',
                      borderLeft: pathname === item.href ? '3px solid #1e88e5' : '3px solid transparent',
                      transition: 'all 0.2s ease'
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
              ))}

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

        /* Hover effects */
        .vertical-menu a:hover {
          color: #1e88e5 !important;
          background: rgba(30, 136, 229, 0.05) !important;
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
