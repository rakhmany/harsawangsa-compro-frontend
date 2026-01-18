"use client";
import { useState, useEffect } from "react";

export default function TeamMembersPage() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [formData, setFormData] = useState({
        full_name: "",
        position: "",
        photo_url: "",
        bio: "",
        email: "",
        linkedin_url: "",
        instagram_url: "",
        twitter_url: "",
        display_order: 0,
        is_active: true
    });

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/team-members");
            const data = await response.json();
            setMembers(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching members:", error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = editingMember 
                ? `http://localhost:3001/api/team-members/${editingMember.member_id}`
                : "http://localhost:3001/api/team-members";
            
            const method = editingMember ? "PUT" : "POST";
            
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                fetchMembers();
                closeModal();
            }
        } catch (error) {
            console.error("Error saving member:", error);
        }
    };

    const handleDelete = async (memberId) => {
        if (!confirm("Are you sure you want to delete this team member?")) return;
        
        try {
            const response = await fetch(`http://localhost:3001/api/team-members/${memberId}`, {
                method: "DELETE"
            });

            if (response.ok) {
                fetchMembers();
            }
        } catch (error) {
            console.error("Error deleting member:", error);
        }
    };

    const openAddModal = () => {
        setEditingMember(null);
        setFormData({
            full_name: "",
            position: "",
            photo_url: "",
            bio: "",
            email: "",
            linkedin_url: "",
            instagram_url: "",
            twitter_url: "",
            display_order: 0,
            is_active: true
        });
        setShowModal(true);
    };

    const openEditModal = (member) => {
        setEditingMember(member);
        setFormData({
            full_name: member.full_name,
            position: member.position,
            photo_url: member.photo_url,
            bio: member.bio || "",
            email: member.email || "",
            linkedin_url: member.linkedin_url || "",
            instagram_url: member.instagram_url || "",
            twitter_url: member.twitter_url || "",
            display_order: member.display_order,
            is_active: member.is_active
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingMember(null);
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
                        <i className="mdi mdi-account-multiple me-2" style={{ color: "#f48a1d" }}></i>
                        Team Members
                    </h1>
                    <p className="text-muted">Manage your team members</p>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" onClick={openAddModal}>
                        <i className="mdi mdi-plus me-2"></i>
                        Add Member
                    </button>
                </div>
            </div>

            {/* Members Grid */}
            <div className="row">
                {members.map((member) => (
                    <div key={member.member_id} className="col-md-6 col-lg-3 mb-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body text-center">
                                <img 
                                    src={member.photo_url} 
                                    alt={member.full_name}
                                    className="rounded-circle mb-3"
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                />
                                <h5 className="card-title mb-1">{member.full_name}</h5>
                                <p className="text-muted small mb-2">{member.position}</p>
                                {member.email && (
                                    <p className="small text-muted mb-2">
                                        <i className="mdi mdi-email"></i> {member.email}
                                    </p>
                                )}
                                <div className="mb-3">
                                    {member.linkedin_url && (
                                        <a href={member.linkedin_url} target="_blank" className="btn btn-sm btn-outline-primary me-1">
                                            <i className="mdi mdi-linkedin"></i>
                                        </a>
                                    )}
                                    {member.instagram_url && (
                                        <a href={member.instagram_url} target="_blank" className="btn btn-sm btn-outline-danger me-1">
                                            <i className="mdi mdi-instagram"></i>
                                        </a>
                                    )}
                                    {member.twitter_url && (
                                        <a href={member.twitter_url} target="_blank" className="btn btn-sm btn-outline-info">
                                            <i className="mdi mdi-twitter"></i>
                                        </a>
                                    )}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="badge bg-secondary">Order: {member.display_order}</span>
                                    <span className={`badge bg-${member.is_active ? "success" : "secondary"}`}>
                                        {member.is_active ? "Active" : "Inactive"}
                                    </span>
                                </div>
                            </div>
                            <div className="card-footer bg-white border-top-0">
                                <button 
                                    className="btn btn-sm btn-outline-primary me-2"
                                    onClick={() => openEditModal(member)}
                                >
                                    <i className="mdi mdi-pencil me-1"></i>Edit
                                </button>
                                <button 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleDelete(member.member_id)}
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
                                    {editingMember ? "Edit Team Member" : "Add New Team Member"}
                                </h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.full_name}
                                                onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Position</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.position}
                                                onChange={(e) => setFormData({...formData, position: e.target.value})}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Photo URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formData.photo_url}
                                            onChange={(e) => setFormData({...formData, photo_url: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Bio</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={formData.bio}
                                            onChange={(e) => setFormData({...formData, bio: e.target.value})}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">LinkedIn URL</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.linkedin_url}
                                                onChange={(e) => setFormData({...formData, linkedin_url: e.target.value})}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Instagram URL</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.instagram_url}
                                                onChange={(e) => setFormData({...formData, instagram_url: e.target.value})}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Twitter URL</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.twitter_url}
                                                onChange={(e) => setFormData({...formData, twitter_url: e.target.value})}
                                            />
                                        </div>
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
                                        {editingMember ? "Update" : "Create"}
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
