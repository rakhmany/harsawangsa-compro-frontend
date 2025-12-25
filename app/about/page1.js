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
