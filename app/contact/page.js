"use client";

import Navbar from "../components/Navbar";

export default function Contact() {
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
          <h2 className="fw-bold" style={{ color: "#f48a1d" }}>Contact Us Harsawangsa</h2>
          <p className="mt-3">
            Harsawangsa adalah mitra terpercaya Anda dalam layanan konsultasi, teknologi,
            dan pengembangan digital. Kami berkomitmen untuk memberikan solusi inovatif
            yang membantu bisnis Anda tumbuh dan berkembang di era digital.
          </p>
        </div>
      </section>
    </>
  );
}