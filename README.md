# Robot Genie — AI & Digital Marketing Institute Website

A modern, high-performance, and responsive official website for **Robot Genie**, an AI-powered career training institute based in Laxmi Nagar, Delhi. The institute specializes in practical digital marketing education, search engine optimization (SEO), generative AI automation tools, and data analytics.

Built strictly with clean semantic **HTML5**, modern **CSS3**, and lightweight **Vanilla JavaScript** (zero heavy external frameworks or dependencies), optimized for **Lighthouse 90+** scores, full accessibility (WCAG AA), and comprehensive technical SEO.

---

## 🚀 Features

- **SEO & Search Visibility**:
  - Unique `<title>` (under 60 characters) and `<meta name="description">` (under 160 characters) on every page.
  - Keyword targeting: *"digital marketing course in Delhi"*, *"SEO training"*, *"AI tools course"*, *"Robot Genie"*.
  - Standardized canonical URLs, Open Graph (`og:*`), and Twitter Card (`twitter:*`) metadata.
  - Dynamic XML Sitemap (`sitemap.xml`) and search engine crawler instructions (`robots.txt`).
  - Custom vector brand Favicon (`assets/favicon.svg`).
- **Rich Structured Data (JSON-LD)**:
  - **Home**: `EducationalOrganization` with full contact details, physical address, and social links.
  - **Home FAQ**: `FAQPage` schema reflecting exact questions and answers.
  - **Courses**: Google-compliant `Course` schema for each of the 6 specialization tracks.
  - **Contact**: `LocalBusiness` schema with geographical coordinates, address, and weekly operating hours.
  - **About**: `AboutPage` schema linking to the parent organization.
- **Lighthouse 90+ Performance & Accessibility**:
  - Google Fonts preconnected (`preconnect` to `fonts.googleapis.com` & `fonts.gstatic.com`) with `display=swap`.
  - Zero render-blocking `@import` statements inside CSS stylesheets.
  - Zero Cumulative Layout Shift (CLS) with explicit `width` and `height` dimensions on all vector images and icons.
  - Native `loading="lazy"` on all below-the-fold graphics and iframes.
  - High-contrast color palette exceeding WCAG AA standards (`#4f46e5` indigo, `#06b6d4` cyan, `#0f172a` deep slate).
  - Prominent `:focus-visible` keyboard focus indicators and hidden skip navigation links (`.skip-link`).
  - Accessible form controls with `<label for="...">`, ARIA alerts, and accessible names.
- **Responsive Layout & Mobile First**:
  - Fluid mobile navigation drawer with animated hamburger toggle.
  - Smooth interactive FAQ accordion.
  - Real-time client-side form validation for contact enquiries and seat reservations.
  - Tabbed course filtering system (All, Marketing, Data, Business, AI).
  - Floating WhatsApp chat launcher that intelligently collapses on mobile screens (< 640px).

---

## 📁 File Structure

```text
Robot-Genie-Website/
├── assets/
│   ├── favicon.svg             # Custom Robot Genie SVG favicon
│   ├── hero-illustration.svg   # Hero section vector workspace illustration
│   ├── icon-ai-tools.svg       # AI Tools & Automation course icon
│   ├── icon-career.svg         # Career / Placement pathway icon
│   ├── icon-data.svg           # Data Science & Analytics course icon
│   ├── icon-diploma.svg        # Digital Marketing Diploma course icon
│   ├── icon-expert-trainers.svg# Expert Trainers feature icon
│   ├── icon-finance.svg        # Finance & Financial Modelling icon
│   ├── icon-hr.svg             # HR Management course icon
│   ├── icon-learn.svg          # Pathway Step 1 (Learn) icon
│   ├── icon-live-projects.svg  # Live Projects feature icon
│   ├── icon-marketing.svg      # Advanced Digital Marketing icon
│   ├── icon-mission.svg        # Mission card graphic
│   ├── icon-placement.svg      # Placement support icon
│   ├── icon-portfolio.svg      # Portfolio building icon
│   ├── icon-practice.svg       # Hands-on practice icon
│   ├── icon-vision.svg         # Vision card graphic
│   ├── icon-whatsapp.svg       # WhatsApp brand mark
│   ├── robot-logo.svg          # Primary Robot Genie brand logo (light navbar)
│   └── robot-logo-dark.svg     # Primary Robot Genie brand logo (dark footer)
├── css/
│   └── style.css               # Unified design system & responsive styling
├── js/
│   └── main.js                 # Vanilla JS: drawer, accordion, filters, forms
├── 404.html                    # Friendly 404 error page with quick links
├── about.html                  # About Us: story, mission, approach & outcomes
├── contact.html                # Contact Us: details, enquiry form & Google Map
├── courses.html                # Courses: 6 tracks, category tabs & syllabus
├── index.html                  # Homepage: hero, tracks, USPs, process, FAQ
├── robots.txt                  # Robots crawler directives with sitemap pointer
├── sitemap.xml                 # Search engine XML sitemap
├── vercel.json                 # Vercel configuration (clean URLs enabled)
├── .gitignore                  # Git ignore rules for IDE & temporary files
└── README.md                   # Project documentation & deployment manual
```

---

## 🛠️ Local Development & Testing

You can preview the website locally using any standard static file server:

### Using Python:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your web browser.

### Using Node.js / npx:
```bash
npx serve .
```

---

## 🌐 Deployment Instructions

### 1. GitHub Deployment

1. **Verify your local git status**:
   ```bash
   git status
   ```

2. **Create a new repository on GitHub** (e.g. `robot-genie-website`).

3. **Link your remote repository and push**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/robot-genie-website.git
   git push -u origin main
   ```

---

### 2. Vercel Deployment

#### Option A: Via Vercel Dashboard (Recommended)
1. Sign in to [Vercel](https://vercel.com).
2. Click **Add New...** &rarr; **Project**.
3. Import your GitHub repository (`robot-genie-website`).
4. Keep the default settings (Framework Preset: *Other*, Root Directory: `./`).
5. Click **Deploy**. Vercel will automatically detect `vercel.json` and configure clean routing URLs.

#### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## ⚙️ Post-Deployment Customization Checklist

Once your site is live on Vercel or your custom domain:

1. **Update Placeholder URLs**:
   Replace `https://YOUR-VERCEL-URL.vercel.app` with your actual live URL (e.g. `https://robotgenie.in` or `https://robot-genie.vercel.app`) in the following files:
   - `robots.txt` (line 4)
   - `sitemap.xml` (all `<loc>` tags)
   - `index.html` (canonical, Open Graph, Twitter cards, JSON-LD)
   - `about.html` (canonical, Open Graph, Twitter cards, JSON-LD)
   - `courses.html` (canonical, Open Graph, Twitter cards, JSON-LD)
   - `contact.html` (canonical, Open Graph, Twitter cards, JSON-LD)
   - `404.html` (canonical, Open Graph, Twitter cards)
2. **Update Contact Details & Links**:
   - Phone: `+91-9891707129`
   - Email: `contact@robotgenie.in`
   - WhatsApp link: Update target number in `https://wa.me/919891707129` if different.
   - Social Media URLs: Point social icon links to your official institute handles.
3. **Form Backend (Optional)**:
   - Connect `#enquiry-form` and `#reserve-form` to Formspree, Basin, Web3Forms, or your CRM webhook endpoint.
4. **Google Search Console**:
   - Submit `https://<YOUR-DOMAIN>/sitemap.xml` to Google Search Console to initiate immediate indexing.

---

## 📄 License
&copy; 2026 Robot Genie. All rights reserved.
