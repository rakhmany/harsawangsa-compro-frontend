"use client";
import { useState, useEffect } from "react";
import { apiFetch } from "@/lib/config";


export default function ServicesPage() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        short_description: "",
        full_description: "",
        icon_svg: "",
        image_url: "",
        price_info: "",
        display_order: 0,
        is_active: true
    });

    useEffect(() => {
        fetchServices();
    }, []);
    
    const fetchServices = async () => {
        try {
            const response = await apiFetch("/api/services");
            const data = await response.json();
            setServices(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching services:", error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = editingService 
                ? `/api/services/${editingService.service_id}`
                : "/api/services";
            
            const method = editingService ? "PUT" : "POST";
            
            const response = await apiFetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                fetchServices();
                closeModal();
            }
        } catch (error) {
            console.error("Error saving service:", error);
        }
    };

    const handleDelete = async (serviceId) => {
        if (!confirm("Are you sure you want to delete this service?")) return;
        
        try {
            const response = await apiFetch(`/api/services/${serviceId}`, {
                method: "DELETE"
            });

            if (response.ok) {
                fetchServices();
            }
        } catch (error) {
            console.error("Error deleting service:", error);
        }
    };

    const openAddModal = () => {
        setEditingService(null);
        setFormData({
            title: "",
            slug: "",
            short_description: "",
            full_description: "",
            icon_svg: "",
            image_url: "",
            price_info: "",
            display_order: 0,
            is_active: true
        });
        setShowModal(true);
    };

    const openEditModal = (service) => {
        setEditingService(service);
        setFormData({
            title: service.title,
            slug: service.slug,
            short_description: service.short_description || "",
            full_description: service.full_description || "",
            icon_svg: service.icon_svg || "",
            image_url: service.image_url || "",
            price_info: service.price_info || "",
            display_order: service.display_order,
            is_active: service.is_active
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingService(null);
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
                        <i className="mdi mdi-tools me-2" style={{ color: "#f48a1d" }}></i>
                        Services Management
                    </h1>
                    <p className="text-muted">Manage your services and offerings</p>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={openAddModal}>
                        <i className="mdi mdi-plus me-2"></i>
                        Add Service
                    </button>
                </div>
            </div>

            {/* Services Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: "60px" }}>ID</th>
                                    <th>Title</th>
                                    <th>Slug</th>
                                    <th>Short Description</th>
                                    <th>Price Info</th>
                                    <th>Order</th>
                                    <th>Status</th>
                                    <th style={{ width: "120px" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service) => (
                                    <tr key={service.service_id}>
                                        <td className="fw-bold text-center">{service.service_id}</td>
                                        <td className="fw-medium">{service.title}</td>
                                        <td><code>{service.slug}</code></td>
                                        <td>{service.short_description?.substring(0, 50)}...</td>
                                        <td>{service.price_info || "-"}</td>
                                        <td>{service.display_order}</td>
                                        <td>
                                            <span className={`badge bg-${service.is_active ? "success" : "secondary"}`}>
                                                {service.is_active ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td>
                                            <button 
                                                className="btn btn-sm btn-outline-primary me-1"
                                                onClick={() => openEditModal(service)}
                                            >
                                                <i className="mdi mdi-pencil"></i>
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleDelete(service.service_id)}
                                            >
                                                <i className="mdi mdi-delete"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {editingService ? "Edit Service" : "Add New Service"}
                                </h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                                    <div className="row">
                                        <div className="col-md-8 mb-3">
                                            <label className="form-label">Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.title}
                                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Slug</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.slug}
                                                onChange={(e) => setFormData({...formData, slug: e.target.value})}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Short Description</label>
                                        <textarea
                                            className="form-control"
                                            rows="2"
                                            value={formData.short_description}
                                            onChange={(e) => setFormData({...formData, short_description: e.target.value})}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Full Description</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            value={formData.full_description}
                                            onChange={(e) => setFormData({...formData, full_description: e.target.value})}
                                        ></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Image URL</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.image_url}
                                                onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Price Info</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.price_info}
                                                onChange={(e) => setFormData({...formData, price_info: e.target.value})}
                                                placeholder="e.g., Starting from $99"
                                            />
                                        </div>
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
                                        {editingService ? "Update" : "Create"}
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
