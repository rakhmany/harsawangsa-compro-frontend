"use client";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Section 1 - Hero Modern Education Style */}
      <section 
        className="position-relative overflow-hidden"
        style={{
          minHeight: "90vh",
          background: "linear-gradient(135deg, #5B51D8 0%, #4834DF 50%, #3B2BCC 100%)",
          paddingTop: "80px",
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
              <div className="text-white pe-lg-5">
                <h1 
                  className="display-3 fw-bold mb-4"
                  style={{ 
                    lineHeight: "1.2",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)"
                  }}
                >
                  Learn Essential Skills To{" "}
                  <span 
                    className="position-relative d-inline-block"
                    style={{
                      background: "linear-gradient(90deg, #FF6B9D 0%, #C471ED 100%)",
                      borderRadius: "40px",
                      padding: "0 20px",
                      marginRight: "10px"
                    }}
                  >
                    advance
                  </span>
                  <br />
                  Your{" "}
                  <span 
                    className="position-relative d-inline-block"
                    style={{
                      background: "linear-gradient(90deg, #FFA502 0%, #FFD32D 100%)",
                      borderRadius: "40px",
                      padding: "0 20px",
                      color: "#2c3e50"
                    }}
                  >
                    career
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

                {/* Progress Badge */}
                <div 
                  className="position-absolute progress-badge"
                  style={{
                    bottom: "50px",
                    left: "0",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "20px",
                    padding: "15px 25px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "15px"
                  }}
                >
                  <div 
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #FFA502 0%, #FFD32D 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#fff"
                    }}
                  >
                    95%
                  </div>
                  <div>
                    <div className="fw-bold text-dark" style={{ fontSize: "0.95rem" }}>
                      Progress
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                      14/25 lessons
                    </div>
                  </div>
                </div>
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
      <section className="py-5 bg-white">
        <div className="container">
          {/* Team Images Row */}
          <div className="d-flex justify-content-center align-items-center mb-5 flex-wrap gap-3">
            {[
              { bg: "#d4e5a8", img: "1" },
              { bg: "#e8c4e8", img: "2" },
              { bg: "#7589d4", img: "3" },
              { bg: "#ffb877", img: "4" },
              { bg: "#4a4a4a", img: "5" },
              { bg: "#d4a687", img: "6" },
              { bg: "#a8d8e8", img: "7" },
              { bg: "#f5a8d4", img: "8" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-circle overflow-hidden"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: item.bg,
                  flexShrink: 0,
                }}
              >
                <img
                  src={`https://via.placeholder.com/80/${item.bg.replace("#", "")}/333333?text=${item.img}`}
                  alt={`Team member ${index + 1}`}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Heading */}
          <div className="text-center mb-4 px-3">
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#2c3e50", lineHeight: "1.3" }}>
              Belajar dari para ahli terbaik
              <br />
              berdasarkan program Eropa
            </h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px", fontSize: "1.1rem" }}>
              JayJay adalah sekolah online untuk karier teknologi dan kreatif
              <br />
              yang didirikan oleh para ahli dari Eropa dan Indonesia.
            </p>
          </div>

          {/* Ratings Section */}
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mt-5 pt-4">
            {/* Course Report */}
            <div className="text-center px-3">
              <div className="fw-bold mb-2" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
                COURSE
                <br />
                REPORT
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="fw-semibold">4.87 Ratings</span>
                <div className="text-warning">
                  {"★".repeat(5)}
                </div>
              </div>
            </div>

            {/* Switchup */}
            <div className="text-center px-3">
              <div className="mb-2">
                <span className="fw-bold" style={{ fontSize: "1.2rem" }}>switchup</span>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="fw-semibold">4.83 Ratings</span>
                <div className="text-warning">
                  {"★".repeat(5)}
                </div>
              </div>
            </div>

            {/* Google */}
            <div className="text-center px-3">
              <div className="mb-2">
                <span className="fw-bold" style={{ fontSize: "1.3rem" }}>Google</span>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="fw-semibold">4.8 Ratings</span>
                <div className="text-warning">
                  {"★".repeat(5)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-cta {
          background-color: #fff;
          color: #5B51D8;
          border: none;
          transition: all 0.3s ease;
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
          background-color: #f8f9fa !important;
          color: #4834DF !important;
        }

        .floating-badge {
          animation: float 3s ease-in-out infinite;
        }

        .progress-badge {
          animation: slideUp 1s ease-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .min-vh-75 {
          min-height: 75vh;
        }

        @media (max-width: 992px) {
          .progress-badge {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            margin-top: 2rem;
          }

          .floating-badge {
            right: 10px !important;
            top: 20px !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-3 {
            font-size: 2rem !important;
          }

          .display-4 {
            font-size: 1.5rem;
          }

          .floating-badge {
            display: none !important;
          }

          .hero-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
