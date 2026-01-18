# Database Documentation - Harsawangsa

## 📊 Database Schema Overview

Database: `harsawangsa_db`  
Character Set: `utf8mb4`  
Collation: `utf8mb4_unicode_ci`

---

## 📋 Tables

### 1. **users** - User Management
Mengelola user admin dan staff untuk akses sistem.

| Field | Type | Description |
|-------|------|-------------|
| user_id | INT (PK) | Primary key |
| username | VARCHAR(50) | Username unik |
| email | VARCHAR(100) | Email unik |
| password_hash | VARCHAR(255) | Password terenkripsi (bcrypt) |
| full_name | VARCHAR(100) | Nama lengkap |
| role | ENUM | admin, editor, viewer |
| profile_image | VARCHAR(255) | URL foto profil |
| is_active | BOOLEAN | Status aktif |
| last_login | DATETIME | Login terakhir |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu update |

**Default User:**
- Username: `admin`
- Password: `admin123` (⚠️ WAJIB DIGANTI!)

---

### 2. **company_values** - Nilai Perusahaan
Menyimpan nilai-nilai perusahaan.

| Field | Type | Description |
|-------|------|-------------|
| value_id | INT (PK) | Primary key |
| title | VARCHAR(100) | Judul nilai |
| description | TEXT | Deskripsi |
| icon_svg | TEXT | SVG icon |
| gradient_color | VARCHAR(100) | CSS gradient |
| display_order | INT | Urutan tampilan |
| is_active | BOOLEAN | Status aktif |

**Sample Data:** 6 values (Ketuhanan, Kolaborasi, Kreasi, Kebudayaan, Kompeten, Inovasi)

---

### 3. **team_members** - Tim
Anggota tim perusahaan.

| Field | Type | Description |
|-------|------|-------------|
| member_id | INT (PK) | Primary key |
| full_name | VARCHAR(100) | Nama lengkap |
| position | VARCHAR(100) | Posisi/jabatan |
| photo_url | VARCHAR(255) | URL foto |
| bio | TEXT | Biografi |
| email | VARCHAR(100) | Email |
| linkedin_url | VARCHAR(255) | LinkedIn |
| instagram_url | VARCHAR(255) | Instagram |
| twitter_url | VARCHAR(255) | Twitter |
| display_order | INT | Urutan tampilan |
| is_active | BOOLEAN | Status aktif |

**Sample Data:** 4 founders/co-founders

---

### 4. **portfolio_categories** - Kategori Portfolio
Kategori untuk project portfolio.

| Field | Type | Description |
|-------|------|-------------|
| category_id | INT (PK) | Primary key |
| category_name | VARCHAR(100) | Nama kategori |
| slug | VARCHAR(100) | URL slug (unique) |
| description | TEXT | Deskripsi |
| is_active | BOOLEAN | Status aktif |

**Sample Data:** Game Development, Web Development, Mobile Apps, Design

---

### 5. **portfolio_projects** - Portfolio Projects
Project portfolio perusahaan.

| Field | Type | Description |
|-------|------|-------------|
| project_id | INT (PK) | Primary key |
| category_id | INT (FK) | Foreign key ke categories |
| title | VARCHAR(150) | Judul project |
| slug | VARCHAR(150) | URL slug (unique) |
| description | TEXT | Deskripsi |
| image_url | VARCHAR(255) | URL gambar |
| project_url | VARCHAR(255) | URL project |
| client_name | VARCHAR(100) | Nama klien |
| technologies | TEXT | Teknologi digunakan |
| completion_date | DATE | Tanggal selesai |
| display_order | INT | Urutan tampilan |
| is_featured | BOOLEAN | Featured project |
| is_active | BOOLEAN | Status aktif |

**Sample Data:** 6 projects

---

### 6. **services** - Layanan
Layanan yang ditawarkan perusahaan.

| Field | Type | Description |
|-------|------|-------------|
| service_id | INT (PK) | Primary key |
| title | VARCHAR(150) | Judul layanan |
| slug | VARCHAR(150) | URL slug (unique) |
| short_description | TEXT | Deskripsi singkat |
| full_description | TEXT | Deskripsi lengkap |
| icon_svg | TEXT | SVG icon |
| image_url | VARCHAR(255) | URL gambar |
| price_info | VARCHAR(100) | Info harga |
| display_order | INT | Urutan tampilan |
| is_active | BOOLEAN | Status aktif |

**Sample Data:** 6 services

---

### 7. **pages** - Halaman
Content management untuk halaman website.

| Field | Type | Description |
|-------|------|-------------|
| page_id | INT (PK) | Primary key |
| title | VARCHAR(150) | Judul halaman |
| slug | VARCHAR(150) | URL slug (unique) |
| content | TEXT | Konten |
| meta_title | VARCHAR(200) | SEO title |
| meta_description | TEXT | SEO description |
| meta_keywords | TEXT | SEO keywords |
| is_active | BOOLEAN | Status aktif |

**Sample Data:** Home, About, Services, Explore, Contact

