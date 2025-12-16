"use client";

import Navbar from "../components/Navbar";

export default function Services() {
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
          <h2 className="fw-bold" style={{ color: "#f48a1d" }}>Services Harsawangsa</h2>
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
