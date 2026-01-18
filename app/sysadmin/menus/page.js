"use client";

import { useState, useEffect } from 'react';

export default function MenusPage() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null);
  const [formData, setFormData] = useState({
    parent_id: '',
    title: '',
    slug: '',
    url: '',
    icon: '',
    target: '_self',
    css_class: '',
    display_order: 0,
    menu_location: 'header',
    is_active: true
  });

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/menus');
      const data = await response.json();
      setMenus(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching menus:', error);
      setMenus([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = editingMenu 
        ? `http://localhost:3001/api/menus/${editingMenu.menu_id}`
        : 'http://localhost:3001/api/menus';
      
      const method = editingMenu ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchMenus();
        handleCloseModal();
        alert(editingMenu ? 'Menu updated successfully!' : 'Menu created successfully!');
      } else {
        const error = await response.json();
        alert(error.message || 'Error saving menu');
      }
    } catch (error) {
      console.error('Error saving menu:', error);
      alert('Error saving menu');
    }
  };

  const handleEdit = (menu) => {
    setEditingMenu(menu);
    setFormData({
      parent_id: menu.parent_id || '',
      title: menu.title,
      slug: menu.slug,
      url: menu.url || '',
      icon: menu.icon || '',
      target: menu.target || '_self',
      css_class: menu.css_class || '',
      display_order: menu.display_order,
      menu_location: menu.menu_location,
      is_active: menu.is_active
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this menu?')) return;

    try {
      const response = await fetch(`http://localhost:3001/api/menus/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchMenus();
        alert('Menu deleted successfully!');
      } else {
        const error = await response.json();
        alert(error.message || 'Error deleting menu');
      }
    } catch (error) {
      console.error('Error deleting menu:', error);
      alert('Error deleting menu');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingMenu(null);
    setFormData({
      parent_id: '',
      title: '',
      slug: '',
      url: '',
      icon: '',
      target: '_self',
      css_class: '',
      display_order: 0,
      menu_location: 'header',
      is_active: true
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Generate slug from title
  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }));
  };

  // Get parent menus for dropdown (exclude current menu and its children)
  const getParentMenuOptions = () => {
    if (!editingMenu) return menus.filter(m => m.parent_id === null);
    return menus.filter(m => m.parent_id === null && m.menu_id !== editingMenu.menu_id);
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
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="mb-0">Menu Management</h4>
            <button 
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              <i className="mdi mdi-plus me-1"></i>
              Add New Menu
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm">
                    <span className="avatar-title bg-primary rounded-circle font-size-20">
                      <i className="mdi mdi-menu"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted mb-1">Total Menus</p>
                  <h4 className="mb-0">{menus.length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm">
                    <span className="avatar-title bg-success rounded-circle font-size-20">
                      <i className="mdi mdi-header"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted mb-1">Header Menus</p>
                  <h4 className="mb-0">{menus.filter(m => m.menu_location === 'header').length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm">
                    <span className="avatar-title bg-info rounded-circle font-size-20">
                      <i className="mdi mdi-footer"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted mb-1">Footer Menus</p>
                  <h4 className="mb-0">{menus.filter(m => m.menu_location === 'footer').length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm">
                    <span className="avatar-title bg-warning rounded-circle font-size-20">
                      <i className="mdi mdi-check-circle"></i>
                    </span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted mb-1">Active</p>
                  <h4 className="mb-0">{menus.filter(m => m.is_active).length}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menus Table */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Order</th>
                      <th>Title</th>
                      <th>URL</th>
                      <th>Parent</th>
                      <th>Location</th>
                      <th>Target</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menus.length === 0 ? (
                      <tr>
                        <td colSpan="8" className="text-center py-4 text-muted">
                          No menus found. Create your first menu!
                        </td>
                      </tr>
                    ) : (
                      menus.map((menu) => (
                        <tr key={menu.menu_id}>
                          <td>
                            <span className="badge bg-secondary">{menu.display_order}</span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              {menu.icon && <i className={`${menu.icon} me-2`}></i>}
                              <strong>{menu.title}</strong>
                            </div>
                            <small className="text-muted">{menu.slug}</small>
                          </td>
                          <td>
                            <code className="text-primary">{menu.url || '-'}</code>
                          </td>
                          <td>
                            {menu.parent_title ? (
                              <span className="badge bg-info">{menu.parent_title}</span>
                            ) : (
                              <span className="text-muted">-</span>
                            )}
                          </td>
                          <td>
                            <span className={`badge ${
                              menu.menu_location === 'header' ? 'bg-primary' :
                              menu.menu_location === 'footer' ? 'bg-success' :
                              menu.menu_location === 'sidebar' ? 'bg-warning' :
                              'bg-secondary'
                            }`}>
                              {menu.menu_location}
                            </span>
                          </td>
                          <td>
                            <span className="badge bg-light text-dark">{menu.target}</span>
                          </td>
                          <td>
                            {menu.is_active ? (
                              <span className="badge bg-success">Active</span>
                            ) : (
                              <span className="badge bg-danger">Inactive</span>
                            )}
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-soft-primary me-1"
                              onClick={() => handleEdit(menu)}
                              title="Edit"
                            >
                              <i className="mdi mdi-pencil"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-soft-danger"
                              onClick={() => handleDelete(menu.menu_id)}
                              title="Delete"
                            >
                              <i className="mdi mdi-delete"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editingMenu ? 'Edit Menu' : 'Add New Menu'}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Title *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={formData.title}
                          onChange={handleTitleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Slug *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="slug"
                          value={formData.slug}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="url"
                          value={formData.url}
                          onChange={handleInputChange}
                          placeholder="/about"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Parent Menu</label>
                        <select
                          className="form-select"
                          name="parent_id"
                          value={formData.parent_id}
                          onChange={handleInputChange}
                        >
                          <option value="">None (Top Level)</option>
                          {getParentMenuOptions().map(menu => (
                            <option key={menu.menu_id} value={menu.menu_id}>
                              {menu.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Icon</label>
                        <input
                          type="text"
                          className="form-control"
                          name="icon"
                          value={formData.icon}
                          onChange={handleInputChange}
                          placeholder="mdi mdi-home"
                        />
                        <small className="text-muted">Material Design Icons class</small>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">CSS Class</label>
                        <input
                          type="text"
                          className="form-control"
                          name="css_class"
                          value={formData.css_class}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Location *</label>
                        <select
                          className="form-select"
                          name="menu_location"
                          value={formData.menu_location}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="header">Header</option>
                          <option value="footer">Footer</option>
                          <option value="sidebar">Sidebar</option>
                          <option value="mobile">Mobile</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Target</label>
                        <select
                          className="form-select"
                          name="target"
                          value={formData.target}
                          onChange={handleInputChange}
                        >
                          <option value="_self">Same Window</option>
                          <option value="_blank">New Window</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">Display Order</label>
                        <input
                          type="number"
                          className="form-control"
                          name="display_order"
                          value={formData.display_order}
                          onChange={handleInputChange}
                          min="0"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="is_active"
                            name="is_active"
                            checked={formData.is_active}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor="is_active">
                            Active
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      <i className="mdi mdi-content-save me-1"></i>
                      {editingMenu ? 'Update' : 'Create'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show"></div>
        </>
      )}
    </div>
  );
}
