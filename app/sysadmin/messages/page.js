"use client";
import { useState, useEffect } from "react";

export default function ContactMessagesPage() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/contact");
            const data = await response.json();
            setMessages(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching messages:", error);
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (messageId, status) => {
        try {
            const response = await fetch(`http://localhost:5000/api/contact/${messageId}/status`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status, replied_by: 1 })
            });

            if (response.ok) {
                fetchMessages();
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleDelete = async (messageId) => {
        if (!confirm("Are you sure you want to delete this message?")) return;
        
        try {
            const response = await fetch(`http://localhost:5000/api/contact/${messageId}`, {
                method: "DELETE"
            });

            if (response.ok) {
                fetchMessages();
            }
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };

    const openMessageModal = (message) => {
        setSelectedMessage(message);
        setShowModal(true);
        if (message.status === 'new') {
            handleStatusUpdate(message.message_id, 'read');
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedMessage(null);
    };

    const getStatusBadge = (status) => {
        const statusColors = {
            'new': 'primary',
            'read': 'info',
            'replied': 'success',
            'archived': 'secondary'
        };
        return statusColors[status] || 'secondary';
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
                        <i className="mdi mdi-email me-2" style={{ color: "#f48a1d" }}></i>
                        Contact Messages
                    </h1>
                    <p className="text-muted">View and manage contact form submissions</p>
                </div>
            </div>

            {/* Stats */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm bg-primary text-white">
                        <div className="card-body">
                            <h3 className="mb-0">{messages.filter(m => m.status === 'new').length}</h3>
                            <p className="mb-0">New Messages</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm bg-info text-white">
                        <div className="card-body">
                            <h3 className="mb-0">{messages.filter(m => m.status === 'read').length}</h3>
                            <p className="mb-0">Read</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm bg-success text-white">
                        <div className="card-body">
                            <h3 className="mb-0">{messages.filter(m => m.status === 'replied').length}</h3>
                            <p className="mb-0">Replied</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm bg-secondary text-white">
                        <div className="card-body">
                            <h3 className="mb-0">{messages.length}</h3>
                            <p className="mb-0">Total</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: "60px" }}>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th style={{ width: "150px" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg) => (
                                    <tr 
                                        key={msg.message_id} 
                                        className={msg.status === 'new' ? 'table-active' : ''}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => openMessageModal(msg)}
                                    >
                                        <td className="fw-bold text-center">{msg.message_id}</td>
                                        <td className="fw-medium">
                                            {msg.name}
                                            {msg.status === 'new' && <i className="mdi mdi-circle text-primary ms-2" style={{ fontSize: '8px' }}></i>}
                                        </td>
                                        <td>{msg.email}</td>
                                        <td>{msg.subject || "-"}</td>
                                        <td>{new Date(msg.created_at).toLocaleDateString()}</td>
                                        <td>
                                            <span className={`badge bg-${getStatusBadge(msg.status)}`}>
                                                {msg.status}
                                            </span>
                                        </td>
                                        <td onClick={(e) => e.stopPropagation()}>
                                            <select 
                                                className="form-select form-select-sm me-1" 
                                                style={{ display: 'inline-block', width: 'auto' }}
                                                value={msg.status}
                                                onChange={(e) => handleStatusUpdate(msg.message_id, e.target.value)}
                                            >
                                                <option value="new">New</option>
                                                <option value="read">Read</option>
                                                <option value="replied">Replied</option>
                                                <option value="archived">Archived</option>
                                            </select>
                                            <button 
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleDelete(msg.message_id)}
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

            {/* Message Detail Modal */}
            {showModal && selectedMessage && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Message Details</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <strong>From:</strong>
                                        <p>{selectedMessage.name}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Email:</strong>
                                        <p><a href={`mailto:${selectedMessage.email}`}>{selectedMessage.email}</a></p>
                                    </div>
                                </div>
                                {selectedMessage.phone && (
                                    <div className="mb-3">
                                        <strong>Phone:</strong>
                                        <p>{selectedMessage.phone}</p>
                                    </div>
                                )}
                                {selectedMessage.subject && (
                                    <div className="mb-3">
                                        <strong>Subject:</strong>
                                        <p>{selectedMessage.subject}</p>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <strong>Message:</strong>
                                    <div className="card bg-light mt-2">
                                        <div className="card-body">
                                            {selectedMessage.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong>Status:</strong>
                                        <p>
                                            <span className={`badge bg-${getStatusBadge(selectedMessage.status)}`}>
                                                {selectedMessage.status}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Received:</strong>
                                        <p>{new Date(selectedMessage.created_at).toLocaleString()}</p>
                                    </div>
                                </div>
                                {selectedMessage.replied_at && (
                                    <div className="alert alert-success">
                                        <strong>Replied at:</strong> {new Date(selectedMessage.replied_at).toLocaleString()}
                                        {selectedMessage.replied_by_name && ` by ${selectedMessage.replied_by_name}`}
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button 
                                    className="btn btn-success"
                                    onClick={() => {
                                        handleStatusUpdate(selectedMessage.message_id, 'replied');
                                        closeModal();
                                    }}
                                >
                                    Mark as Replied
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
