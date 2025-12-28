# Material Design Icons (MDI) Reference

## 📌 Icon Usage di Sysadmin Panel

Semua halaman admin sudah menggunakan **Material Design Icons (MDI)** dari asset lokal.

### 🎯 Lokasi Font
```
frontend/app/sysadmin/components/assets/
├── fonts/
│   ├── materialdesignicons-webfont.woff2
│   ├── materialdesignicons-webfont.woff
│   ├── materialdesignicons-webfont.ttf
│   └── materialdesignicons-webfont.eot
└── css/
    └── icons.css  ← Import ini di layout
```

### 📥 Cara Menggunakan

**1. Import CSS di Layout**
```tsx
<link rel="stylesheet" href="/sysadmin/components/assets/css/icons.css" />
```

**2. Gunakan Class MDI**
```jsx
<i className="mdi mdi-speedometer"></i>
<i className="mdi mdi-account-group"></i>
<i className="mdi mdi-file-document-outline"></i>
```

---

## 🎨 Icon yang Digunakan di Admin Panel

### Dashboard (`/sysadmin`)
| Fungsi | Icon Class | Tampilan |
|--------|-----------|----------|
| Header Dashboard | `mdi mdi-speedometer` | ⏱️ Speedometer |
| Total Content | `mdi mdi-file-document-outline` | 📄 File |
| Users | `mdi mdi-account-group` | 👥 Users |
| Page Views | `mdi mdi-chart-line` | 📈 Chart |
| Messages | `mdi mdi-email-outline` | 📧 Email |
| Add Button | `mdi mdi-plus` | ➕ Plus |
| Edit Button | `mdi mdi-pencil` | ✏️ Pencil |
| Delete Button | `mdi mdi-delete` | 🗑️ Trash |

### Content Management (`/sysadmin/content`)
| Fungsi | Icon Class |
|--------|-----------|
| Header | `mdi mdi-file-document-outline` |
| Add Content | `mdi mdi-plus` |
| Edit | `mdi mdi-pencil` |
| Delete | `mdi mdi-delete` |

### User Management (`/sysadmin/users`)
| Fungsi | Icon Class |
|--------|-----------|
| Header | `mdi mdi-account-group` |
| Add User | `mdi mdi-plus` |
| Edit | `mdi mdi-pencil` |
| Delete | `mdi mdi-delete` |

### Settings (`/sysadmin/settings`)
| Fungsi | Icon Class |
|--------|-----------|
| Header | `mdi mdi-cog` |
| Warning | `mdi mdi-alert` |

### Navigation (NavbarAdmin)
| Menu | Icon Class |
|------|-----------|
| Back to Site | `mdi mdi-arrow-left-box` |

---

## 📚 Icon Library yang Tersedia

File `icons.css` Anda mengandung **Material Design Icons** lengkap. Berikut beberapa icon populer:

### Navigation & UI
```jsx
<i className="mdi mdi-home"></i>              // Home
<i className="mdi mdi-menu"></i>              // Menu
<i className="mdi mdi-close"></i>             // Close
<i className="mdi mdi-arrow-left"></i>        // Arrow Left
<i className="mdi mdi-arrow-right"></i>       // Arrow Right
<i className="mdi mdi-chevron-down"></i>      // Chevron Down
<i className="mdi mdi-chevron-up"></i>        // Chevron Up
```

### Actions
```jsx
<i className="mdi mdi-plus"></i>              // Add
<i className="mdi mdi-pencil"></i>            // Edit
<i className="mdi mdi-delete"></i>            // Delete
<i className="mdi mdi-check"></i>             // Check
<i className="mdi mdi-close"></i>             // Cancel
<i className="mdi mdi-refresh"></i>           // Refresh
<i className="mdi mdi-download"></i>          // Download
<i className="mdi mdi-upload"></i>            // Upload
<i className="mdi mdi-magnify"></i>           // Search
```

### Content
```jsx
<i className="mdi mdi-file-document"></i>          // Document
<i className="mdi mdi-file-document-outline"></i>  // Document Outline
<i className="mdi mdi-folder"></i>                 // Folder
<i className="mdi mdi-folder-open"></i>            // Folder Open
<i className="mdi mdi-image"></i>                  // Image
<i className="mdi mdi-video"></i>                  // Video
<i className="mdi mdi-music"></i>                  // Music
```

### Users & Accounts
```jsx
<i className="mdi mdi-account"></i>           // Single User
<i className="mdi mdi-account-group"></i>     // Multiple Users
<i className="mdi mdi-account-circle"></i>    // User Circle
<i className="mdi mdi-account-plus"></i>      // Add User
<i className="mdi mdi-account-remove"></i>    // Remove User
<i className="mdi mdi-account-check"></i>     // Verified User
```

### Dashboard & Analytics
```jsx
<i className="mdi mdi-speedometer"></i>       // Dashboard
<i className="mdi mdi-chart-line"></i>        // Line Chart
<i className="mdi mdi-chart-bar"></i>         // Bar Chart
<i className="mdi mdi-chart-pie"></i>         // Pie Chart
<i className="mdi mdi-trending-up"></i>       // Trending Up
<i className="mdi mdi-trending-down"></i>     // Trending Down
```

