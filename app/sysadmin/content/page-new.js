"use client";

import { useState, useEffect } from "react";

export default function ContentPage() {
    const [activeTab, setActiveTab] = useState('values');
    const [companyValues, setCompanyValues] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);
    const [portfolioProjects, setPortfolioProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            if (activeTab === 'values') {
                const res = await fetch('/api/company-values');
                const data = await res.json();
                if (data.success) setCompanyValues(data.data);
            } else if (activeTab === 'team') {
                const res = await fetch('/api/team-members');
                const data = await res.json();
                if (data.success) setTeamMembers(data.data);
            } else if (activeTab === 'portfolio') {
                const res = await fetch('/api/portfolio');
                const data = await res.json();
                if (data.success) setPortfolioProjects(data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id, type) => {
        if (!confirm('Are you sure you want to delete this item?')) return;
        
        try {
            const endpoint = type === 'values' ? '/api/company-values' : 
                           type === 'team' ? '/api/team-members' : '/api/portfolio';
            const res = await fetch(`${endpoint}?id=${id}`, { method: 'DELETE' });
            const data = await res.json();
            
            if (data.success) {
                alert('Item deleted successfully!');
                fetchData();
            }
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Error deleting item');
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">
                            <i className="mdi mdi-file-document-multiple me-2" style={{ color: "#f48a1d" }}></i>
                            Content Management
                        </h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="/sysadmin">Harsawangsa</a></li>
                                <li className="breadcrumb-item active">Content</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                                <li className="nav-item">
                                    <a 
                                        className={`nav-link ${activeTab === 'values' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('values')}
                                        role="tab"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span className="d-none d-sm-block"><i className="mdi mdi-star me-1"></i> Company Values</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        className={`nav-link ${activeTab === 'team' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('team')}
                                        role="tab"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span className="d-none d-sm-block"><i className="mdi mdi-account-group me-1"></i> Team Members</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        className={`nav-link ${activeTab === 'portfolio' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('portfolio')}
                                        role="tab"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span className="d-none d-sm-block"><i className="mdi mdi-folder-multiple me-1"></i> Portfolio</span>
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content p-3 text-muted">
                                {loading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {activeTab === 'values' && (
                                            <div className="table-responsive">
                                                <div className="d-flex justify-content-between mb-3">
                                                    <h5>Company Values</h5>
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="mdi mdi-plus me-1"></i> Add New
                                                    </button>
                                                </div>
                                                <table className="table table-bordered table-hover">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th width="5%">#</th>
                                                            <th width="15%">Title</th>
                                                            <th width="50%">Description</th>
                                                            <th width="10%">Order</th>
                                                            <th width="10%">Status</th>
                                                            <th width="10%">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {companyValues.map((value, index) => (
                                                            <tr key={value.value_id}>
                                                                <td>{index + 1}</td>
                                                                <td><strong>{value.title}</strong></td>
                                                                <td>{value.description}</td>
                                                                <td>{value.display_order}</td>
                                                                <td>
                                                                    <span className={`badge ${value.is_active ? 'bg-success' : 'bg-secondary'}`}>
                                                                        {value.is_active ? 'Active' : 'Inactive'}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-sm btn-info me-1">
                                                                        <i className="mdi mdi-pencil"></i>
                                                                    </button>
                                                                    <button 
                                                                        className="btn btn-sm btn-danger"
                                                                        onClick={() => handleDelete(value.value_id, 'values')}
                                                                    >
                                                                        <i className="mdi mdi-delete"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {activeTab === 'team' && (
                                            <div className="table-responsive">
                                                <div className="d-flex justify-content-between mb-3">
                                                    <h5>Team Members</h5>
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="mdi mdi-plus me-1"></i> Add New
                                                    </button>
                                                </div>
                                                <table className="table table-bordered table-hover">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th width="5%">#</th>
                                                            <th width="10%">Photo</th>
                                                            <th width="20%">Name</th>
                                                            <th width="20%">Position</th>
                                                            <th width="25%">Email</th>
                                                            <th width="10%">Status</th>
                                                            <th width="10%">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {teamMembers.map((member, index) => (
                                                            <tr key={member.member_id}>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    <img 
                                                                        src={member.photo_url} 
                                                                        alt={member.full_name}
                                                                        className="rounded-circle"
                                                                        width="40"
                                                                        height="40"
                                                                        style={{ objectFit: 'cover' }}
                                                                    />
                                                                </td>
                                                                <td><strong>{member.full_name}</strong></td>
                                                                <td>{member.position}</td>
                                                                <td>{member.email}</td>
                                                                <td>
                                                                    <span className={`badge ${member.is_active ? 'bg-success' : 'bg-secondary'}`}>
                                                                        {member.is_active ? 'Active' : 'Inactive'}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-sm btn-info me-1">
                                                                        <i className="mdi mdi-pencil"></i>
                                                                    </button>
                                                                    <button 
                                                                        className="btn btn-sm btn-danger"
                                                                        onClick={() => handleDelete(member.member_id, 'team')}
                                                                    >
                                                                        <i className="mdi mdi-delete"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {activeTab === 'portfolio' && (
                                            <div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <h5>Portfolio Projects</h5>
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="mdi mdi-plus me-1"></i> Add New
                                                    </button>
                                                </div>
                                                <div className="row">
                                                    {portfolioProjects.map((project) => (
                                                        <div className="col-xl-3 col-md-4 col-sm-6 mb-4" key={project.project_id}>
                                                            <div className="card">
                                                                <img 
                                                                    src={project.image_url} 
                                                                    className="card-img-top" 
                                                                    alt={project.title}
                                                                    style={{ height: '200px', objectFit: 'cover' }}
                                                                />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{project.title}</h5>
                                                                    <p className="card-text text-muted">{project.category_name}</p>
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <span className={`badge ${project.is_featured ? 'bg-warning' : 'bg-secondary'}`}>
                                                                            {project.is_featured ? 'Featured' : 'Regular'}
                                                                        </span>
                                                                        <div>
                                                                            <button className="btn btn-sm btn-info me-1">
                                                                                <i className="mdi mdi-pencil"></i>
                                                                            </button>
                                                                            <button 
                                                                                className="btn btn-sm btn-danger"
                                                                                onClick={() => handleDelete(project.project_id, 'portfolio')}
                                                                            >
                                                                                <i className="mdi mdi-delete"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
