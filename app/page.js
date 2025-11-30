import Navbar from "./components/Navbar";

export default function Home() {
  const instructors = [
    {
      name: "Ahmad Rizki",
      image: "-",
      bgColor: "#90EE90"
    },
    {
      name: "Sarah Putri", 
      image: "-",
      bgColor: "#DDA0DD"
    },
    {
      name: "Budi Santoso",
      image: "-", 
      bgColor: "#87CEEB"
    },
    {
      name: "Andi Pratama",
      image: "-",
      bgColor: "#FFB347"
    },
    {
      name: "Lisa Wijaya",
      image: "-",
      bgColor: "#DDA0DD"
    },
    {
      name: "Denny Kurniawan", 
      image: "-",
      bgColor: "#F4A460"
    },
    {
      name: "Ryan Adiputra",
      image: "",
      bgColor: "#87CEEB"
    },
    {
      name: "Maya Sari",
      image: "-",
      bgColor: "#DDA0DD"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-12">
              {/* Instructor Photos */}
              <div className="instructor-grid mb-5">
                {instructors.map((instructor, index) => (
                  <div 
                    key={index} 
                    className="instructor-photo"
                    style={{ backgroundColor: instructor.bgColor }}
                  >
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="instructor-img"
                    />
                  </div>
                ))}
              </div>

              {/* Main Text */}
              <div className="text-center">
                <h1 className="hero-title">
                  Belajar dari para ahli terbaik<br />
                  berdasarkan program Eropa
                </h1>
                
                <p className="hero-subtitle">
                  JayJay adalah sekolah online untuk karier teknologi dan kreatif<br />
                  yang didirikan oleh para ahli dari Eropa dan Indonesia.
                </p>

                {/* Trust Badges */}
                <div className="trust-badges">
                  <div className="trust-badge">
                    <img src="https://via.placeholder.com/120x40/4285f4/ffffff?text=COURSE+REPORT" alt="Course Report" />
                    <div className="rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-text">4.67 Ratings</span>
                    </div>
                  </div>
                  
                  <div className="trust-badge">
                    <img src="https://via.placeholder.com/80x40/000000/ffffff?text=switchup" alt="SwitchUp" />
                    <div className="rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-text">4.83 Ratings</span>
                    </div>
                  </div>
                  
                  <div className="trust-badge">
                    <img src="https://via.placeholder.com/100x40/ea4335/ffffff?text=Google" alt="Google" />
                    <div className="rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-text">4.9 Ratings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          padding: 80px 0 60px;
        }
        
        .instructor-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 60px;
          animation: fadeInUp 1s ease-out;
        }
        
        .instructor-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .instructor-photo:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        
        .instructor-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #2d3436;
          line-height: 1.2;
          margin-bottom: 30px;
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: #636e72;
          line-height: 1.6;
          margin-bottom: 50px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }
        
        .trust-badges {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease-out 0.9s both;
        }
        
        .trust-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        
        .trust-badge:hover {
          transform: translateY(-5px);
        }
        
        .trust-badge img {
          height: 30px;
          object-fit: contain;
          filter: grayscale(1) opacity(0.7);
          transition: all 0.3s ease;
        }
        
        .trust-badge:hover img {
          filter: grayscale(0) opacity(1);
        }
        
        .rating {
          text-align: center;
        }
        
        .stars {
          color: #f39c12;
          font-size: 0.9rem;
          margin-right: 5px;
        }
        
        .rating-text {
          font-size: 0.8rem;
          color: #636e72;
          font-weight: 600;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .instructor-photo {
            width: 100px;
            height: 100px;
          }
          
          .instructor-img {
            width: 80px;
            height: 80px;
          }
          
          .instructor-grid {
            gap: 10px;
          }
          
          .trust-badges {
            gap: 20px;
          }
          
          .hero-section {
            padding: 60px 0 40px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
            line-height: 1.3;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .instructor-photo {
            width: 80px;
            height: 80px;
          }
          
          .instructor-img {
            width: 65px;
            height: 65px;
          }
          
          .trust-badges {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </>
  );
}
