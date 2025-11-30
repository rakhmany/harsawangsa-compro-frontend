"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [alert, setAlert] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setAlert(data.message);

    setForm({ nama: "", email: "", pesan: "" });
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2 className="fw-bold" style={{ color: "#f48a1d" }}>Hubungi Kami</h2>

      {alert && (
        <div className="alert alert-success mt-3">{alert}</div>
      )}

      <form onSubmit={submitForm} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            type="text"
            className="form-control"
            value={form.nama}
            required
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Pesan</label>
          <textarea
            className="form-control"
            rows="4"
            value={form.pesan}
            required
            onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          />
        </div>

        <button className="btn text-white" style={{ backgroundColor: "#f48a1d" }}>
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}
