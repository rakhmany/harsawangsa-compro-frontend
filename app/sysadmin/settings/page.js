"use client";

export default function SettingsPage() {
    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="row mb-4">
                <div className="col">
                    <h1 className="display-5 fw-bold">
                        <i className="mdi mdi-cog me-2" style={{ color: "#f48a1d" }}></i>
                        Settings
                    </h1>
                    <p className="text-muted">Configure system settings and preferences</p>
                </div>
            </div>

            <div className="row">
                {/* General Settings */}
                <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h5 className="mb-0">General Settings</h5>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Site Name</label>
                                <input type="text" className="form-control" defaultValue="Harsawangsa" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Site Description</label>
                                <textarea className="form-control" rows="3" defaultValue="Company Profile Harsawangsa"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Admin Email</label>
                                <input type="email" className="form-control" defaultValue="admin@harsawangsa.com" />
                            </div>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>

                {/* API Settings */}
                <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h5 className="mb-0">API Configuration</h5>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Backend URL</label>
                                <input type="text" className="form-control" defaultValue="http://localhost:3001" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">API Timeout (seconds)</label>
                                <input type="number" className="form-control" defaultValue="30" />
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="enableCache" defaultChecked />
                                <label className="form-check-label" htmlFor="enableCache">
                                    Enable API Cache
                                </label>
                            </div>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h5 className="mb-0">Security</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="twoFactor" />
                                <label className="form-check-label" htmlFor="twoFactor">
                                    Enable Two-Factor Authentication
                                </label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="sessionTimeout" defaultChecked />
                                <label className="form-check-label" htmlFor="sessionTimeout">
                                    Enable Session Timeout
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Session Timeout (minutes)</label>
                                <input type="number" className="form-control" defaultValue="30" />
                            </div>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>

                {/* Maintenance Mode */}
                <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm border-warning">
                        <div className="card-header bg-warning bg-opacity-10 border-0 py-3">
                            <h5 className="mb-0 text-warning">
                                <i className="mdi mdi-alert me-2"></i>
                                Maintenance Mode
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="maintenance" />
                                <label className="form-check-label" htmlFor="maintenance">
                                    Enable Maintenance Mode
                                </label>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Maintenance Message</label>
                                <textarea 
                                    className="form-control" 
                                    rows="3" 
                                    defaultValue="We are currently performing scheduled maintenance. We'll be back soon!"
                                ></textarea>
                            </div>
                            <button className="btn btn-warning">Update Maintenance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
