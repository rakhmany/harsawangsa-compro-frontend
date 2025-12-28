"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch("http://localhost:3001/api/content");
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                
                const data = await res.json();
                setContents(data);
                setError(null);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
            
            {loading && (
                <div className="alert alert-info mt-3">
                    <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                    Loading data...
                </div>
            )}
            
            {error && (
                <div className="alert alert-danger mt-3">
                    <strong>Error:</strong> {error}
                    <br />
                    <small>Pastikan backend berjalan di http://localhost:3001</small>
                </div>
            )}
            
            {!loading && !error && contents.length === 0 && (
                <div className="alert alert-warning mt-3">
                    Tidak ada data tersedia.
                </div>
            )}
            
            <div className="row mt-4">
                {contents.map(item => (
                    <div key={item.id} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <span className="badge bg-primary mb-2">{item.section}</span>
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <Footer />
    </>
    );
}