### Communication
```jsx
<i className="mdi mdi-email"></i>             // Email
<i className="mdi mdi-email-outline"></i>     // Email Outline
<i className="mdi mdi-message"></i>           // Message
<i className="mdi mdi-comment"></i>           // Comment
<i className="mdi mdi-bell"></i>              // Notification
<i className="mdi mdi-phone"></i>             // Phone
```

### Settings & System
```jsx
<i className="mdi mdi-cog"></i>               // Settings
<i className="mdi mdi-cog-outline"></i>       // Settings Outline
<i className="mdi mdi-lock"></i>              // Lock
<i className="mdi mdi-lock-open"></i>         // Unlock
<i className="mdi mdi-shield"></i>            // Security
<i className="mdi mdi-key"></i>               // Key
```

### Alerts & Status
```jsx
<i className="mdi mdi-alert"></i>             // Alert
<i className="mdi mdi-alert-circle"></i>      // Alert Circle
<i className="mdi mdi-information"></i>       // Info
<i className="mdi mdi-help-circle"></i>       // Help
<i className="mdi mdi-check-circle"></i>      // Success
<i className="mdi mdi-close-circle"></i>      // Error
```

### Commerce & Business
```jsx
<i className="mdi mdi-cart"></i>              // Shopping Cart
<i className="mdi mdi-credit-card"></i>       // Credit Card
<i className="mdi mdi-cash"></i>              // Cash
<i className="mdi mdi-sale"></i>              // Sale
<i className="mdi mdi-tag"></i>               // Tag
<i className="mdi mdi-receipt"></i>           // Receipt
```

---

## 🎨 Styling Icons

### Ukuran
```jsx
<i className="mdi mdi-home fs-1"></i>  // Extra Large
<i className="mdi mdi-home fs-2"></i>  // Large
<i className="mdi mdi-home fs-3"></i>  // Medium (default di cards)
<i className="mdi mdi-home fs-4"></i>  // Small
<i className="mdi mdi-home fs-5"></i>  // Extra Small
```

### Warna
```jsx
<i className="mdi mdi-home text-primary"></i>   // Blue
<i className="mdi mdi-home text-success"></i>   // Green
<i className="mdi mdi-home text-danger"></i>    // Red
<i className="mdi mdi-home text-warning"></i>   // Yellow
<i className="mdi mdi-home text-info"></i>      // Cyan
<i className="mdi mdi-home text-muted"></i>     // Gray
```

### Custom Color
```jsx
<i className="mdi mdi-home" style={{ color: "#f48a1d" }}></i>
```

### Spacing
```jsx
<i className="mdi mdi-home me-2"></i> Text  // Margin End
<i className="mdi mdi-home ms-2"></i> Text  // Margin Start
```

---

## 💡 Tips Penggunaan

### 1. **Consistency**
Gunakan outline variant untuk icon yang lebih ringan:
```jsx
<i className="mdi mdi-file-document-outline"></i>  // Lebih ringan
<i className="mdi mdi-file-document"></i>          // Solid
```

### 2. **Dalam Button**
```jsx
<button className="btn btn-primary">
  <i className="mdi mdi-plus me-2"></i>
  Add New
</button>
```

### 3. **Dalam Badge/Pills**
```jsx
<span className="badge bg-primary">
  <i className="mdi mdi-check me-1"></i>
  Active
</span>
```

### 4. **Loading State**
```jsx
<i className="mdi mdi-loading mdi-spin"></i>  // Rotating icon
```

---

## 🔄 Migration dari Bootstrap Icons

### Mapping Icon

| Bootstrap Icons | Material Design Icons |
|----------------|----------------------|
| `bi bi-house` | `mdi mdi-home` |
| `bi bi-person` | `mdi mdi-account` |
| `bi bi-people` | `mdi mdi-account-group` |
| `bi bi-gear` | `mdi mdi-cog` |
| `bi bi-speedometer2` | `mdi mdi-speedometer` |
| `bi bi-file-text` | `mdi mdi-file-document-outline` |
| `bi bi-envelope` | `mdi mdi-email-outline` |
| `bi bi-trash` | `mdi mdi-delete` |
| `bi bi-pencil` | `mdi mdi-pencil` |
| `bi bi-plus-lg` | `mdi mdi-plus` |
| `bi bi-graph-up` | `mdi mdi-chart-line` |
| `bi bi-box-arrow-left` | `mdi mdi-arrow-left-box` |
| `bi bi-exclamation-triangle` | `mdi mdi-alert` |

---

## 📖 Full Icon List

Untuk melihat semua 7000+ icon yang tersedia, buka:
- **Online**: https://pictogrammers.com/library/mdi/
- **Local CSS**: `frontend/app/sysadmin/components/assets/css/icons.css`

Cari icon dengan prefix `.mdi-` di file CSS.

---

## ✅ Status Update

✅ Layout menggunakan `icons.css` lokal  
✅ Dashboard icons → MDI  
✅ Content Management icons → MDI  
✅ User Management icons → MDI  
✅ Settings icons → MDI  
✅ NavbarAdmin icons → MDI  
✅ Semua icon berfungsi dengan font lokal  

**Tidak perlu koneksi internet untuk icon!** 🎉
