"use client";
import { useState, useEffect } from "react";

export default function CompanyValuesPage() {
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingValue, setEditingValue] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        icon_svg: "",
        gradient_color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display_order: 0,
        is_active: true
    });

    useEffect(() => {
        fetchValues();
    }, []);

    const fetchValues = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/company-values");
            const data = await response.json();
            setValues(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching values:", error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = editingValue 
                ? `http://localhost:3001/api/company-values/${editingValue.value_id}`
                : "http://localhost:3001/api/company-values";
            
            const method = editingValue ? "PUT" : "POST";
            
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                fetchValues();
                closeModal();
            }
        } catch (error) {
            console.error("Error saving value:", error);
        }
    };

    const handleDelete = async (valueId) => {
        if (!confirm("Are you sure you want to delete this company value?")) return;
        
        try {
            const response = await fetch(`http://localhost:3001/api/company-values/${valueId}`, {
                method: "DELETE"
            });

            if (response.ok) {
                fetchValues();
            }
        } catch (error) {
            console.error("Error deleting value:", error);
        }
    };

    const openAddModal = () => {
        setEditingValue(null);
        setFormData({
            title: "",
            description: "",
            icon_svg: "",
            gradient_color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display_order: 0,
            is_active: true
        });
        setShowModal(true);
    };

    const openEditModal = (value) => {
        setEditingValue(value);
        setFormData({
            title: value.title,
            description: value.description,
            icon_svg: value.icon_svg || "",
            gradient_color: value.gradient_color,
            display_order: value.display_order,
            is_active: value.is_active
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingValue(null);
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="row mb-4">
                <div className="col">
                    <h1 className="display-5 fw-bold">
                        <i className="mdi mdi-star-circle me-2" style={{ color: "#f48a1d" }}></i>
                        Company Values
                    </h1>
                    <p className="text-muted">Manage company values and principles</p>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={openAddModal}>
                        <i className="mdi mdi-plus me-2"></i>
                        Add Value
                    </button>
                </div>
            </div>

            {/* Values Grid */}
            <div className="row">
                {values.map((value) => (
                    <div key={value.value_id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div 
                                className="card-header text-white" 
                                style={{ background: value.gradient_color }}
                            >
                                <h5 className="mb-0">{value.title}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{value.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="badge bg-secondary">Order: {value.display_order}</span>
                                    <span className={`badge bg-${value.is_active ? "success" : "secondary"}`}>
                                        {value.is_active ? "Active" : "Inactive"}
                                    </span>
                                </div>
                            </div>
                            <div className="card-footer bg-white border-top-0">
                                <button 
                                    className="btn btn-sm btn-outline-primary me-2"
                                    onClick={() => openEditModal(value)}
                                >
                                    <i className="mdi mdi-pencil me-1"></i>Edit
                                </button>
                                <button 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleDelete(value.value_id)}
                                >
                                    <i className="mdi mdi-delete me-1"></i>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {editingValue ? "Edit Company Value" : "Add New Company Value"}
                                </h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
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
                                            rows="3"
                                            value={formData.description}
                                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Gradient Color (CSS)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formData.gradient_color}
                                            onChange={(e) => setFormData({...formData, gradient_color: e.target.value})}
                                            placeholder="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                        />
                                        <div 
                                            className="mt-2 rounded" 
                                            style={{ 
                                                height: "40px", 
                                                background: formData.gradient_color 
                                            }}
                                        ></div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Icon SVG (optional)</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={formData.icon_svg}
                                            onChange={(e) => setFormData({...formData, icon_svg: e.target.value})}
                                        ></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Display Order</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={formData.display_order}
                                                onChange={(e) => setFormData({...formData, display_order: parseInt(e.target.value)})}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label d-block">Status</label>
                                            <div className="form-check form-switch mt-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={formData.is_active}
                                                    onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                                                />
                                                <label className="form-check-label">Active</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        {editingValue ? "Update" : "Create"}
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
