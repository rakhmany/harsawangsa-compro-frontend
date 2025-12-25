"use client";

import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section 
        className="position-relative overflow-hidden"
        style={{
          minHeight: "90vh",
          background: "linear-gradient(135deg, #5B51D8 0%, #4834DF 50%, #3B2BCC 100%)",
          paddingTop: "20vh",
          paddingBottom: "80px",
          borderBottomLeftRadius: "120px",
          borderBottomRightRadius: "120px",
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
                Explore Our Diverse Industry Expertise
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
                Explore More
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Mission Section */}
      <section 
        className="position-relative overflow-hidden"
        style={{
          minHeight: "70vh",
          paddingTop: "100px",
          paddingBottom: "100px",
          background: "linear-gradient(135deg, #f48a1d 0%, #ff9f3d 100%)"
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
                    OUR MISSION
                  </span>
                </div>
                <h2 
                  className="fw-bold text-white mb-4"
                  style={{ 
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: "1.2"
                  }}
                >
                  Empowering Future Generations
                </h2>
                <p 
                  className="text-white mb-4"
                  style={{ 
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    opacity: "0.95"
                  }}
                >
                  Menyediakan platform pendidikan yang inovatif dan inklusif untuk memberdayakan generasi masa depan dengan pengetahuan, keterampilan, dan nilai-nilai yang diperlukan untuk sukses dalam masyarakat global.
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
                    <span className="text-white" style={{ fontSize: "1rem" }}>Innovative Learning</span>
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
                    <span className="text-white" style={{ fontSize: "1rem" }}>Inclusive Education</span>
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
                    <span className="text-white" style={{ fontSize: "1rem" }}>Global Perspective</span>
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
                  OUR GOALS
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
                What We Strive to Achieve
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
            <div className="col-lg-4 col-md-6">
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
                    Kualitas Pendidikan
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Meningkatkan standar pendidikan melalui kurikulum yang komprehensif, metode pengajaran modern, dan teknologi pembelajaran terkini.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="col-lg-4 col-md-6">
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
                    Aksesibilitas
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Memberikan akses pendidikan yang merata untuk semua kalangan, tanpa memandang latar belakang sosial ekonomi.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="col-lg-4 col-md-6">
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
                    Inovasi Berkelanjutan
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Terus berinovasi dalam metode pengajaran dan teknologi untuk memastikan relevansi dengan kebutuhan industri masa depan.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 4 */}
            <div className="col-lg-4 col-md-6">
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
                    Karakter & Integritas
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Membentuk karakter yang kuat dan integritas tinggi melalui pendidikan nilai-nilai moral dan etika.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 5 */}
            <div className="col-lg-4 col-md-6">
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
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.3rem", color: "#1a1a1a" }}>
                    Perspektif Global
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Mempersiapkan siswa dengan perspektif global dan kemampuan untuk bersaing di tingkat internasional.
                  </p>
                </div>
              </div>
            </div>

            {/* Goal 6 */}
            <div className="col-lg-4 col-md-6">
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
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.3rem", color: "#1a1a1a" }}>
                    Kolaborasi & Partnership
                  </h4>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
                    Membangun kemitraan strategis dengan industri dan institusi pendidikan untuk memperkaya pengalaman belajar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        className="position-relative overflow-hidden"
        style={{
          minHeight: "90vh",
          // background: "linear-gradient(135deg, #5B51D8 0%, #4834DF 50%, #3B2BCC 100%)",
          paddingTop: "10vh",
          paddingBottom: "80px",
          // borderBottomLeftRadius: "120px",
          // borderBottomRightRadius: "120px",
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
                Explore Our Diverse Industry Expertise
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
                Explore More
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
