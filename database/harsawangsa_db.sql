-- ============================================
-- Database: Harsawangsa Edukasi Indonesia
-- Created: January 16, 2026
-- Updated: January 18, 2026
-- Description: Database schema untuk website Harsawangsa
-- ============================================

-- Drop database jika sudah ada (hati-hati, akan menghapus semua data!)
-- Uncomment baris di bawah jika ingin reset database
-- DROP DATABASE IF EXISTS harsawangsa_db;

-- Create database
CREATE DATABASE IF NOT EXISTS harsawangsa_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE harsawangsa_db;

-- ============================================
-- Table: users
-- Description: User management untuk admin dan staff
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role ENUM('admin', 'editor', 'viewer') DEFAULT 'viewer',
    profile_image VARCHAR(255) DEFAULT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    last_login DATETIME DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: company_values
-- Description: Nilai-nilai perusahaan (Ketuhanan, Kolaborasi, dll)
-- ============================================
CREATE TABLE IF NOT EXISTS company_values (
    value_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    icon_svg TEXT DEFAULT NULL,
    gradient_color VARCHAR(100) DEFAULT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_display_order (display_order),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: team_members
-- Description: Tim Harsawangsa
-- ============================================
CREATE TABLE IF NOT EXISTS team_members (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    photo_url VARCHAR(255) NOT NULL,
    bio TEXT DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    linkedin_url VARCHAR(255) DEFAULT NULL,
    instagram_url VARCHAR(255) DEFAULT NULL,
    twitter_url VARCHAR(255) DEFAULT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_display_order (display_order),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: portfolio_categories
-- Description: Kategori untuk portfolio projects
-- ============================================
CREATE TABLE IF NOT EXISTS portfolio_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT DEFAULT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: portfolio_projects
-- Description: Portfolio dan projects
-- ============================================
CREATE TABLE IF NOT EXISTS portfolio_projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT DEFAULT NULL,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    description TEXT DEFAULT NULL,
    image_url VARCHAR(255) NOT NULL,
    project_url VARCHAR(255) DEFAULT NULL,
    client_name VARCHAR(100) DEFAULT NULL,
    technologies TEXT DEFAULT NULL,
    completion_date DATE DEFAULT NULL,
    display_order INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES portfolio_categories(category_id) ON DELETE SET NULL,
    INDEX idx_category (category_id),
    INDEX idx_slug (slug),
    INDEX idx_is_featured (is_featured),
    INDEX idx_is_active (is_active),
    INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: services
-- Description: Layanan yang ditawarkan
-- ============================================
CREATE TABLE IF NOT EXISTS services (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    short_description TEXT DEFAULT NULL,
    full_description TEXT DEFAULT NULL,
    icon_svg TEXT DEFAULT NULL,
    image_url VARCHAR(255) DEFAULT NULL,
    price_info VARCHAR(100) DEFAULT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_is_active (is_active),
    INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: pages
-- Description: Content pages (About, Home, dll)
-- ============================================
CREATE TABLE IF NOT EXISTS pages (
    page_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    content TEXT DEFAULT NULL,
    meta_title VARCHAR(200) DEFAULT NULL,
    meta_description TEXT DEFAULT NULL,
    meta_keywords TEXT DEFAULT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: page_sections
-- Description: Sections untuk setiap page
-- ============================================
CREATE TABLE IF NOT EXISTS page_sections (
    section_id INT AUTO_INCREMENT PRIMARY KEY,
    page_id INT NOT NULL,
    section_title VARCHAR(150) DEFAULT NULL,
    section_type ENUM('hero', 'content', 'cards', 'gallery', 'team', 'values', 'custom') DEFAULT 'content',
    content TEXT DEFAULT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (page_id) REFERENCES pages(page_id) ON DELETE CASCADE,
    INDEX idx_page (page_id),
    INDEX idx_display_order (display_order),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: contact_messages
-- Description: Pesan dari contact form
-- ============================================
CREATE TABLE IF NOT EXISTS contact_messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) DEFAULT NULL,
    subject VARCHAR(200) DEFAULT NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
    replied_at DATETIME DEFAULT NULL,
    replied_by INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (replied_by) REFERENCES users(user_id) ON DELETE SET NULL,
    INDEX idx_status (status),
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: site_settings
-- Description: Pengaturan website
-- ============================================
CREATE TABLE IF NOT EXISTS site_settings (
    setting_id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) NOT NULL UNIQUE,
    setting_value TEXT DEFAULT NULL,
    setting_type ENUM('text', 'number', 'boolean', 'json', 'image') DEFAULT 'text',
    description TEXT DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_key (setting_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: media_library
-- Description: Media/file management
-- ============================================
CREATE TABLE IF NOT EXISTS media_library (
    media_id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) DEFAULT NULL,
    file_size INT DEFAULT NULL,
    mime_type VARCHAR(100) DEFAULT NULL,
    uploaded_by INT DEFAULT NULL,
    alt_text VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(user_id) ON DELETE SET NULL,
    INDEX idx_file_type (file_type),
    INDEX idx_uploaded_by (uploaded_by)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Table: menus
-- Description: Menu navigation management
-- ============================================
CREATE TABLE IF NOT EXISTS menus (
    menu_id INT AUTO_INCREMENT PRIMARY KEY,
    parent_id INT DEFAULT NULL,
    title VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    url VARCHAR(255) DEFAULT NULL,
    icon VARCHAR(100) DEFAULT NULL,
    target VARCHAR(20) DEFAULT '_self',
    css_class VARCHAR(100) DEFAULT NULL,
    display_order INT DEFAULT 0,
    menu_location ENUM('header', 'footer', 'sidebar', 'mobile') DEFAULT 'header',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES menus(menu_id) ON DELETE CASCADE,
    INDEX idx_parent (parent_id),
    INDEX idx_slug (slug),
    INDEX idx_display_order (display_order),
    INDEX idx_location (menu_location),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- INSERT INITIAL DATA
-- ============================================

-- Insert default admin user (password: admin123 - IMPORTANT: Change after first login!)
-- Password hash for bcryptjs: admin123
INSERT INTO users (username, email, password_hash, full_name, role, is_active) VALUES
('admin', 'admin@harsawangsa.com', '$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Z.h.hQJZJKqZK.hpqQpOy', 'Administrator', 'admin', 1)
ON DUPLICATE KEY UPDATE username = username;

-- Insert Company Values
INSERT INTO company_values (title, description, gradient_color, display_order, is_active) VALUES
('Ketuhanan', 'Segala capaian selalu terjadi karena atas izin Tuhan Yang Maha Esa.', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 1, 1),
('Kolaborasi', 'Menggapai sesuatu yang berdampak positif dan berkelanjutan dengan waktu yang cepat melalui sifat kolaboratif.', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 2, 1),
('Kreasi', 'Mengkreasikan hal yang bermanfaat dan positif bagi orang lain serta menciptakan kreator dengan visi yang serupa.', 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 3, 1),
('Kebudayaan', 'Mendukung pelestarian budaya dengan empowering local values melalui teknologi kreatif.', 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 4, 1),
('Kompeten', 'Mengedepankan profesionalitas dalam setiap pekerjaan, sekecil apapun itu.', 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', 5, 1),
('Inovasi', 'Selalu berupaya untuk tetap belajar dan mengembangkan solusi yang bermanfaat.', 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', 6, 1)
ON DUPLICATE KEY UPDATE title = VALUES(title);

-- Insert Team Members
INSERT INTO team_members (full_name, position, photo_url, display_order, is_active) VALUES
('Robby Teguh S.', 'Founder, CEO', '/robby.png', 1, 1),
('Muhammad Daffarel M. A.', 'Co-Founder, CMO', '/darel.png', 2, 1),
('George Kanino M.', 'Co-Founder, CCO', '/nino.png', 3, 1),
('Yudaz Aulia R.', 'Co-Founder, CTO', '/yudaz.png', 4, 1)
ON DUPLICATE KEY UPDATE full_name = VALUES(full_name);

-- Insert Portfolio Categories
INSERT INTO portfolio_categories (category_name, slug, is_active) VALUES
('Game Development', 'game-development', 1),
('Web Development', 'web-development', 1),
('Mobile Apps', 'mobile-apps', 1),
('Design', 'design', 1)
ON DUPLICATE KEY UPDATE category_name = VALUES(category_name);

-- Insert Portfolio Projects
INSERT INTO portfolio_projects (category_id, title, slug, image_url, display_order, is_active, is_featured) VALUES
(1, 'Mondrian', 'mondrian', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800', 1, 1, 1),
(1, 'Nino Room', 'nino-room', '/porto-nino.png', 2, 1, 0),
(1, 'Fight Boboy', 'fight-boboy', '/porto-robby.png', 3, 1, 0),
(2, 'Brera', 'brera', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800', 4, 1, 1),
(1, 'Boboy Fight', 'boboy-fight', '/porto-robby.png', 5, 1, 0),
(2, 'Nirnia', 'nirnia', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800', 6, 1, 0)
ON DUPLICATE KEY UPDATE title = VALUES(title);

-- Insert Pages
INSERT INTO pages (title, slug, meta_title, meta_description, is_active) VALUES
('Home', 'home', 'Harsawangsa Edukasi Indonesia - Home', 'Harsawangsa Edukasi Indonesia - Kolaborasi, Kreasi, dan Inovasi', 1),
('About', 'about', 'About Us - Harsawangsa', 'Tentang Harsawangsa Edukasi Indonesia', 1),
('Services', 'services', 'Our Services - Harsawangsa', 'Layanan yang kami tawarkan', 1),
('Explore', 'explore', 'Explore - Harsawangsa', 'Jelajahi karya dan projek kami', 1),
('Contact', 'contact', 'Contact Us - Harsawangsa', 'Hubungi kami untuk kolaborasi', 1)
ON DUPLICATE KEY UPDATE title = VALUES(title);

-- Insert Page Sections for Home
INSERT INTO page_sections (page_id, section_title, section_type, content, display_order, is_active) VALUES
(1, 'Hero Section', 'hero', '{"title": "Harsawangsa", "subtitle": "Edukasi Indonesia", "video": "/HEI-CompanyProfile.mp4"}', 1, 1),
(1, 'Company Values', 'values', '{"title": "berpegang teguh pada nilai perusahaan sebagai identitas.", "description": "Komitmen kami dalam menumbuhkan kolaborasi yang dinamis memungkinkan kami untuk menavigasi tantangan unik dan kompleksitas dari berbagai sektor; pendekatan kami yang fleksibel memastikan solusi yang disesuaikan dengan kebutuhan spesifik setiap industri."}', 2, 1),
(1, 'Portfolio', 'gallery', '{"title": "Jelajahi Keahlian Industri Kami yang Beragam", "description": "ini merupakan hasil karya kami dalam berbagai industri, mencerminkan kemampuan kami untuk beradaptasi dan memberikan solusi inovatif yang sesuai dengan kebutuhan unik setiap sektor."}', 3, 1),
(1, 'Team', 'team', '{"title": "Tim yang Mendorong Inovasi", "description": "Kami adalah kumpulan individu berbakat yang berdedikasi untuk menciptakan solusi kreatif dan inovatif. Dengan beragam keahlian dan pengalaman, tim kami bekerja sama untuk menghadirkan hasil terbaik bagi klien kami."}', 4, 1)
ON DUPLICATE KEY UPDATE section_title = VALUES(section_title);

-- Insert Sample Services
INSERT INTO services (title, slug, short_description, full_description, display_order, is_active) VALUES
('Game Development', 'game-development', 'Pembuatan game interaktif dan menarik untuk berbagai platform', 'Kami menyediakan layanan pengembangan game dari konsep hingga peluncuran. Tim kami berpengalaman dalam Unity, Unreal Engine, dan teknologi game modern lainnya.', 1, 1),
('Web Development', 'web-development', 'Pembuatan website modern, responsif dan user-friendly', 'Layanan pembuatan website profesional menggunakan teknologi terkini seperti React, Next.js, Node.js. Dari landing page hingga aplikasi web kompleks.', 2, 1),
('Mobile App Development', 'mobile-app-development', 'Aplikasi mobile native dan cross-platform', 'Pengembangan aplikasi mobile untuk iOS dan Android menggunakan React Native, Flutter, atau native development untuk performa maksimal.', 3, 1),
('UI/UX Design', 'ui-ux-design', 'Desain antarmuka yang intuitif dan menarik', 'Layanan desain UI/UX yang berfokus pada pengalaman pengguna. Dari wireframe, prototype, hingga final design yang siap dikembangkan.', 4, 1),
('Digital Marketing', 'digital-marketing', 'Strategi pemasaran digital untuk meningkatkan jangkauan', 'Konsultasi dan implementasi strategi digital marketing termasuk SEO, SEM, social media marketing, dan content marketing.', 5, 1),
('Creative Content', 'creative-content', 'Konten kreatif untuk media digital dan cetak', 'Pembuatan konten kreatif seperti video, animasi, fotografi, dan copywriting untuk berbagai kebutuhan marketing dan branding.', 6, 1)
ON DUPLICATE KEY UPDATE title = VALUES(title);

-- Insert Site Settings
INSERT INTO site_settings (setting_key, setting_value, setting_type, description) VALUES
('site_name', 'Harsawangsa Edukasi Indonesia', 'text', 'Nama website'),
('site_tagline', 'Kolaborasi, Kreasi, dan Inovasi', 'text', 'Tagline website'),
('site_email', 'info@harsawangsa.com', 'text', 'Email kontak utama'),
('site_phone', '+62 xxx xxxx xxxx', 'text', 'Nomor telepon'),
('site_address', 'Indonesia', 'text', 'Alamat perusahaan'),
('facebook_url', 'https://facebook.com/harsawangsa', 'text', 'URL Facebook'),
('instagram_url', 'https://instagram.com/harsawangsa', 'text', 'URL Instagram'),
('linkedin_url', 'https://linkedin.com/company/harsawangsa', 'text', 'URL LinkedIn'),
('twitter_url', 'https://twitter.com/harsawangsa', 'text', 'URL Twitter'),
('company_logo', '/harsawangsa-white.png', 'image', 'Logo perusahaan'),
('maintenance_mode', 'false', 'boolean', 'Mode maintenance website'),
('analytics_code', '', 'text', 'Google Analytics Code'),
('meta_description', 'Harsawangsa Edukasi Indonesia - Partner terpercaya untuk solusi digital kreatif', 'text', 'Default meta description'),
('meta_keywords', 'harsawangsa, edukasi, game development, web development, digital agency', 'text', 'Default meta keywords')
ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value);

-- Insert Sample Menus
INSERT INTO menus (parent_id, title, slug, url, menu_location, display_order, is_active) VALUES
(NULL, 'Home', 'home', '/', 'header', 1, 1),
(NULL, 'About', 'about', '/about', 'header', 2, 1),
(NULL, 'Services', 'services', '/services', 'header', 3, 1),
(NULL, 'Explore', 'explore', '/explore', 'header', 4, 1),
(NULL, 'Contact', 'contact', '/contact', 'header', 5, 1)
ON DUPLICATE KEY UPDATE title = VALUES(title);

-- ============================================
-- CREATE VIEWS
-- ============================================

-- View: Active Portfolio Projects with Category
CREATE OR REPLACE VIEW v_active_portfolio AS
SELECT 
    p.project_id,
    p.title,
    p.slug,
    p.description,
    p.image_url,
    p.project_url,
    p.client_name,
    p.display_order,
    p.is_featured,
    c.category_name,
    c.slug as category_slug
FROM portfolio_projects p
LEFT JOIN portfolio_categories c ON p.category_id = c.category_id
WHERE p.is_active = TRUE
ORDER BY p.display_order ASC;

-- View: Active Team Members
CREATE OR REPLACE VIEW v_active_team AS
SELECT 
    member_id,
    full_name,
    position,
    photo_url,
    bio,
    email,
    display_order
FROM team_members
WHERE is_active = TRUE
ORDER BY display_order ASC;

-- View: Active Company Values
CREATE OR REPLACE VIEW v_company_values AS
SELECT 
    value_id,
    title,
    description,
    icon_svg,
    gradient_color,
    display_order
FROM company_values
WHERE is_active = TRUE
ORDER BY display_order ASC;

-- ============================================
-- STORED PROCEDURES
-- ============================================

DELIMITER //

-- Procedure: Get Page with Sections
CREATE PROCEDURE sp_get_page_content(IN page_slug VARCHAR(150))
BEGIN
    SELECT 
        p.page_id,
        p.title,
        p.slug,
        p.content,
        p.meta_title,
        p.meta_description
    FROM pages p
    WHERE p.slug = page_slug AND p.is_active = TRUE;
    
    SELECT 
        s.section_id,
        s.section_title,
        s.section_type,
        s.content,
        s.display_order
    FROM page_sections s
    INNER JOIN pages p ON s.page_id = p.page_id
    WHERE p.slug = page_slug AND s.is_active = TRUE
    ORDER BY s.display_order ASC;
END //

-- Procedure: Add Contact Message
CREATE PROCEDURE sp_add_contact_message(
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_phone VARCHAR(20),
    IN p_subject VARCHAR(200),
    IN p_message TEXT
)
BEGIN
    INSERT INTO contact_messages (name, email, phone, subject, message)
    VALUES (p_name, p_email, p_phone, p_subject, p_message);
    
    SELECT LAST_INSERT_ID() as message_id;
END //

DELIMITER ;

-- ============================================
-- INDEXES FOR OPTIMIZATION
-- ============================================

-- Additional indexes for better query performance
ALTER TABLE users ADD INDEX idx_username_active (username, is_active);
ALTER TABLE portfolio_projects ADD INDEX idx_featured_active (is_featured, is_active);
ALTER TABLE team_members ADD INDEX idx_position (position);
ALTER TABLE contact_messages ADD INDEX idx_status_created (status, created_at);

-- ============================================
-- TRIGGERS
-- ============================================

DELIMITER //

-- Trigger: Update timestamp on user modification
CREATE TRIGGER trg_users_updated 
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //

-- Trigger: Validate email format on contact messages
CREATE TRIGGER trg_validate_contact_email
BEFORE INSERT ON contact_messages
FOR EACH ROW
BEGIN
    IF NEW.email NOT REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Invalid email format';
    END IF;
END //

DELIMITER ;

-- ============================================
-- GRANT PERMISSIONS (Optional)
-- ============================================
-- Uncomment and modify based on your requirements
-- CREATE USER IF NOT EXISTS 'harsawangsa_user'@'localhost' IDENTIFIED BY 'your_secure_password';
-- GRANT ALL PRIVILEGES ON harsawangsa_db.* TO 'harsawangsa_user'@'localhost';
-- FLUSH PRIVILEGES;

-- ============================================
-- DATABASE INFO & VERIFICATION
-- ============================================

-- Display database info
SELECT 
    '✓ Database created successfully!' as status,
    DATABASE() as database_name,
    VERSION() as mysql_version,
    NOW() as timestamp;

-- Show all tables
SELECT 'Tables in database:' as info;
SHOW TABLES;

-- Count records in each table
SELECT 'Data Summary:' as info;
SELECT 'users' as table_name, COUNT(*) as total_records FROM users
UNION ALL
SELECT 'company_values', COUNT(*) FROM company_values
UNION ALL
SELECT 'team_members', COUNT(*) FROM team_members
UNION ALL
SELECT 'portfolio_categories', COUNT(*) FROM portfolio_categories
UNION ALL
SELECT 'portfolio_projects', COUNT(*) FROM portfolio_projects
UNION ALL
SELECT 'services', COUNT(*) FROM services
UNION ALL
SELECT 'pages', COUNT(*) FROM pages
UNION ALL
SELECT 'page_sections', COUNT(*) FROM page_sections
UNION ALL
SELECT 'contact_messages', COUNT(*) FROM contact_messages
UNION ALL
SELECT 'site_settings', COUNT(*) FROM site_settings
UNION ALL
SELECT 'media_library', COUNT(*) FROM media_library
UNION ALL
SELECT 'menus', COUNT(*) FROM menus;

-- ============================================
-- QUICK START GUIDE
-- ============================================
/*
📋 QUICK START GUIDE
====================

1. DATABASE SETUP:
   - Import this SQL file: mysql -u root -p harsawangsa_db < harsawangsa_db.sql
   - Or import via phpMyAdmin

2. DEFAULT LOGIN:
   - Username: admin
   - Password: admin123
   - ⚠️ CHANGE PASSWORD IMMEDIATELY AFTER FIRST LOGIN!

3. BACKEND SETUP:
   - cd backend
   - npm install
   - npm install bcryptjs
   - Create .env file (copy from .env.example)
   - Update DB_NAME=harsawangsa_db in .env
   - npm run dev (runs on port 5000)

4. FRONTEND SETUP:
   - cd frontend
   - npm install
   - npm run dev (runs on port 3000)

5. ACCESS SYSADMIN:
   - URL: http://localhost:3000/sysadmin
   - Login with default credentials

6. API ENDPOINTS:
   - Users: /api/users
   - Company Values: /api/company-values
   - Team Members: /api/team-members
   - Portfolio: /api/portfolio/projects, /api/portfolio/categories
   - Services: /api/services
   - Contact: /api/contact
   - Settings: /api/settings

7. FEATURES AVAILABLE:
   ✓ User Management (CRUD)
   ✓ Company Values Management
   ✓ Team Members Management
   ✓ Portfolio & Categories
   ✓ Services Management
   ✓ Contact Messages Inbox
   ✓ Site Settings
   ✓ Media Library (structure ready)

8. SECURITY NOTES:
   - Change default admin password
   - Set strong database password
   - Update .env with secure values
   - Enable HTTPS in production
   - Configure CORS properly

9. SAMPLE DATA:
   ✓ 1 admin user
   ✓ 6 company values
   ✓ 4 team members
   ✓ 4 portfolio categories
   ✓ 6 portfolio projects
   ✓ 6 services
   ✓ 5 pages
   ✓ 4 page sections
   ✓ 14 site settings

10. SUPPORT:
    - Frontend Guide: /frontend/SYSADMIN-GUIDE.md
    - Backend API: /backend/README_API.md
    - Database Schema: This file

Happy Coding! 🚀
*/