---

### 8. **page_sections** - Sections Halaman
Sections untuk setiap halaman.

| Field | Type | Description |
|-------|------|-------------|
| section_id | INT (PK) | Primary key |
| page_id | INT (FK) | Foreign key ke pages |
| section_title | VARCHAR(150) | Judul section |
| section_type | ENUM | hero, content, cards, gallery, team, values, custom |
| content | TEXT | Konten (JSON) |
| display_order | INT | Urutan tampilan |
| is_active | BOOLEAN | Status aktif |

---

### 9. **contact_messages** - Pesan Kontak
Pesan dari contact form.

| Field | Type | Description |
|-------|------|-------------|
| message_id | INT (PK) | Primary key |
| name | VARCHAR(100) | Nama pengirim |
| email | VARCHAR(100) | Email pengirim |
| phone | VARCHAR(20) | Nomor telepon |
| subject | VARCHAR(200) | Subjek |
| message | TEXT | Pesan |
| status | ENUM | new, read, replied, archived |
| replied_at | DATETIME | Waktu dibalas |
| replied_by | INT (FK) | User yang membalas |
| created_at | TIMESTAMP | Waktu dikirim |

---

### 10. **site_settings** - Pengaturan Website
Konfigurasi website.

| Field | Type | Description |
|-------|------|-------------|
| setting_id | INT (PK) | Primary key |
| setting_key | VARCHAR(100) | Key setting (unique) |
| setting_value | TEXT | Value setting |
| setting_type | ENUM | text, number, boolean, json, image |
| description | TEXT | Deskripsi |
| updated_at | TIMESTAMP | Waktu update |

**Sample Data:** 14 settings (site info, social media, meta tags, etc)

---

### 11. **media_library** - Media Library
Manajemen file/media.

| Field | Type | Description |
|-------|------|-------------|
| media_id | INT (PK) | Primary key |
| file_name | VARCHAR(255) | Nama file |
| file_path | VARCHAR(255) | Path file |
| file_type | VARCHAR(50) | Tipe file |
| file_size | INT | Ukuran file |
| mime_type | VARCHAR(100) | MIME type |
| uploaded_by | INT (FK) | User uploader |
| alt_text | VARCHAR(255) | Alt text |
| created_at | TIMESTAMP | Waktu upload |

---

## 🔍 Views

### v_active_portfolio
View untuk portfolio projects yang aktif dengan kategori.

### v_active_team
View untuk team members yang aktif.

### v_company_values
View untuk company values yang aktif.

---

## 🔧 Stored Procedures

### sp_get_page_content(page_slug)
Mengambil page content beserta sections berdasarkan slug.

### sp_add_contact_message(name, email, phone, subject, message)
Menambah pesan kontak baru.

---

## 🎯 Indexes

Indexes dioptimalkan untuk:
- Pencarian berdasarkan slug
- Filter berdasarkan status (is_active)
- Sorting berdasarkan display_order
- User authentication (email, username)
- Status management (contact messages)

---

## 🔐 Triggers

### trg_users_updated
Auto-update `updated_at` pada tabel users.

### trg_validate_contact_email
Validasi format email pada contact messages.

---

## 📊 Relationships

```
users (1) ----< (N) contact_messages.replied_by
users (1) ----< (N) media_library.uploaded_by

portfolio_categories (1) ----< (N) portfolio_projects.category_id
pages (1) ----< (N) page_sections.page_id
```

---

## 🚀 Import Database

### Via MySQL Command Line:
```bash
mysql -u root -p harsawangsa_db < harsawangsa_db.sql
```

### Via phpMyAdmin:
1. Buka phpMyAdmin
2. Create database `harsawangsa_db`
3. Import file `harsawangsa_db.sql`

---

## 🔒 Security Recommendations

1. ✅ Ganti password default admin
2. ✅ Gunakan strong password untuk database user
3. ✅ Aktifkan SSL/TLS untuk koneksi database
4. ✅ Backup database secara berkala
5. ✅ Batasi akses database hanya dari localhost/IP tertentu
6. ✅ Gunakan prepared statements (sudah implemented di backend)
7. ✅ Enable binary logging untuk recovery

---

## 📈 Performance Tips

1. Indexes sudah dioptimalkan untuk query umum
2. Gunakan `is_active` untuk soft delete
3. Paginate hasil query untuk data besar
4. Cache query results yang tidak sering berubah
5. Monitor slow queries dengan MySQL slow query log

---

## 🔄 Backup & Recovery

### Backup:
```bash
mysqldump -u root -p harsawangsa_db > backup_$(date +%Y%m%d).sql
```

### Restore:
```bash
mysql -u root -p harsawangsa_db < backup_20260118.sql
```

---

## 📞 Support

Untuk pertanyaan atau issue terkait database:
- Lihat file: `harsawangsa_db.sql` untuk schema lengkap
- Backend API: `/backend/README_API.md`
- Frontend Guide: `/frontend/SYSADMIN-GUIDE.md`
