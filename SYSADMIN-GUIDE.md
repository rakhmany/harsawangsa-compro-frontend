# Harsawangsa Frontend - Sysadmin Guide

Panduan lengkap untuk menggunakan sistem admin Harsawangsa

## Setup Frontend

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser ke `http://localhost:3000`

## Akses Sysadmin

URL: `http://localhost:3000/sysadmin`

Menu yang tersedia:

### 1. Dashboard
- Overview statistik website
- Quick actions

### 2. Content Management
- Manage halaman website
- Edit content sections

### 3. Company Values
- Tambah/Edit/Hapus nilai perusahaan
- Atur display order dan gradient color
- Kelola icon SVG

### 4. Team Members
- Manage anggota tim
- Upload foto dan bio
- Social media links (LinkedIn, Instagram, Twitter)
- Atur display order

### 5. Portfolio
- Manage projects portfolio
- Kategori portfolio
- Featured projects
- Image gallery
- Client information

### 6. Services
- Tambah/Edit layanan
- Short & full description
- Pricing information
- Icon dan image

### 7. Messages
- Lihat pesan dari contact form
- Update status (New, Read, Replied, Archived)
- Delete messages
- Quick stats

### 8. Users
- User management system
- Role-based access (Admin, Editor, Viewer)
- Password management
- User status (Active/Inactive)

### 9. Settings
- Site settings
- General configuration

## API Configuration

Backend API berjalan di `http://localhost:5000`

Pastikan backend sudah running sebelum menggunakan sysadmin.

## Features

### CRUD Operations
Semua module mendukung operasi:
- **Create**: Tambah data baru
- **Read**: Lihat data
- **Update**: Edit data existing
- **Delete**: Hapus data

### Real-time Updates
Data akan diupdate secara real-time setelah operasi CRUD

### Form Validation
Semua form memiliki validasi:
- Required fields
- Email format
- URL format
- Number validation

### Status Management
- Active/Inactive toggle
- Display order untuk sorting
- Featured items untuk highlight

## Database Schema

Semua data tersimpan di database MySQL `harsawangsa_db`

Import schema dari: `frontend/database/harsawangsa_db.sql`

## Troubleshooting

### Backend tidak terkoneksi
- Pastikan WAMP/MySQL running
- Cek backend server di `http://localhost:5000`
- Verifikasi database `harsawangsa_db` sudah di-import

### Data tidak muncul
- Cek browser console untuk error
- Verifikasi API endpoint response
- Pastikan CORS enabled di backend

### Error saat Create/Update
- Cek required fields
- Verifikasi format data (email, URL, number)
- Cek database constraints

## Default Admin User

Username: `admin`
Email: `admin@harsawangsa.com`
Password: `admin123`

⚠️ **PENTING**: Ganti password default setelah login pertama!

## Next Steps

1. Import database schema
2. Install backend dependencies (termasuk bcryptjs)
3. Start backend server
4. Start frontend server
5. Login ke sysadmin
6. Mulai manage content

## Support

Untuk pertanyaan atau issue, hubungi tim development Harsawangsa.
