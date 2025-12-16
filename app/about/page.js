"use client";

import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section 
        style={{
          minHeight: "100vh",
          paddingTop: "150px",
          paddingBottom: "100px"
        }}
      >
        <div className="container">
          <h2 className="fw-bold" style={{ color: "#f48a1d" }}>Tentang Harsawangsa</h2>
          <p className="mt-3">
            Harsawangsa adalah perusahaan yang bergerak di bidang layanan konsultasi,
            teknologi, dan pengembangan digital. Kami berkomitmen memberikan solusi
            inovatif dan layanan profesional untuk klien kami.
          </p>
        </div>
      </section>
    </>
  );
}
