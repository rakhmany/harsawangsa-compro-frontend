"use client";

import { useState, useEffect } from "react";

export default function ContentManagementPage() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        section: '',
        title: '',
        description: ''
    });

    useEffect(() => {
        fetchContents();
    }, []);

    const fetchContents = async () => {
        try {
            const res = await fetch("http://localhost:3001/api/content");
            if (res.ok) {
                const data = await res.json();
                setContents(data);
            }
        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3001/api/content", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (res.ok) {
                alert('Content berhasil ditambahkan!');
                setFormData({ section: '', title: '', description: '' });
                setShowModal(false);
                fetchContents();
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Gagal menambahkan content');
        }
    };

    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="row mb-4">
                <div className="col">
                    <h1 className="display-5 fw-bold">
                        <i className="mdi mdi-file-document-outline me-2" style={{ color: "#f48a1d" }}></i>
                        Content Management
                    </h1>
                    <p className="text-muted">Manage all website content from here</p>
                </div>
                <div className="col-auto">
                    <button 
                        className="btn btn-primary"
                        onClick={() => setShowModal(true)}
                    >
                        <i className="mdi mdi-plus me-2"></i>
                        Add New Content
                    </button>
                </div>
            </div>

            {/* Content Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: "60px" }}>ID</th>
                                        <th style={{ width: "120px" }}>Section</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th style={{ width: "150px" }}>Created</th>
                                        <th style={{ width: "120px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contents.map((item) => (
                                        <tr key={item.id}>
                                            <td className="fw-bold text-center">{item.id}</td>
                                            <td>
                                                <span className="badge bg-primary">{item.section}</span>
                                            </td>
                                            <td className="fw-medium">{item.title}</td>
                                            <td className="text-truncate" style={{ maxWidth: "400px" }}>
                                                {item.description}
                                            </td>
                                            <td className="text-muted small">
                                                {new Date(item.created_at).toLocaleDateString('id-ID')}
                                            </td>
                                            <td>
                                                <div className="btn-group btn-group-sm">
                                                    <button className="btn btn-outline-primary">
                                                        <i className="mdi mdi-pencil"></i>
                                                    </button>
                                                    <button className="btn btn-outline-danger">
                                                        <i className="mdi mdi-delete"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Add Content */}
            {showModal && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Content</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Section</label>
                                        <select 
                                            className="form-select"
                                            value={formData.section}
                                            onChange={(e) => setFormData({...formData, section: e.target.value})}
                                            required
                                        >
                                            <option value="">Select Section</option>
                                            <option value="about">About</option>
                                            <option value="services">Services</option>
                                            <option value="contact">Contact</option>
                                            <option value="home">Home</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            value={formData.title}
                                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea 
                                            className="form-control"
                                            rows="4"
                                            value={formData.description}
                                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary" 
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save Content
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
