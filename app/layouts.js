import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Harsawangsa",
  description: "Company Profile Harsawangsa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mt-4">
          {children}
        </main>
      </body>
    </html>
  );
}
