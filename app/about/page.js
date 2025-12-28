"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Mission Section */}
      <section 
        className="position-relative overflow-hidden bg-fullorange"
        style={{
          minHeight: "70vh",
          paddingTop: "20vh",
          paddingBottom: "100px",
          background: "linear-gradient(135deg, #f48a1d 0%, #ff9f3d 100%)",
          borderBottomLeftRadius: "120px",
          borderBottomRightRadius: "120px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-5">
                <div className="d-inline-block mb-3">
                  <span 
                    className="badge text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      padding: "8px 20px",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      letterSpacing: "1px"
                    }}
                  >
                    MISI KAMI
                  </span>
                </div>
                <h2 
                  className="fw-bold text-white mb-4"
                  style={{ 
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: "1.2"
                  }}
                >
                  Memberdayakan Generasi Masa Depan
                </h2>
                <p 
                  className="text-white mb-4"
                  style={{ 
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    opacity: "0.95"
                  }}
                >
                  Menjadi lembaga pendidikan yang mengembangkan insan kreatif melalui ekosistem pendidikan yang inovatif, kolaboratif untuk kemajuan yang berkelanjutan dan berdampak positif untuk masa depan.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex align-items-center">
                    <div 
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "10px"
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ fontSize: "1rem" }}>Pembelajaran Inovatif</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div 
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "10px"
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ fontSize: "1rem" }}>Kolaboratif</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div 
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "10px"
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-white" style={{ fontSize: "1rem" }}>Berdampak Positif</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div 
                className="position-relative"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                  alt="Mission"
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section 
        className="position-relative"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "#ffffff"
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="d-inline-block mb-3">
                <span 
                  className="badge"
                  style={{
                    backgroundColor: "#fff5eb",
                    color: "#f48a1d",
                    padding: "8px 20px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    letterSpacing: "1px"
                  }}
                >
                  TUJUAN KAMI
                </span>
              </div>
              <h2 
                className="fw-bold mb-3"
                style={{ 
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  lineHeight: "1.3",
                  color: "#1a1a1a"
                }}
              >
                Apa yang Kami Upayakan untuk Dicapai
              </h2>
              <p 
                className="text-muted mx-auto"
                style={{ 
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  maxWidth: "700px"
                }}
              >
                Komitmen kami untuk menciptakan dampak positif melalui berbagai inisiatif strategis
              </p>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="row g-4">
            {/* Goal 1 */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                }}
              >
                <div className="card-body p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "15px",
                      backgroundColor: "#f48a1d",
                      color: "white"
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.3rem", color: "#1a1a1a" }}>
                    Ekosistem Edukasi Digital
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Membangun ekosistem edukasi yang terintegrasi digital dengan kurikulum profesional dan keilmuan yang berorientasi keahlian.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                }}
              >
                <div className="card-body p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "15px",
                      backgroundColor: "#f48a1d",
                      color: "white"
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.3rem", color: "#1a1a1a" }}>
                    Pemerataan Pendidikan Berkualitas
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Pemerataan pendidikan yang berkualitas melalui pengembangan ilmu, karir, teknologi kreatif dan inovasi berkelanjutan.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                }}
              >
                <div className="card-body p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "15px",
                      backgroundColor: "#f48a1d",
                      color: "white"
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.3rem", color: "#1a1a1a" }}>
                    Integrasi Ekosistem Digital
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Menjebatani dunia Industri dengan pendidikan melalui ekosistem digital yang terintergrasi dan kolaboratif.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 4 */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                }}
              >
                <div className="card-body p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "15px",
                      backgroundColor: "#f48a1d",
                      color: "white"
                    }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.3rem", color: "#1a1a1a" }}>
                    Kreator & Inovator
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Menghasilkan kreator dan inovator yang peduli akan sosial, budaya dan lingkungan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="position-relative"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "#f8f9fa"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="pe-lg-4">
                <div className="d-inline-block mb-3">
                  <span 
                    className="badge"
                    style={{
                      backgroundColor: "#fff5eb",
                      color: "#f48a1d",
                      padding: "8px 20px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      letterSpacing: "1px"
                    }}
                  >
                    FAQ
                  </span>
                </div>
                <h2 
                  className="fw-bold mb-4"
                  style={{ 
                    fontSize: "clamp(2rem, 4vw, 2.5rem)",
                    lineHeight: "1.2",
                    color: "#1a1a1a"
                  }}
                >
                  Pertanyaan yang Sering Diajukan
                </h2>
                <p 
                  className="text-muted mb-4"
                  style={{ 
                    fontSize: "1rem",
                    lineHeight: "1.8"
                  }}
                >
                  Temukan jawaban untuk pertanyaan yang sering diajukan tentang program dan layanan kami.
                </p>
                <button 
                  className="btn px-4 py-3 rounded-pill"
                  style={{ 
                    backgroundColor: "#f48a1d",
                    color: "white",
                    border: "none",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff9f3d";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(244, 138, 29, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f48a1d";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Hubungi Kami Sekarang
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="accordion" id="faqAccordion">
                {/* FAQ 1 */}
                <div 
                  className="mb-3"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "none"
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                      style={{
                        backgroundColor: "white",
                        color: "#1a1a1a",
                        border: "none",
                        padding: "1.5rem",
                        fontSize: "1.05rem",
                        fontWeight: "600",
                        boxShadow: "none"
                      }}
                    >
                      Apa saja program pendidikan yang ditawarkan?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div 
                      className="accordion-body"
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: "#6c757d",
                        fontSize: "0.95rem",
                        lineHeight: "1.7"
                      }}
                    >
                      Kami menawarkan berbagai program pendidikan mulai dari kursus profesional, pelatihan keterampilan digital, program sertifikasi, hingga workshop kolaboratif dengan industri. Semua program dirancang untuk mempersiapkan peserta menghadapi tantangan dunia kerja modern.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div 
                  className="mb-3"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "none"
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                      style={{
                        backgroundColor: "white",
                        color: "#1a1a1a",
                        border: "none",
                        padding: "1.5rem",
                        fontSize: "1.05rem",
                        fontWeight: "600",
                        boxShadow: "none"
                      }}
                    >
                      Bagaimana cara mendaftar untuk program?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div 
                      className="accordion-body"
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: "#6c757d",
                        fontSize: "0.95rem",
                        lineHeight: "1.7"
                      }}
                    >
                      Pendaftaran dapat dilakukan secara online melalui website kami atau dengan menghubungi tim support kami. Proses pendaftaran sangat mudah dan cepat, hanya memerlukan beberapa langkah untuk memulai perjalanan belajar Anda.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div 
                  className="mb-3"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "none"
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                      style={{
                        backgroundColor: "white",
                        color: "#1a1a1a",
                        border: "none",
                        padding: "1.5rem",
                        fontSize: "1.05rem",
                        fontWeight: "600",
                        boxShadow: "none"
                      }}
                    >
                      Apakah tersedia sertifikat setelah menyelesaikan program?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div 
                      className="accordion-body"
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: "#6c757d",
                        fontSize: "0.95rem",
                        lineHeight: "1.7"
                      }}
                    >
                      Ya, semua peserta yang berhasil menyelesaikan program akan mendapatkan sertifikat yang diakui industri. Sertifikat ini dapat digunakan untuk meningkatkan portofolio profesional Anda dan membuka peluang karir yang lebih baik.
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div 
                  className="mb-3"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "none"
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                      style={{
                        backgroundColor: "white",
                        color: "#1a1a1a",
                        border: "none",
                        padding: "1.5rem",
                        fontSize: "1.05rem",
                        fontWeight: "600",
                        boxShadow: "none"
                      }}
                    >
                      Apakah ada dukungan karir setelah program selesai?
                    </button>
                  </h2>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div 
                      className="accordion-body"
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: "#6c757d",
                        fontSize: "0.95rem",
                        lineHeight: "1.7"
                      }}
                    >
                      Tentu! Kami menyediakan layanan career support termasuk konsultasi karir, bantuan pembuatan CV, persiapan interview, dan akses ke jaringan partner industri kami untuk membantu Anda mendapatkan pekerjaan yang sesuai.
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div 
                  style={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "none"
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      aria-expanded="false"
                      aria-controls="faq5"
                      style={{
                        backgroundColor: "white",
                        color: "#1a1a1a",
                        border: "none",
                        padding: "1.5rem",
                        fontSize: "1.05rem",
                        fontWeight: "600",
                        boxShadow: "none"
                      }}
                    >
                      Berapa lama durasi setiap program?
                    </button>
                  </h2>
                  <div
                    id="faq5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div 
                      className="accordion-body"
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: "#6c757d",
                        fontSize: "0.95rem",
                        lineHeight: "1.7"
                      }}
                    >
                      Durasi program bervariasi tergantung jenis dan tingkat kesulitannya, mulai dari workshop singkat 1-2 hari hingga program intensif 3-6 bulan. Kami juga menawarkan opsi pembelajaran fleksibel yang dapat disesuaikan dengan jadwal Anda.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
