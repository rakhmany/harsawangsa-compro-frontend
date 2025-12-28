"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SysadminPage() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
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
        fetchData();
    }, []);

    return (
        <>
            {/* Start Page Title */}
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">
                            <i className="mdi mdi-speedometer me-2" style={{ color: "#f48a1d" }}></i>
                            Dashboard
                        </h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="/sysadmin">Harsawangsa</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Title */}

            {/* Statistics Cards */}
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <p className="text-truncate font-size-14 mb-2">Total Content</p>
                                    <h4 className="mb-2">{contents.length}</h4>
                                    <p className="text-muted mb-0">
                                        <span className="text-success fw-bold font-size-12 me-2">
                                            <i className="mdi mdi-arrow-up me-1"></i>5.27%
                                        </span>from previous period
                                    </p>
                                </div>
                                <div className="avatar-sm">
                                    <span className="avatar-title bg-light text-primary rounded-3">
                                        <i className="mdi mdi-file-document-outline font-size-24"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <p className="text-truncate font-size-14 mb-2">Users</p>
                                    <h4 className="mb-2">24</h4>
                                    <p className="text-muted mb-0">
                                        <span className="text-success fw-bold font-size-12 me-2">
                                            <i className="mdi mdi-arrow-up me-1"></i>3.48%
                                        </span>from previous period
                                    </p>
                                </div>
                                <div className="avatar-sm">
                                    <span className="avatar-title bg-light text-success rounded-3">
                                        <i className="mdi mdi-account-group font-size-24"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <p className="text-truncate font-size-14 mb-2">Page Views</p>
                                    <h4 className="mb-2">1,234</h4>
                                    <p className="text-muted mb-0">
                                        <span className="text-danger fw-bold font-size-12 me-2">
                                            <i className="mdi mdi-arrow-down me-1"></i>0.82%
                                        </span>from previous period
                                    </p>
                                </div>
                                <div className="avatar-sm">
                                    <span className="avatar-title bg-light text-warning rounded-3">
                                        <i className="mdi mdi-chart-line font-size-24"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <p className="text-truncate font-size-14 mb-2">Messages</p>
                                    <h4 className="mb-2">89</h4>
                                    <p className="text-muted mb-0">
                                        <span className="text-success fw-bold font-size-12 me-2">
                                            <i className="mdi mdi-arrow-up me-1"></i>2.95%
                                        </span>from previous period
                                    </p>
                                </div>
                                <div className="avatar-sm">
                                    <span className="avatar-title bg-light text-danger rounded-3">
                                        <i className="mdi mdi-email-outline font-size-24"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Table */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="card-title">Recent Content</h4>
                                <Link href="/sysadmin/content" className="btn btn-primary btn-sm">
                                    <i className="mdi mdi-plus me-1"></i>Add New
                                </Link>
                            </div>

                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table table-centered table-nowrap mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th>ID</th>
                                                <th>Section</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Created</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contents.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="fw-bold">{item.id}</td>
                                                    <td>
                                                        <span className="badge badge-soft-primary">{item.section}</span>
                                                    </td>
                                                    <td className="fw-medium">{item.title}</td>
                                                    <td className="text-truncate" style={{ maxWidth: "300px" }}>
                                                        {item.description}
                                                    </td>
                                                    <td className="text-muted">
                                                        {new Date(item.created_at).toLocaleDateString()}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="btn btn-sm btn-soft-info">
                                                                <i className="mdi mdi-pencil"></i>
                                                            </button>
                                                            <button className="btn btn-sm btn-soft-danger">
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
                </div>
            </div>
        </>
    );
}