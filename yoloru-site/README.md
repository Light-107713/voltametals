# YOLORU — Artist Website

A modern, responsive, single-page site for international hip-hop artist YOLORU. Built with vanilla HTML/CSS/JS for easy hosting anywhere.

## Preview locally

```bash
# 1) Open the folder
cd /workspace/yoloru-site

# 2) Serve (choose one)
# Using Python
python3 -m http.server 8080
# Or using Node (if installed)
npx serve -p 8080 --single --yes
```

Then visit http://localhost:8080

## Customize
- Branding: Update the inline SVG logo in `index.html` and the theme colors in `styles.css`.
- Socials: Replace `#` links in the hero and contact sections with real profile URLs.
- Music: In `index.html` under `#music`, set each track button `data-src` to your audio file/stream URLs.
- Video: Replace the YouTube `iframe` `src` with your official video.
- Tour: Update `tourData` in `app.js` with real dates, venues, and ticket links.
- Gallery: Replace placeholder figures in `#gallery` with `<img>` tags and real images in an `assets/` folder.
- Merch: Connect to your store platform or replace buttons with purchase links.
- EPK: Point the "Download EPK" button to a hosted ZIP/PDF.
- Contact/Newsletter: Hook the forms to your backend or a service like Formspree, Airtable, or Zapier.

## SEO
- Edit meta tags in `index.html` (title, description, Open Graph, Twitter).
- Update the JSON-LD schema with the correct public URLs in the `sameAs` array.

## Deploy
- Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3+CloudFront.
- Ensure assets paths (e.g., `/assets/...`) exist or use relative paths.

## License
This template is provided "as is". Replace all placeholder text and media with your own content before publishing.