import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "../components/BootstrapClient";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import FooterAdmin from "../components/FooterAdmin";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sysadmin - Harsawangsa",
  description: "Admin Panel Harsawangsa",
  icons: {
    icon: "/harsawangsa-orange-square.png",
  },
};

export default function SysadminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/icons.css" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/app.min.css" />
      
      <BootstrapClient />
      
      <div id="layout-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <Sidebar />
        
        {/* Main Content */}
        <div className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 70px)' }}>
          <div className="page-content" style={{ flex: 1 }}>
            <div className="container-fluid">
              {children}
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}


// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "../globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import BootstrapClient from "../components/BootstrapClient";
// import Topbar from "../components/Topbar";
// import Sidebar from "../components/Sidebar";
// import FooterAdmin from "../components/FooterAdmin";

// const poppins = Poppins({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

// export const metadata: Metadata = {
//   title: "Sysadmin - Harsawangsa",
//   description: "Admin Panel Harsawangsa",
//   icons: {
//     icon: "/harsawangsa-orange-square.png",
//   },
// };

// export default function SysadminLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <> 
//         <head>
//             <link rel="stylesheet" href="/assets/css/icons.css" />
//             <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
//             <link rel="stylesheet" href="/assets/css/app.min.css" />
//         </head>
//         <body className={`${poppins.variable}`} data-sidebar="dark" data-layout-mode="light">
//             <BootstrapClient />
            
//             <div id="layout-wrapper">
//             <Topbar />
//             <Sidebar />
            
//             {/* Main Content */}
//             <div className="main-content">
//                 <div className="page-content">
//                 <div className="container-fluid">
//                     {children}
//                 </div>
//                 </div>
//                 <FooterAdmin />
//             </div>
//             </div>
            
//         </body>
//     </>
//   );
// }

