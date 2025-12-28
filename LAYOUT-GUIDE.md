# Layout Structure Guide

## 📐 Struktur Layout Harsawangsa Web

Project ini menggunakan **Next.js 16 App Router** dengan dua layout terpisah:

### 1. **Public Layout** (Web Publik)
Untuk halaman-halaman yang dapat diakses publik.

**File:** `frontend/app/layout.tsx`

**Components:**
- `Navbar` - Navigation bar untuk web publik
- `Footer` - Footer untuk web publik
- `BootstrapClient` - Bootstrap JS initialization

**Halaman yang menggunakan:**
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page
- `/explore` - Explore page

---

### 2. **Admin Layout** (Sysadmin Panel)
Untuk halaman-halaman admin/dashboard.

**File:** `frontend/app/sysadmin/layout.tsx`

**Components:**
- `NavbarAdmin` - Admin navigation dengan menu dashboard
- `FooterAdmin` - Simplified admin footer
- `BootstrapClient` - Bootstrap JS initialization

**Halaman yang menggunakan:**
- `/sysadmin` - Dashboard utama dengan statistik
- `/sysadmin/content` - Content management (CRUD)
- `/sysadmin/users` - User management
- `/sysadmin/settings` - Settings & configuration

---

## 🎨 Cara Kerja Layout

### Public Layout
```
app/
├── layout.tsx          ← Root layout (public)
├── page.js            ← Home page
├── about/
│   └── page.js        ← About page
├── contact/
│   └── page.js        ← Contact page
└── components/
    ├── Navbar.js
    └── Footer.js
```

Setiap halaman di `app/` akan otomatis menggunakan `app/layout.tsx`

### Admin Layout
```
app/
└── sysadmin/
    ├── layout.tsx     ← Admin layout (override root)
    ├── page.js        ← Dashboard
    ├── content/
    │   └── page.js    ← Content management
    ├── users/
    │   └── page.js    ← User management
    └── settings/
        └── page.js    ← Settings
```

Semua halaman di `app/sysadmin/` akan menggunakan `app/sysadmin/layout.tsx` yang **meng-override** root layout.

---

## 🚀 Fitur Admin Panel

### Dashboard (`/sysadmin`)
- ✅ Statistics cards (Total Content, Users, Page Views, Messages)
- ✅ Recent content table
- ✅ Real-time data dari backend API

### Content Management (`/sysadmin/content`)
- ✅ CRUD operations untuk content
- ✅ Modal form untuk add content
- ✅ Tabel dengan sorting dan filter
- ✅ Integrasi dengan backend API

### User Management (`/sysadmin/users`)
- ✅ User list dengan role dan status
- ✅ Edit dan delete users
- ✅ Role-based badges

### Settings (`/sysadmin/settings`)
- ✅ General settings (site name, description, email)
- ✅ API configuration
- ✅ Security settings (2FA, session timeout)
- ✅ Maintenance mode

---

## 🎯 Cara Menambah Halaman Baru

### Untuk Web Publik:
```bash
# Buat folder dan file page
frontend/app/portfolio/page.js
```

File akan otomatis menggunakan public layout.

### Untuk Admin Panel:
```bash
# Buat di dalam folder sysadmin
frontend/app/sysadmin/reports/page.js
```

File akan otomatis menggunakan admin layout dengan NavbarAdmin dan FooterAdmin.

---

## 🔧 Kustomisasi Layout

### Mengubah Navbar Admin
Edit file: `frontend/app/components/NavbarAdmin.js`

Tambah menu baru:
```javascript
<li className="nav-item">
  <Link href="/sysadmin/reports" className="nav-link">
    Reports
  </Link>
</li>
```

### Mengubah Tampilan Admin
Edit: `frontend/app/sysadmin/layout.tsx`

Contoh: Tambah sidebar
```tsx
<div className="d-flex">
  <Sidebar />
  <main className="flex-grow-1">
    {children}
  </main>
</div>
```

---

## 📦 Bootstrap Icons

Sudah terinstall di kedua layout:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
```

**Cara pakai:**
```jsx
<i className="bi bi-house"></i>
<i className="bi bi-gear"></i>
<i className="bi bi-person"></i>
```

Lihat semua icon: https://icons.getbootstrap.com/

---

## 🌐 Routing

| URL | Layout | Komponen | Deskripsi |
|-----|--------|----------|-----------|
| `/` | Public | Navbar + Footer | Home page |
| `/about` | Public | Navbar + Footer | About page |
| `/contact` | Public | Navbar + Footer | Contact page |
| `/sysadmin` | Admin | NavbarAdmin + FooterAdmin | Dashboard |
| `/sysadmin/content` | Admin | NavbarAdmin + FooterAdmin | Content CRUD |
| `/sysadmin/users` | Admin | NavbarAdmin + FooterAdmin | User management |
| `/sysadmin/settings` | Admin | NavbarAdmin + FooterAdmin | Settings |

---

## 💡 Tips

1. **Nested Layouts**: Bisa buat sub-layout di dalam admin
   ```
   app/sysadmin/reports/layout.tsx  ← Layout khusus reports
   ```

2. **Shared Components**: Taruh di `app/components/`
   ```
   app/components/NavbarAdmin.js
   app/components/Card.js
   app/components/Table.js
   ```

3. **Styling**: 
   - Global styles: `app/globals.css`
   - Module CSS: `app/style/[ComponentName].module.css`
   - Inline styles: Gunakan untuk override cepat

4. **Loading States**: Tambah `loading.tsx` di folder manapun
   ```
   app/sysadmin/loading.tsx  ← Loading UI untuk semua admin pages
   ```

5. **Error Handling**: Tambah `error.tsx`
   ```
   app/sysadmin/error.tsx  ← Error boundary untuk admin
   ```

---

## 📝 Next Steps

- [ ] Implementasi authentication (login/logout)
- [ ] Protected routes untuk admin panel
- [ ] Dark mode toggle
- [ ] Mobile-responsive sidebar
- [ ] Role-based access control
- [ ] Real-time notifications
- [ ] File upload untuk content images

---

**Struktur Layout Sudah Siap! 🎉**

Sekarang Anda punya:
✅ Public layout untuk website
✅ Admin layout untuk dashboard
✅ 4 halaman admin lengkap
✅ Navigation yang berbeda per layout
✅ Bootstrap Icons terintegrasi
