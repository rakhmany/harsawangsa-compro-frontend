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
          backgroundColor: "#ffffff"
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
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600"
                    alt="Harsawangsa Education"
                    className="w-100"
                    style={{ 
                      height: "600px", 
                      objectFit: "cover"
                    }}
                  />
                  
                  {/* Overlay Content on Image */}
                  <div 
                    className="position-absolute top-50 start-0 translate-middle-y ps-5 hero-text"
                    style={{ maxWidth: "750px" }}
                  >
                    <h1 
                      className="hero-title fw-bold text-white mb-4"
                      style={{ 
                        fontSize: "5.5rem",
                        textShadow: "2px 2px 12px rgba(0,0,0,0.5)",
                        lineHeight: "1.1",
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
                  </div>

                  {/* Badge Circle */}
                  <div 
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
                  </div>

                  {/* Bottom Left Description Card */}
                  <div 
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
                  </div>

                  {/* Video Thumbnail Preview */}
                  <div 
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
                    />
                    {/* Play Button Overlay */}
                    <div 
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
                  </div>
                </div>
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

      {/* Section 3 */}
      <section 
        className="py-5 position-relative overflow-hidden"
        style={{ 
          backgroundColor: "#5B51D8",
          minHeight: "600px"
        }}
      >
        <div className="container py-5">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-white mb-4" style={{ lineHeight: "1.3" }}>
              Upgrade Your Skills and Unlock
              <br />
              New Opportunities Now
            </h2>
          </div>

          {/* Course Cards */}
          <div className="row g-4 mb-5">
            {/* UX/UI Design */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="course-card h-100" style={{ position: "relative" }}>
                <div className="course-number text-white-50 mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                  [01]
                </div>
                <h3 className="text-white fw-bold mb-2" style={{ fontSize: "0.95rem", letterSpacing: "0.05em" }}>
                  UX/UI Design
                </h3>
                <h4 className="text-white fw-bold mb-3" style={{ fontSize: "1.3rem", lineHeight: "1.4" }}>
                  CREATE HUMAN-CENTERED DIGITAL EXPERIENCES.
                </h4>
                <p className="text-white mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.7", opacity: "0.9" }}>
                  Master the art of designing intuitive digital experiences through hands-on projects and real-world user insights.
                </p>
                <ul className="list-unstyled text-white" style={{ fontSize: "0.85rem", lineHeight: "2" }}>
                  <li className="mb-2">• User Research & Personas</li>
                  <li className="mb-2">• Wireframing</li>
                  <li className="mb-2">• High-Fidelity Mockups & Iterations</li>
                  <li className="mb-2">• Prototyping</li>
                  <li className="mb-2">• User Testing & Feedback</li>
                </ul>
                <a href="#" className="text-white text-decoration-none d-inline-block mt-3" style={{ fontSize: "0.9rem", opacity: "0.8" }}>
                  Learn More →
                </a>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="course-card h-100" style={{ position: "relative" }}>
                <div className="course-number text-white-50 mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                  [02]
                </div>
                <h3 className="text-white fw-bold mb-2" style={{ fontSize: "0.95rem", letterSpacing: "0.05em" }}>
                  GRAPHIC DESIGN
                </h3>
                <h4 className="text-white fw-bold mb-3" style={{ fontSize: "1.3rem", lineHeight: "1.4" }}>
                  CREATE VISUALS THAT INSPIRE AND COMMUNICATION.
                </h4>
                <p className="text-white mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.7", opacity: "0.9" }}>
                  Unleash your creativity while using effective tools to create impactful designs that communicate ideas clearly.
                </p>
                <ul className="list-unstyled text-white" style={{ fontSize: "0.85rem", lineHeight: "2" }}>
                  <li className="mb-2">• Branding & Visual Identity</li>
                  <li className="mb-2">• Typography & Layout</li>
                  <li className="mb-2">• Color Psychology</li>
                  <li className="mb-2">• Creative Tools Mastery</li>
                </ul>
                <a href="#" className="text-white text-decoration-none d-inline-block mt-3" style={{ fontSize: "0.9rem", opacity: "0.8" }}>
                  Learn More →
                </a>
              </div>
            </div>

            {/* Frontend Development */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="course-card h-100" style={{ position: "relative" }}>
                <div className="course-number text-white-50 mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                  [03]
                </div>
                <h3 className="text-white fw-bold mb-2" style={{ fontSize: "0.95rem", letterSpacing: "0.05em" }}>
                  FRONTEND DEVELOPMENT
                </h3>
                <h4 className="text-white fw-bold mb-3" style={{ fontSize: "1.3rem", lineHeight: "1.4" }}>
                  BRING YOUR DESIGNS TO LIFE THROUGH CODE.
                </h4>
                <p className="text-white mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.7", opacity: "0.9" }}>
                  Turn creative concepts into interactive web experiences with modern tools and responsive design principles.
                </p>
                <ul className="list-unstyled text-white" style={{ fontSize: "0.85rem", lineHeight: "2" }}>
                  <li className="mb-2">• HTML, CSS and JavaScript</li>
                  <li className="mb-2">• Responsive Design</li>
                  <li className="mb-2">• React & Modern Frameworks Basics</li>
                  <li className="mb-2">• UI Framework & Animation</li>
                </ul>
                <a href="#" className="text-white text-decoration-none d-inline-block mt-3" style={{ fontSize: "0.9rem", opacity: "0.8" }}>
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-5 pt-4">
            <button 
              className="btn btn-light px-5 py-3 rounded-pill fw-bold cta-button"
              style={{ 
                fontSize: "1rem",
                backgroundColor: "#B4FF39",
                border: "none",
                color: "#1a1a1a",
                boxShadow: "0 4px 20px rgba(180, 255, 57, 0.3)"
              }}
            >
              See All Courses
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="position-absolute"
          style={{ 
            top: "10%",
            right: "5%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        ></div>
        <div 
          className="position-absolute"
          style={{ 
            bottom: "15%",
            left: "3%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        ></div>
      </section>
      

      <style jsx>{`
        .hero-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hero-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hover-btn {
          background-color: #fff;
          border: none;
          transition: all 0.3s ease;
        }

        .hover-btn:hover {
          background-color: #f8f9fa;
          transform: translateX(5px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.25) !important;
        }

        .video-preview {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-preview:hover {
          transform: translateX(-50%) scale(1.08);
          box-shadow: 0 12px 36px rgba(0,0,0,0.45) !important;
        }

        .play-button {
          transition: all 0.3s ease;
        }

        .video-preview:hover .play-button {
          transform: translate(-50%, -50%) scale(1.15);
          background-color: rgba(91, 81, 216, 0.95) !important;
        }

        .video-preview:hover .play-button svg {
          fill: #ffffff;
        }

        .badge-circle {
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .description-card {
          transition: all 0.3s ease;
        }

        .description-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4) !important;
        }

        .course-card {
          padding: 2rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .course-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .course-card a {
          transition: all 0.3s ease;
        }

        .course-card a:hover {
          opacity: 1 !important;
          transform: translateX(5px);
        }

        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 25px rgba(180, 255, 57, 0.5) !important;
          background-color: #B4FF39 !important;
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 3.5rem !important;
          }

          .hero-subtitle {
            font-size: 1.2rem !important;
          }
          
          .hero-text {
            padding-left: 2rem !important;
          }

          .description-card {
            position: relative !important;
            left: 0 !important;
            bottom: 0 !important;
            max-width: 100% !important;
            margin: 1rem;
            margin-top: -80px;
          }

          .badge-circle {
            width: 90px !important;
            height: 90px !important;
            bottom: 20px !important;
            right: 20px !important;
          }

          .video-preview {
            display: none;
          }

          .course-card {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.8rem !important;
          }

          .hero-subtitle {
            font-size: 1rem !important;
          }

          .display-4 {
            font-size: 1.5rem;
          }

          .badge-circle {
            width: 70px !important;
            height: 70px !important;
          }

          .badge-circle svg {
            width: 60px !important;
            height: 60px !important;
          }

          .description-card {
            padding: 1.5rem !important;
          }

          .description-card h3 {
            font-size: 1.1rem !important;
          }

          .description-card p {
            font-size: 0.85rem !important;
          }

          .course-card {
            padding: 1.25rem;
          }

          .course-card h4 {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </>
  );
}
