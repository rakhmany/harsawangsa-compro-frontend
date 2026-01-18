"use client";

import { useState, useEffect } from 'react';

export default function SettingsPage() {
    const [settings, setSettings] = useState({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // Form states
    const [generalForm, setGeneralForm] = useState({
        site_name: '',
        site_tagline: '',
        site_email: '',
        site_phone: '',
        site_address: ''
    });

    const [apiForm, setApiForm] = useState({
        backend_url: '',
        api_timeout: ''
    });

    const [socialForm, setSocialForm] = useState({
        facebook_url: '',
        instagram_url: '',
        linkedin_url: '',
        twitter_url: ''
    });

    const [otherForm, setOtherForm] = useState({
        maintenance_mode: false,
        analytics_code: '',
        meta_description: '',
        meta_keywords: ''
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/settings');
            const data = await response.json();
            
            // Convert array to object
            const settingsObj = {};
            data.forEach(setting => {
                settingsObj[setting.setting_key] = setting.setting_value;
            });
            
            setSettings(settingsObj);

            // Populate forms
            setGeneralForm({
                site_name: settingsObj.site_name || '',
                site_tagline: settingsObj.site_tagline || '',
                site_email: settingsObj.site_email || '',
                site_phone: settingsObj.site_phone || '',
                site_address: settingsObj.site_address || ''
            });

            setApiForm({
                backend_url: settingsObj.backend_url || 'http://localhost:5000',
                api_timeout: settingsObj.api_timeout || '30'
            });

            setSocialForm({
                facebook_url: settingsObj.facebook_url || '',
                instagram_url: settingsObj.instagram_url || '',
                linkedin_url: settingsObj.linkedin_url || '',
                twitter_url: settingsObj.twitter_url || ''
            });

            setOtherForm({
                maintenance_mode: settingsObj.maintenance_mode === 'true',
                analytics_code: settingsObj.analytics_code || '',
                meta_description: settingsObj.meta_description || '',
                meta_keywords: settingsObj.meta_keywords || ''
            });

        } catch (error) {
            console.error('Error fetching settings:', error);
            alert('Error loading settings');
        } finally {
            setLoading(false);
        }
    };

    const handleSaveGeneral = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const updates = Object.entries(generalForm).map(([key, value]) => ({
                setting_key: key,
                setting_value: value,
                setting_type: 'text'
            }));

            for (const setting of updates) {
                await fetch('http://localhost:3001/api/settings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(setting)
                });
            }

            alert('General settings saved successfully!');
            fetchSettings();
        } catch (error) {
            console.error('Error saving settings:', error);
            alert('Error saving settings');
        } finally {
            setSaving(false);
        }
    };

    const handleSaveAPI = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const updates = Object.entries(apiForm).map(([key, value]) => ({
                setting_key: key,
                setting_value: value,
                setting_type: key === 'api_timeout' ? 'number' : 'text'
            }));

            for (const setting of updates) {
                await fetch('http://localhost:3001/api/settings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(setting)
                });
            }

            alert('API settings saved successfully!');
            fetchSettings();
        } catch (error) {
            console.error('Error saving settings:', error);
            alert('Error saving settings');
        } finally {
            setSaving(false);
        }
    };

    const handleSaveSocial = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const updates = Object.entries(socialForm).map(([key, value]) => ({
                setting_key: key,
                setting_value: value,
                setting_type: 'text'
            }));

            for (const setting of updates) {
                await fetch('http://localhost:3001/api/settings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(setting)
                });
            }

            alert('Social media settings saved successfully!');
            fetchSettings();
        } catch (error) {
            console.error('Error saving settings:', error);
            alert('Error saving settings');
        } finally {
            setSaving(false);
        }
    };

    const handleSaveOther = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            const updates = [
                {
                    setting_key: 'maintenance_mode',
                    setting_value: otherForm.maintenance_mode ? 'true' : 'false',
                    setting_type: 'boolean'
                },
                {
                    setting_key: 'analytics_code',
                    setting_value: otherForm.analytics_code,
                    setting_type: 'text'
                },
                {
                    setting_key: 'meta_description',
                    setting_value: otherForm.meta_description,
                    setting_type: 'text'
                },
                {
                    setting_key: 'meta_keywords',
                    setting_value: otherForm.meta_keywords,
                    setting_type: 'text'
                }
            ];

            for (const setting of updates) {
                await fetch('http://localhost:3001/api/settings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(setting)
                });
            }

            alert('Settings saved successfully!');
            fetchSettings();
        } catch (error) {
            console.error('Error saving settings:', error);
            alert('Error saving settings');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="container-fluid">
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
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
                            <form onSubmit={handleSaveGeneral}>
                                <div className="mb-3">
                                    <label className="form-label">Site Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={generalForm.site_name}
                                        onChange={(e) => setGeneralForm({...generalForm, site_name: e.target.value})}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Site Tagline</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={generalForm.site_tagline}
                                        onChange={(e) => setGeneralForm({...generalForm, site_tagline: e.target.value})}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Site Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        value={generalForm.site_email}
                                        onChange={(e) => setGeneralForm({...generalForm, site_email: e.target.value})}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={generalForm.site_phone}
                                        onChange={(e) => setGeneralForm({...generalForm, site_phone: e.target.value})}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <textarea 
                                        className="form-control" 
                                        rows="2"
                                        value={generalForm.site_address}
                                        onChange={(e) => setGeneralForm({...generalForm, site_address: e.target.value})}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </form>
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
                            <form onSubmit={handleSaveAPI}>
                                <div className="mb-3">
                                    <label className="form-label">Backend URL</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={apiForm.backend_url}
                                        onChange={(e) => setApiForm({...apiForm, backend_url: e.target.value})}
                                        placeholder="http://localhost:5000"
                                    />
                                    <small className="text-muted">URL endpoint untuk backend API</small>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">API Timeout (seconds)</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        value={apiForm.api_timeout}
                                        onChange={(e) => setApiForm({...apiForm, api_timeout: e.target.value})}
                                        min="1"
                                        max="300"
                                    />
                                    <small className="text-muted">Timeout untuk request API dalam detik</small>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Social Media Settings */}
                <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h5 className="mb-0">Social Media</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSaveSocial}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="mdi mdi-facebook me-1"></i> Facebook URL
                                    </label>
                                    <input 
                                        type="url" 
                                        className="form-control" 
                                        value={socialForm.facebook_url}
                                        onChange={(e) => setSocialForm({...socialForm, facebook_url: e.target.value})}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="mdi mdi-instagram me-1"></i> Instagram URL
                                    </label>
                                    <input 
                                        type="url" 
                                        className="form-control" 
                                        value={socialForm.instagram_url}
                                        onChange={(e) => setSocialForm({...socialForm, instagram_url: e.target.value})}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="mdi mdi-linkedin me-1"></i> LinkedIn URL
                                    </label>
                                    <input 
                                        type="url" 
                                        className="form-control" 
                                        value={socialForm.linkedin_url}
                                        onChange={(e) => setSocialForm({...socialForm, linkedin_url: e.target.value})}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="mdi mdi-twitter me-1"></i> Twitter URL
                                    </label>
                                    <input 
                                        type="url" 
                                        className="form-control" 
                                        value={socialForm.twitter_url}
                                        onChange={(e) => setSocialForm({...socialForm, twitter_url: e.target.value})}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Other Settings */}
                <div className="col-md-6 mb-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0 py-3">
                            <h5 className="mb-0">Other Settings</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSaveOther}>
                                <div className="form-check form-switch mb-3">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="maintenance"
                                        checked={otherForm.maintenance_mode}
                                        onChange={(e) => setOtherForm({...otherForm, maintenance_mode: e.target.checked})}
                                    />
                                    <label className="form-check-label" htmlFor="maintenance">
                                        <i className="mdi mdi-alert-circle text-warning me-1"></i>
                                        Enable Maintenance Mode
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Google Analytics Code</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={otherForm.analytics_code}
                                        onChange={(e) => setOtherForm({...otherForm, analytics_code: e.target.value})}
                                        placeholder="G-XXXXXXXXXX"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Meta Description</label>
                                    <textarea 
                                        className="form-control" 
                                        rows="2"
                                        value={otherForm.meta_description}
                                        onChange={(e) => setOtherForm({...otherForm, meta_description: e.target.value})}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Meta Keywords</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={otherForm.meta_keywords}
                                        onChange={(e) => setOtherForm({...otherForm, meta_keywords: e.target.value})}
                                        placeholder="keyword1, keyword2, keyword3"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
