# Volta Metals Worldwide Website

A complete recreation of the Volta Metals Worldwide website (voltametalsworldwide.com) with the same design, layout, and functionality.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and interactions
- **Multi-page Structure**: Complete website with all major pages
- **Interactive Elements**: Working contact forms, navigation, and interactive components
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content

## 📁 Project Structure

```
volta-metals-website/
├── index.html              # Homepage
├── metals.html             # Metals division page
├── trading.html            # Trading division page
├── fondation.html          # Foundation page
├── contact.html            # Contact page
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript file
├── contact.js              # Contact form JavaScript
├── images/                 # Images directory
│   ├── volta-logo.svg      # Company logo
│   └── placeholder.txt     # Image requirements guide
└── README.md              # This file
```

## 🚀 Pages Overview

### 1. Homepage (index.html)
- Hero section with company overview
- About Volta section
- Business divisions showcase
- Newsletter signup

### 2. Metals Page (metals.html)
- Mining operations overview
- Product categories (rare earth elements, precious metals, etc.)
- Sustainability focus
- Quality assurance information

### 3. Trading Page (trading.html)
- Global trading services
- Market coverage (energy, metals, agricultural, financial)
- Market intelligence and analysis
- Risk management services

### 4. Foundation Page (fondation.html)
- Philanthropic initiatives
- Education and health programs
- Community development projects
- Impact statistics and stories

### 5. Contact Page (contact.html)
- Contact information
- Interactive contact form with validation
- Division-specific contact options
- Business hours and response times

## 🎨 Design Features

- **Color Scheme**: Professional blue-gray gradient (#5a7a97 to #8aa8c0)
- **Typography**: Inter font family for modern, clean text
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Animations**: Smooth transitions and hover effects
- **Mobile-First**: Responsive design starting from mobile

## ⚙️ Technical Features

### CSS Features
- Modern CSS Grid and Flexbox layouts
- Custom properties (CSS variables)
- Responsive breakpoints (920px, 768px)
- Smooth animations and transitions
- Mobile hamburger navigation

### JavaScript Features
- Mobile navigation toggle
- Form validation and submission
- Smooth scrolling
- Newsletter signup
- Contact form with validation
- Phone number formatting
- Character counter for message field

## 🖼️ Images Required

The website requires professional images to be placed in the `images/` directory. See `images/placeholder.txt` for detailed requirements including:

- Company logo
- Mining operations photos
- Trading floor images
- Foundation work photos
- Division-specific images
- Product category images

**Recommended Image Sources:**
- Unsplash.com (free high-quality photos)
- Pexels.com (free stock photos)
- Company-specific photos when available

## 🛠️ Setup Instructions

1. **Clone/Download** the project files
2. **Add Images**: Place required images in the `images/` directory (see placeholder.txt for specifications)
3. **Open in Browser**: Open `index.html` in a web browser
4. **Local Server** (optional): For best results, serve through a local web server

### Local Development Server Options:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Updating Content
- Edit HTML files to update text content
- Modify `styles.css` for design changes
- Update contact information in footer and contact page

### Adding New Pages
1. Create new HTML file
2. Copy header and footer structure from existing pages
3. Add navigation link to all pages
4. Update JavaScript if needed

### Styling Changes
- Colors: Update CSS custom properties in `:root`
- Fonts: Change Google Fonts import and font-family declarations
- Layout: Modify CSS Grid and Flexbox properties

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Email format validation
- Phone number formatting
- Character counter for messages
- Form submission simulation (replace with actual backend)

To integrate with a real backend:
1. Update the form action URL in `contact.html`
2. Modify `contact.js` to make actual API calls
3. Add proper error handling and success messages

## 🔄 Maintenance

### Regular Updates
- Check for broken links
- Update copyright year
- Refresh images as needed
- Update company information

### Performance Optimization
- Optimize images (WebP format recommended)
- Minify CSS and JavaScript for production
- Enable compression on web server
- Use CDN for better global performance

## 📄 License

This website recreation is for demonstration purposes. The original Volta Metals Worldwide branding and content belong to their respective owners.

## 🤝 Contributing

To improve this website:
1. Fork the repository
2. Make your changes
3. Test across different browsers and devices
4. Submit a pull request with description of changes

---

**Note**: This is a complete recreation of the original voltametalsworldwide.com website with the same layout, design, and functionality. All pages are fully linked and functional.