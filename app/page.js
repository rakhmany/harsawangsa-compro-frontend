"use client";

import Navbar from "./components/Navbar";

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
          paddingTop: "130px",
          paddingBottom: "80px"
        }}
      >
        {/* Decorative Background Circles */}
        <div 
          className="position-absolute"
          style={{
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            filter: "blur(80px)"
          }}
        ></div>
        <div 
          className="position-absolute"
          style={{
            bottom: "-150px",
            left: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.03)",
            filter: "blur(100px)"
          }}
        ></div>

        <div className="container position-relative">
          <div className="row align-items-center min-vh-75">
            {/* Left Content */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="pe-lg-5">
                <h1 
                  className="display-3 fw-bold mb-4"
                  style={{ 
                    lineHeight: "1.2",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)"
                  }}
                >
                  Empower Your Future To{" "}
                  <span 
                    className="text-white  position-relative d-inline-block"
                    style={{
                      background: "linear-gradient(90deg, #FF6B9D 0%, #C471ED 100%)",
                      borderRadius: "40px",
                      padding: "0 20px",
                      marginRight: "10px"
                    }}
                  >
                    Harsa
                  </span>
                  <br />
                  For{" "}
                  <span 
                    className="text-white position-relative d-inline-block"
                    style={{
                      background: "linear-gradient(90deg, #FFA502 0%, #FFD32D 100%)",
                      borderRadius: "40px",
                      padding: "0 20px",
                      color: "#2c3e50"
                    }}
                  >
                    Wangsa
                  </span>
                </h1>
                
                <p 
                  className="mb-4 opacity-90"
                  style={{ 
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    maxWidth: "500px"
                  }}
                >
                  Want to improve your work skills? You need to study harder with 
                  the help of a great mentor to improve your performance at work.
                </p>

                <button 
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill d-inline-flex align-items-center gap-3 hero-cta"
                  style={{ 
                    fontSize: "1rem",
                    fontWeight: "600",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                >
                  Get Started Now
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>

              </div>
            </div>

            {/* Right Content - Image with Floating Elements */}
            <div className="col-lg-6">
              <div className="position-relative">
                {/* Main Image */}
                <div 
                  className="position-relative"
                  style={{
                    borderRadius: "30px",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                    alt="Student Learning"
                    className="w-100"
                    style={{ 
                      height: "600px",
                      objectFit: "cover"
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div 
                    className="position-absolute bottom-0 start-0 w-100"
                    style={{
                      height: "200px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)"
                    }}
                  ></div>
                </div>

                {/* Floating Badge - Keep Learning */}
                <div 
                  className="position-absolute floating-badge"
                  style={{
                    top: "30px",
                    right: "-20px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: "15px 20px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    animation: "float 3s ease-in-out infinite"
                  }}
                >
                  <div 
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #FF6B9D 0%, #C471ED 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="white">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="fw-bold text-dark" style={{ fontSize: "0.9rem" }}>
                      Keep learning,
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                      let's rock!
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div 
                  className="position-absolute"
                  style={{
                    bottom: "-30px",
                    right: "50px",
                    width: "100px",
                    height: "100px",
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)",
                    backgroundSize: "20px 20px"
                  }}
                ></div>
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
      
      

      
    </>
  );
}
