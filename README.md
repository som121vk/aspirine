# ⚡ Aspirine - Professional Freelance Services

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://som121vk.github.io/aspirine/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/som121vk/aspirine/graphs/commit-activity)

> A modern, full-featured freelance service agency website with comprehensive admin panel for managing projects, feedback, and users.

## 🌐 Live Demo

**Website:** [https://som121vk.github.io/aspirine/](https://som121vk.github.io/aspirine/)

**Admin Panel:** [https://som121vk.github.io/aspirine/admin-panel.html](https://som121vk.github.io/aspirine/admin-panel.html)

---

## ✨ Features

### 🎨 Main Website
- **Modern Design** - Beautiful dark theme with vibrant gradients
- **Responsive Layout** - Works perfectly on all devices
- **Service Showcase** - Web Development, Design, Apps, Video Editing, Content, Marketing
- **Portfolio Section** - Filterable project gallery
- **Pricing Plans** - Transparent pricing with multiple tiers
- **Contact Form** - Integrated with admin panel
- **Google Sign-In** - OAuth authentication

### 🎯 Admin Panel
- **Dashboard** - Real-time statistics and recent activity
- **Projects Management** - View, edit, delete project submissions
- **Feedback Management** - Customer reviews and ratings
- **User Management** - Track registrations and logins
- **Analytics** - Charts and insights (ready for Chart.js)
- **Data Export/Import** - JSON format for backups
- **Settings** - Configuration and preferences

---

## 🚀 Quick Start

### View Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/som121vk/aspirine.git
   cd aspirine
   ```

2. **Open in browser:**
   - Main site: Open `index.html`
   - Admin panel: Open `admin-panel.html`

### Deploy to GitHub Pages

GitHub Pages is already configured! Just push to `main` branch and your site will automatically deploy.

---

## 📁 Project Structure

```
aspirine/
├── index.html                  # Main website
├── admin-panel.html           # Admin dashboard
├── admin-access.html          # Admin access page
├── client-dashboard.html      # Client dashboard
├── css/
│   ├── style.css             # Main website styles
│   └── admin-style.css       # Admin panel styles
├── js/
│   ├── main.js               # Main website JavaScript
│   └── admin.js              # Admin panel JavaScript
├── images/                    # Image assets
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── ADMIN_PANEL_README.md     # Admin panel documentation
├── ADMIN_SETUP_GUIDE.md      # Setup instructions
└── PROJECT_SUMMARY.md        # Project overview
```

---

## 🎯 Key Pages

| Page | URL | Description |
|------|-----|-------------|
| **Home** | `/` | Main landing page with services |
| **Admin Panel** | `/admin-panel.html` | Full admin dashboard |
| **Admin Access** | `/admin-access.html` | Beautiful admin login page |
| **Client Dashboard** | `/client-dashboard.html` | Client portal |

---

## 💻 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **Google Fonts** - Inter & Outfit typography
- **Google OAuth** - Authentication

### Storage
- **LocalStorage** - Client-side data persistence
- **JSON** - Data format for export/import

### Deployment
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automatic deployment

---

## 🔧 Setup & Configuration

### Google OAuth Setup

1. Get credentials from [Google Cloud Console](https://console.cloud.google.com/)
2. Update `GOOGLE_CLIENT_ID` in `js/main.js`
3. Add authorized origins and redirect URIs

### Admin Panel Configuration

The admin panel uses localStorage for data persistence. For production:

1. Add authentication system
2. Implement backend API
3. Use database (MongoDB/PostgreSQL)
4. Add HTTPS and security headers

See `ADMIN_SETUP_GUIDE.md` for detailed instructions.

---

## 📊 Admin Panel Features

### Dashboard
- Total projects, feedback, users, completed stats
- Recent activity feed
- Growth indicators
- Quick navigation

### Projects Management
- View all submissions from contact form
- Edit project status (pending/active/completed)
- Delete projects
- Export to JSON
- Detailed modal view

### Feedback Management
- Customer reviews with star ratings
- Full message viewing
- Delete entries
- Export functionality

### User Management
- Track all registrations
- Monitor Google/Email logins
- View last login times
- User status management

---

## 🎨 Customization

### Change Branding

**Update Company Name:**
```html
<!-- In index.html, admin-panel.html -->
<span class="logo-text">Aspirine</span>
```

**Update Colors:**
```css
/* In css/style.css or css/admin-style.css */
:root {
    --primary: #667eea;
    --accent-1: #f093fb;
}
```

---

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation
- **Tablet**: Collapsible sidebar
- **Mobile**: Hamburger menu, optimized tables

---

## 🔒 Security Notes

### Current Setup (Development)
- ✅ Perfect for local testing
- ✅ No server required
- ⚠️ No authentication on admin panel
- ⚠️ Data stored in localStorage

### Production Recommendations
1. Add admin authentication
2. Implement backend server
3. Use secure database
4. Enable HTTPS
5. Add rate limiting
6. Implement CORS
7. Use environment variables

---

## 📈 Future Enhancements

- [ ] Chart.js integration for analytics
- [ ] Backend API (Node.js/Express)
- [ ] Database integration (MongoDB)
- [ ] Email notifications
- [ ] PDF export
- [ ] Advanced search and filters
- [ ] Multi-language support
- [ ] Payment integration

---

## 📞 Contact

**Email:** shauryayadav1842@gmail.com  
**Phone:** +91 7985804343  
**Location:** Kannauj, India

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Google Fonts for typography
- GitHub Pages for hosting
- Modern web design inspiration

---

## 📚 Documentation

- [Admin Panel README](ADMIN_PANEL_README.md) - Detailed feature documentation
- [Admin Setup Guide](ADMIN_SETUP_GUIDE.md) - Complete setup instructions
- [Project Summary](PROJECT_SUMMARY.md) - Project overview

---

## 🚀 Deployment

### Automatic Deployment

This repository uses GitHub Actions for automatic deployment to GitHub Pages. Every push to `main` branch triggers a new deployment.

### Manual Deployment

1. Go to repository Settings
2. Navigate to Pages
3. Select `main` branch
4. Select `/ (root)` folder
5. Click Save

Your site will be live at: `https://som121vk.github.io/aspirine/`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ by Aspirine Team**

*Last Updated: November 24, 2024*
