"use client";

import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* TESTING GIT PUSH */}

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
                    Program Yang Dimiliki
                  </span>
                </div>
                <h2 
                  className="fw-bold text-white mb-4"
                  style={{ 
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: "1.2"
                  }}
                >
                  Edukasi Digital Generasi Masa Depan
                </h2>
                <p 
                  className="text-white mb-4"
                  style={{ 
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    opacity: "0.95"
                  }}
                >
                  Edukasi Digital melalui pendidikan digital berkualitas tinggi yang inovatif, kolaboratif, dan berdampak positif bagi masa depan Indonesia.
                </p>
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

      {/* Section Program Services */}
      <section 
        className="position-relative"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px"
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
                  SERVIS KAMI
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
                Berkembang Bersama Kami
              </h2>
              <p 
                className="text-muted mx-auto"
                style={{ 
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  maxWidth: "700px"
                }}
              >
                Jelajahi berbagai program akademi kami yang dirancang untuk membekali Anda dengan keterampilan dan pengetahuan yang dibutuhkan untuk unggul di industri kreatif.
              </p>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="row g-4">
            {/* Program 1 - Concept Art + Illus */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card border-0 overflow-hidden h-100 academy-card"
                style={{
                  borderRadius: "25px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(244, 138, 29, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800"
                    alt="Workshop / Bootcamp"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(10px)",
                      padding: "8px 16px",
                      borderRadius: "20px"
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="text-white" style={{ fontSize: "0.9rem", fontWeight: "500" }}>73 kursus</span>
                    </div>
                  </div>
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "30px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)"
                    }}
                  >
                    <h3 className="text-white fw-bold mb-1" style={{ fontSize: "1.8rem", letterSpacing: "1px" }}>
                      WORKSHOP / BOOTCAMP
                    </h3>
                    <p className="text-white-50 mb-0" style={{ fontSize: "0.85rem", letterSpacing: "2px" }}>
                      MENINGKATKAN MINAT BAKAT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program 2 - Game Art */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card border-0 overflow-hidden h-100 academy-card"
                style={{
                  borderRadius: "25px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(244, 138, 29, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"
                    alt="Game Art"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(10px)",
                      padding: "8px 16px",
                      borderRadius: "20px"
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                      </svg>
                      <span className="text-white" style={{ fontSize: "0.9rem", fontWeight: "500" }}>123 kursus</span>
                    </div>
                  </div>
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "30px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)"
                    }}
                  >
                    <h3 className="text-white fw-bold mb-1" style={{ fontSize: "1.8rem", letterSpacing: "1px" }}>
                      EKSKUL ONLINE / OFFLINE
                    </h3>
                    <p className="text-white-50 mb-0" style={{ fontSize: "0.85rem", letterSpacing: "2px" }}>
                      EKOSISTEM PENDIDIKAN YANG DINAMIS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program 3 - VFX */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card border-0 overflow-hidden h-100 academy-card"
                style={{
                  borderRadius: "25px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(244, 138, 29, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "400px", overflow: "hidden", backgroundColor: "#000" }}>
                  <img
                    src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800"
                    alt="VFX"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(10px)",
                      padding: "8px 16px",
                      borderRadius: "20px"
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                      <span className="text-white" style={{ fontSize: "0.9rem", fontWeight: "500" }}>12 kursus</span>
                    </div>
                  </div>
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "30px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)"
                    }}
                  >
                    <h3 className="text-white fw-bold mb-2" style={{ fontSize: "1.8rem", letterSpacing: "8px", fontWeight: "300" }}>
                      INTEGRASI KURIKULUM
                    </h3>
                    <p className="text-white-50 mb-0" style={{ fontSize: "0.85rem", letterSpacing: "2px" }}>
                      KURIKULUM BERBASIS INDUSTRI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </>
  );
}
