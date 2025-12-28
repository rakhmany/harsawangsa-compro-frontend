"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Section 1 - Hero with Background Image */}
      <section 
        className="position-relative overflow-hidden" 
        style={{ 
          minHeight: "90vh",
          // background: "linear-gradient(135deg, #5B51D8 0%, #4834DF 50%, #3B2BCC 100%)",
          paddingTop: "20vh",
          paddingBottom: "80px" 
        }}
      >
        {/* Content Card */}
        <div className="container position-relative" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-12">
              <div 
                className="card border-0 rounded-4 overflow-hidden"
                style={{ 
                  backgroundColor: "#fff"
                }}
              >
                {/* Main Image with Full Width */}
                <div className="position-relative">
                  <video
                  src="/HEI-CompanyProfile.mp4"
                  className="w-100"
                  style={{ 
                    height: "700px", 
                    objectFit: "cover"
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  />
                          
                  {/* Overlay Content on Image */}
                  {/* <div 
                    className="position-absolute top-50 start-0 translate-middle-y ps-5 hero-text"
                    style={{ maxWidth: "750px" }}
                  >
                    <h1 
                      className="hero-title fw-bold text-white mb-4"
                      style={{ 
                        fontSize: "5.5rem",
                        textShadow: "2px 2px 12px rgba(0,0,0,0.5)",
                        lineHeight: "0.3",
                        letterSpacing: "-2px"
                      }}
                    >
                      Harsawangsa
                    </h1>
                    <p 
                      className="hero-subtitle text-white mb-0"
                      style={{ 
                        fontSize: "1.5rem",
                        textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
                        fontWeight: "300",
                        letterSpacing: "0.5px"
                      }}
                    >
                      Edukasi Indonesia
                    </p>
                  </div> */}

                  {/* Badge Circle */}
                  {/* <div 
                    className="position-absolute badge-circle"
                    style={{ 
                      bottom: "40px",
                      right: "40px",
                      width: "120px",
                      height: "120px"
                    }}
                  >
                    <div 
                      className="w-100 h-100 rounded-circle d-flex align-items-center justify-content-center shadow-lg"
                      style={{ 
                        backgroundColor: "#FF6B35",
                        transform: "rotate(-15deg)" 
                      }}
                    >
                      <div className="text-center" style={{ transform: "rotate(15deg)" }}>
                        <svg width="90" height="90" viewBox="0 0 90 90">
                          <path
                            id="circlePath"
                            d="M 45, 45 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                            fill="none"
                          />
                          <text fontSize="9" fontWeight="600" letterSpacing="2" fill="#ffffff">
                            <textPath href="#circlePath" startOffset="0%">
                              LEARN • GROW • SUCCEED • LEARN •
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div> */}

                  {/* Bottom Left Description Card */}
                  {/* <div 
                    className="position-absolute description-card"
                    style={{ 
                      bottom: "30px",
                      left: "30px",
                      maxWidth: "450px",
                      backgroundColor: "rgba(91, 81, 216, 0.95)",
                      backdropFilter: "blur(10px)",
                      padding: "2rem",
                      borderRadius: "16px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                    }}
                  >
                    <h3 className="text-white fw-bold mb-3" style={{ fontSize: "1.3rem" }}>
                      Wujudkan Karir Impianmu
                    </h3>
                    <p className="text-white mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.7", opacity: "0.95" }}>
                      Belajar dari para ahli terbaik dengan program berbasis standar Eropa. 
                      Raih kesempatan untuk mengembangkan skill teknologi dan kreatif bersama 
                      mentor berpengalaman dari Indonesia dan Eropa.
                    </p>
                    <button 
                      className="btn btn-light px-5 py-2 d-inline-flex align-items-center gap-2 hover-btn"
                      style={{ 
                        borderRadius: "30px",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}
                    >
                      Mulai Belajar
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
                  </div> */}

                  {/* Video Thumbnail Preview */}
                  {/* <div 
                    className="position-absolute video-preview"
                    style={{ 
                      bottom: "30px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "220px",
                      height: "130px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "4px solid white",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                      cursor: "pointer"
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400"
                      alt="Video Preview"
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    /> */}
                    {/* Play Button Overlay */}
                    {/* <div 
                      className="position-absolute top-50 start-50 translate-middle play-button"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 16 16" fill="#5B51D8">
                        <path d="M6 4v8l6-4z"/>
                      </svg>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section 
        className="py-5"
        style={{
          backgroundColor: "#f8f9fa",
          paddingTop: "100px",
          paddingBottom: "100px"
        }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 
                className="fw-bold mb-3"
                style={{ 
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  lineHeight: "1.3",
                  color: "#1a1a1a"
                }}
              >
                berpegang teguh pada nilai perusahaan sebagai identitas.
              </h2>
            </div>
            <div className="col-lg-6">
              <p 
                className="text-muted"
                style={{ 
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  paddingTop: "10px"
                }}
              >
                Komitmen kami dalam menumbuhkan kolaborasi yang dinamis memungkinkan kami untuk 
                menavigasi tantangan unik dan kompleksitas dari berbagai sektor; pendekatan kami yang 
                fleksibel memastikan solusi yang disesuaikan dengan kebutuhan spesifik setiap industri.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row g-4">
            {/* Card 1 - Media */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  padding: "30px",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div 
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="white">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 0 2.04 4.327z"/>
                    </svg>
                  </div>
                  <div 
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      border: "2px solid #e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="fw-bold mb-3" style={{ fontSize: "1.4rem" }}>Ketuhanan</h4>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Segala capaian selalu terjadi karena atas izin Tuhan Yang Maha Esa.
                </p>
              </div>
            </div>

            {/* Card 2 - Automotive */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-0"
                style={{
                  borderRadius: "20px",
                  padding: "30px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div 
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="white">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                  </div>
                  <div 
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="fw-bold mb-3" style={{ fontSize: "1.4rem" }}>Kolaborasi</h4>
                <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6", opacity: "0.9" }}>
                  Menggapai sesuatu yang berdampak positif dan berkelanjutan dengan waktu yang cepat melalui sifat kolaboratif.
                </p>
              </div>
            </div>

            {/* Card 3 - Insurance */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  padding: "30px",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div 
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="white">
                      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                    </svg>
                  </div>
                  <div 
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      border: "2px solid #e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="fw-bold mb-3" style={{ fontSize: "1.4rem" }}>Kreasi</h4>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Mengkreasikan hal yang bermanfaat dan positif bagi orang lain serta menciptakan kreator dengan visi yang serupa.
                </p>
              </div>
            </div>

            {/* Card 4 - Consumer & Retail */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  padding: "30px",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div 
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="white">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                  </div>
                  <div 
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      border: "2px solid #e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="fw-bold mb-3" style={{ fontSize: "1.4rem" }}>Kebudayaan</h4>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Mendukung pelestarian budaya dengan <span style={{ fontStyle: "italic" }}>empowering local values</span> melalui teknologi kreatif.
                </p>
              </div>
            </div>

            {/* Card 5 - Financial Services */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  padding: "30px",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div 
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="white">
                      <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
                    </svg>
                  </div>
                  <div 
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      border: "2px solid #e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="fw-bold mb-3" style={{ fontSize: "1.4rem" }}>Kompeten</h4>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Mengedepankan profesionalitas dalam setiap pekerjaan, sekecil apapun itu.
                </p>
              </div>
            </div>

            {/* Card 6 - Technology */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  padding: "30px",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div 
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="white">
                      <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                    </svg>
                  </div>
                  <div 
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      border: "2px solid #e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="fw-bold mb-3" style={{ fontSize: "1.4rem" }}>Inovasi</h4>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Selalu berupaya untuk tetap belajar dan mengembangkan solusi yang bermanfaat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section 
        className="py-5"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px"
        }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 
                className="fw-bold mb-3"
                style={{ 
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  lineHeight: "1.3",
                  color: "#1a1a1a"
                }}
              >
                Jelajahi Keahlian Industri Kami yang Beragam
              </h2>
            </div>
            <div className="col-lg-6">
              <p 
                className="text-muted"
                style={{ 
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  paddingTop: "10px"
                }}
              >
                ini merupakan hasil karja kami dalam berbagai industri, mencerminkan kemampuan kami untuk beradaptasi dan memberikan solusi inovatif yang sesuai dengan kebutuhan unik setiap sektor.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row g-3">
            {/* Card 1 - Mondrian (Small Square) */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
                    alt="Mondrian"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: "1.2rem" }}>
                      Mondrian
                    </h5>
                    <div 
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Artex (Medium Rectangle) */}
            <div className="col-lg-6 col-md-6">
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
                  <img
                    src="/porto-nino.png"
                    alt="Nino Room"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: "1.2rem" }}>
                      Nino Room
                    </h5>
                    <div 
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Nirnia (Small Square) */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                  <img
                    src="/porto-robby.png"
                    alt="Fight Boboy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: "1.2rem" }}>
                      Fight Boboy
                    </h5>
                    <div 
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Brera (Small Square) */}
            <div className="col-lg-3 col-md-6" style={{ marginTop: "-100px" }}>
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
                    alt="Brera"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: "1.2rem" }}>
                      Brera
                    </h5>
                    <div 
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Alea Pro (Medium Rectangle) */}
            <div className="col-lg-6 col-md-6">
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                  <img
                    src="/porto-robby.png"
                    alt="Boboy Fight"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: "1.2rem" }}>
                      Boboy Fight
                    </h5>
                    <div 
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Nirnia (Small Square) */}
            <div className="col-lg-3 col-md-6" style={{ marginTop: "-100px" }}>
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
                    alt="Nirnia"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: "1.2rem" }}>
                      Nirnia
                    </h5>
                    <div 
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button 
                className="btn btn-dark btn-lg px-5 py-3 rounded-pill d-inline-flex align-items-center gap-3"
                style={{ 
                  fontSize: "1rem",
                  fontWeight: "600",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                }}
              >
                Jelajahi Lebih Lanjut
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 4 */}
      <section 
        className="py-5"
        style={{
          backgroundColor: "#f8f9fa",
          paddingTop: "100px",
          paddingBottom: "100px"
        }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 
                className="fw-bold mb-3"
                style={{ 
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  lineHeight: "1.3",
                  color: "#1a1a1a"
                }}
              >
                Tim yang Mendorong Inovasi
              </h2>
            </div>
            <div className="col-lg-6">
              <p 
                className="text-muted"
                style={{ 
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  paddingTop: "10px"
                }}
              >
                Kami adalah kumpulan individu berbakat yang berdedikasi untuk menciptakan solusi kreatif dan inovatif. Dengan beragam keahlian dan pengalaman, tim kami bekerja sama untuk menghadirkan hasil terbaik bagi klien kami.
              </p>
            </div>
          </div>
          
          {/* Teamates */}
          <div className="row g-4">
            {/* Team Member 1 */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ position: "relative", height: "350px", overflow: "hidden" }}>
                  <img
                    src="/robby.png"
                    alt="Robby Teguh S."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div 
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "25px",
                      right: "25px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-1" style={{ fontSize: "1.4rem" }}>
                      Robby Teguh S.
                    </h5>
                    <p className="text-white mb-0" style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                      Founder, CEO
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div 
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ position: "relative", height: "350px", overflow: "hidden" }}>
                  <img
                    src="/darel.png"
                    alt="Muhammad Daffarel M. A."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div 
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "25px",
                      right: "25px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-1" style={{ fontSize: "1.4rem" }}>
                      M. Daffarel M. A. 
                    </h5>
                    <p className="text-white mb-0" style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                      Co-Founder, CMO
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div 
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ position: "relative", height: "350px", overflow: "hidden" }}>
                  <img
                    src="/nino.png"
                    alt="George Kanino M. "
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div 
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "25px",
                      right: "25px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-1" style={{ fontSize: "1.4rem" }}>
                      George Kanino M. 
                    </h5>
                    <p className="text-white mb-0" style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                      Co-Founder, CCO
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div 
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card border-0 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ position: "relative", height: "350px", overflow: "hidden" }}>
                  <img
                    src="/yudaz.png"
                    alt="Yudaz Aulia R."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div 
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "25px",
                      right: "25px"
                    }}
                  >
                    <h5 className="text-white fw-bold mb-1" style={{ fontSize: "1.4rem" }}>
                      Yudaz Aulia R. 
                    </h5>
                    <p className="text-white mb-0" style={{ fontSize: "0.9rem", opacity: "0.9" }}>
                      Co-Founder, CTO
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div 
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
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
