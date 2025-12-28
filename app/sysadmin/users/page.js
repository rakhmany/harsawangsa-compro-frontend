"use client";

export default function UsersPage() {
    const users = [
        { id: 1, name: "Admin User", email: "admin@harsawangsa.com", role: "Administrator", status: "Active" },
        { id: 2, name: "John Doe", email: "john@harsawangsa.com", role: "Editor", status: "Active" },
        { id: 3, name: "Jane Smith", email: "jane@harsawangsa.com", role: "Viewer", status: "Inactive" },
    ];

    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="row mb-4">
                <div className="col">
                    <h1 className="display-5 fw-bold">
                        <i className="mdi mdi-account-group me-2" style={{ color: "#f48a1d" }}></i>
                        User Management
                    </h1>
                    <p className="text-muted">Manage system users and permissions</p>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary">
                        <i className="mdi mdi-plus me-2"></i>
                        Add User
                    </button>
                </div>
            </div>

            {/* Users Table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: "60px" }}>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th style={{ width: "120px" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="fw-bold text-center">{user.id}</td>
                                        <td className="fw-medium">{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className={`badge ${
                                                user.role === 'Administrator' ? 'bg-danger' :
                                                user.role === 'Editor' ? 'bg-warning' : 'bg-secondary'
                                            }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`badge ${
                                                user.status === 'Active' ? 'bg-success' : 'bg-secondary'
                                            }`}>
                                                {user.status}
                                            </span>
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
                </div>
            </div>
        </div>
    );
}
