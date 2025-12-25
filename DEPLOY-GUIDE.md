# 📦 Panduan Deploy Next.js ke Domainesia

## ✅ Persiapan yang Sudah Dilakukan

1. ✅ `next.config.ts` - Sudah dikonfigurasi untuk static export
2. ✅ `.htaccess` - Sudah dibuat dengan konfigurasi routing dan optimization

## 🚀 Langkah-Langkah Deploy

### 1️⃣ Build Project

Jalankan command berikut di terminal PowerShell:

```powershell
npm run build
```

**Output yang dihasilkan:**
- Folder `out/` akan dibuat di root project
- Berisi semua file HTML, CSS, JS, dan assets yang sudah di-optimize

### 2️⃣ Cek Hasil Build

Periksa folder `out/` Anda harus melihat struktur seperti ini:
```
out/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
├── contact/
│   └── index.html
├── _next/
│   ├── static/
│   └── ...
├── harsawangsa-orange-square.png
└── HEI-CompanyProfile.mp4
```

### 3️⃣ Test Build Secara Lokal (Opsional)

Test hasil build sebelum upload:

```powershell
# Install server sederhana
npm install -g serve

# Jalankan server lokal
serve -s out

# Buka browser: http://localhost:3000
```

### 4️⃣ Upload ke Domainesia

#### Via cPanel File Manager:

1. **Login ke cPanel** Domainesia
2. Buka **File Manager**
3. Navigate ke folder website Anda (biasanya `public_html`)
4. **Hapus semua file lama** (backup dulu jika perlu)
5. **Upload semua isi folder `out/`** ke `public_html`
   - Klik Upload
   - Pilih semua file di folder `out/`
   - Tunggu sampai selesai
6. **Copy file `.htaccess`** dari project ke `public_html`

#### Via FTP (Alternatif):

1. Download **FileZilla** atau FTP client lainnya
2. **Koneksi Info** (cek di cPanel):
   - Host: ftp.yourdomain.com
   - Username: (dari cPanel)
   - Password: (dari cPanel)
   - Port: 21
3. Upload semua isi folder `out/` ke `public_html`
4. Upload file `.htaccess`

### 5️⃣ Konfigurasi Domain

1. Pastikan domain sudah pointing ke IP hosting Domainesia
2. Di cPanel, set document root ke folder yang berisi file website Anda
3. Jika menggunakan SSL, aktifkan di cPanel (Let's Encrypt gratis)

### 6️⃣ Test Website

Buka domain Anda di browser dan test:
- ✅ Homepage: `https://yourdomain.com`
- ✅ About: `https://yourdomain.com/about`
- ✅ Services: `https://yourdomain.com/services`
- ✅ Contact: `https://yourdomain.com/contact`

## 🔧 Troubleshooting

### Problem: 404 Error pada halaman

**Solusi:**
- Pastikan file `.htaccess` sudah ter-upload
- Pastikan mod_rewrite sudah aktif (biasanya default aktif di Domainesia)

### Problem: CSS/JS tidak load

**Solusi:**
- Clear cache browser (Ctrl + Shift + Delete)
- Periksa console browser (F12) untuk error
- Pastikan folder `_next/` ter-upload dengan lengkap

### Problem: Video tidak muncul

**Solusi:**
- Pastikan file video `HEI-CompanyProfile.mp4` ada di root folder
- Cek permission file (chmod 644)
- File size terlalu besar? Compress dulu sebelum upload

### Problem: Gambar tidak muncul

**Solusi:**
- Periksa path gambar di code (harus relative `/image.png`)
- Pastikan gambar sudah ter-upload
- Cek permission file (chmod 644)

## 📝 Update Website di Masa Depan

Setiap kali ada perubahan:

1. Edit code di local
2. Test dengan `npm run dev`
3. Build dengan `npm run build`
4. Upload folder `out/` yang baru ke hosting (replace yang lama)

## 🎯 Optimasi Performa

### Compress Gambar
Sebelum upload, compress semua gambar:
- Gunakan tools online: TinyPNG, Squoosh
- Atau install: `npm install -g imagemin-cli`

### Compress Video
Jika video terlalu besar:
- Gunakan HandBrake atau FFmpeg
- Target: Max 20MB untuk web

### Enable SSL
Di cPanel Domainesia:
1. Buka **SSL/TLS Status**
2. Pilih domain
3. Klik **Run AutoSSL**
4. Uncomment baris HTTPS di `.htaccess`

## 📞 Support

Jika ada masalah:
- **Domainesia Support:** support@domainesia.com
- **Live Chat:** Available di member area Domainesia
- **Ticket:** Buat ticket support di member area

## ✨ Checklist Sebelum Go Live

- [ ] npm run build berhasil tanpa error
- [ ] Test semua halaman di local (dengan serve -s out)
- [ ] Backup files lama di hosting
- [ ] Upload semua file ke hosting
- [ ] Upload .htaccess
- [ ] Test semua link dan navigasi
- [ ] Test di berbagai browser (Chrome, Firefox, Safari)
- [ ] Test di mobile device
- [ ] Enable SSL
- [ ] Test contact form (jika ada)
- [ ] Check Google Analytics (jika sudah setup)
- [ ] Submit sitemap ke Google Search Console

---

**🎉 Selamat! Website Anda siap go live!**
