"use client";
import { useState, useEffect } from "react";

export default function PortfolioPage() {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [activeTab, setActiveTab] = useState("projects");
    const [formData, setFormData] = useState({
        category_id: "",
        title: "",
        slug: "",
        description: "",
        image_url: "",
        project_url: "",
        client_name: "",
        technologies: "",
        completion_date: "",
        display_order: 0,
        is_featured: false,
        is_active: true
    });

    useEffect(() => {
        fetchProjects();
        fetchCategories();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/portfolio/projects");
            const data = await response.json();
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching projects:", error);
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/portfolio/categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = editingProject 
                ? `http://localhost:3001/api/portfolio/projects/${editingProject.project_id}`
                : "http://localhost:3001/api/portfolio/projects";
            
            const method = editingProject ? "PUT" : "POST";
            
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                fetchProjects();
                closeModal();
            }
        } catch (error) {
            console.error("Error saving project:", error);
        }
    };

    const handleDelete = async (projectId) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        
        try {
            const response = await fetch(`http://localhost:3001/api/portfolio/projects/${projectId}`, {
                method: "DELETE"
            });

            if (response.ok) {
                fetchProjects();
            }
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    const openAddModal = () => {
        setEditingProject(null);
        setFormData({
            category_id: "",
            title: "",
            slug: "",
            description: "",
            image_url: "",
            project_url: "",
            client_name: "",
            technologies: "",
            completion_date: "",
            display_order: 0,
            is_featured: false,
            is_active: true
        });
        setShowModal(true);
    };

    const openEditModal = (project) => {
        setEditingProject(project);
        setFormData({
            category_id: project.category_id || "",
            title: project.title,
            slug: project.slug,
            description: project.description || "",
            image_url: project.image_url,
            project_url: project.project_url || "",
            client_name: project.client_name || "",
            technologies: project.technologies || "",
            completion_date: project.completion_date || "",
            display_order: project.display_order,
            is_featured: project.is_featured,
            is_active: project.is_active
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingProject(null);
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
                        <i className="mdi mdi-briefcase me-2" style={{ color: "#f48a1d" }}></i>
                        Portfolio Management
                    </h1>
                    <p className="text-muted">Manage your portfolio projects and categories</p>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={openAddModal}>
                        <i className="mdi mdi-plus me-2"></i>
                        Add Project
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <button 
                        className={`nav-link ${activeTab === "projects" ? "active" : ""}`}
                        onClick={() => setActiveTab("projects")}
                    >
                        Projects
                    </button>
                </li>
                <li className="nav-item">
                    <button 
                        className={`nav-link ${activeTab === "categories" ? "active" : ""}`}
                        onClick={() => setActiveTab("categories")}
                    >
                        Categories
                    </button>
                </li>
            </ul>

            {/* Projects Tab */}
            {activeTab === "projects" && (
                <div className="row">
                    {projects.map((project) => (
                        <div key={project.project_id} className="col-md-6 col-lg-4 mb-4">
                            <div className="card border-0 shadow-sm h-100">
                                <img 
                                    src={project.image_url} 
                                    alt={project.title}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text small text-muted">
                                        {project.description?.substring(0, 100)}...
                                    </p>
                                    <div className="mb-2">
                                        {project.category_name && (
                                            <span className="badge bg-info me-2">{project.category_name}</span>
                                        )}
                                        {project.is_featured && (
                                            <span className="badge bg-warning">Featured</span>
                                        )}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="badge bg-secondary">Order: {project.display_order}</span>
                                        <span className={`badge bg-${project.is_active ? "success" : "secondary"}`}>
                                            {project.is_active ? "Active" : "Inactive"}
                                        </span>
                                    </div>
                                </div>
                                <div className="card-footer bg-white border-top-0">
                                    <button 
                                        className="btn btn-sm btn-outline-primary me-2"
                                        onClick={() => openEditModal(project)}
                                    >
                                        <i className="mdi mdi-pencil me-1"></i>Edit
                                    </button>
                                    <button 
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => handleDelete(project.project_id)}
                                    >
                                        <i className="mdi mdi-delete me-1"></i>Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Categories Tab */}
            {activeTab === "categories" && (
                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Categories</h5>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((cat) => (
                                        <tr key={cat.category_id}>
                                            <td>{cat.category_id}</td>
                                            <td>{cat.category_name}</td>
                                            <td><code>{cat.slug}</code></td>
                                            <td>
                                                <span className={`badge bg-${cat.is_active ? "success" : "secondary"}`}>
                                                    {cat.is_active ? "Active" : "Inactive"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {editingProject ? "Edit Project" : "Add New Project"}
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
                                            <label className="form-label">Category</label>
                                            <select
                                                className="form-select"
                                                value={formData.category_id}
                                                onChange={(e) => setFormData({...formData, category_id: e.target.value})}
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map((cat) => (
                                                    <option key={cat.category_id} value={cat.category_id}>
                                                        {cat.category_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Slug</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formData.slug}
                                            onChange={(e) => setFormData({...formData, slug: e.target.value})}
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
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formData.image_url}
                                            onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Project URL</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.project_url}
                                                onChange={(e) => setFormData({...formData, project_url: e.target.value})}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Client Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.client_name}
                                                onChange={(e) => setFormData({...formData, client_name: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Technologies</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.technologies}
                                                onChange={(e) => setFormData({...formData, technologies: e.target.value})}
                                                placeholder="React, Node.js, etc"
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Completion Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={formData.completion_date}
                                                onChange={(e) => setFormData({...formData, completion_date: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Display Order</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={formData.display_order}
                                                onChange={(e) => setFormData({...formData, display_order: parseInt(e.target.value)})}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label d-block">Featured</label>
                                            <div className="form-check form-switch mt-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={formData.is_featured}
                                                    onChange={(e) => setFormData({...formData, is_featured: e.target.checked})}
                                                />
                                                <label className="form-check-label">Featured Project</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
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
                                        {editingProject ? "Update" : "Create"}
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
