# RFB Malaysia Website

Corporate landing page for RFB Malaysia Sdn. Bhd., built from static HTML fragments and deployed on Vercel. Solutions include telecom infrastructure technology and custom web apps/PWAs for membership organisations.

## Project Structure

```text
rfb-malaysia-website/
├── public/                 # Static site and reusable HTML sections
│   ├── index.html          # Main landing page
│   ├── header.html         # Header/navigation
│   ├── hero.html           # Hero section
│   ├── about.html           # Company background and leadership
│   ├── services.html       # Services section
│   ├── expertise.html      # Expertise section
│   ├── clients.html         # Clients and technology partners
│   ├── contact.html        # Contact details and inquiry form
│   ├── footer.html         # Footer
│   └── assets/
│       ├── css/
│       │   └── input.css   # Tailwind source CSS
│       └── ...             # Logos and page imagery
├── data/
│   └── database.json       # Organization and service data
├── api/
│   └── data.js             # Serverless function endpoint
├── package.json            # Node.js dependencies and build scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vercel.json             # Vercel routing configuration
└── README.md               # Project overview
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build Tailwind CSS:
   ```bash
   npm run build
   ```

3. Or run the Tailwind watcher during development:
   ```bash
   npm run dev
   ```

## Deployment

1. Push the repository to GitHub.
2. Import it into Vercel or Netlify.
3. The platform will detect `package.json`, build the CSS, and serve the static site from `public/` with API support from `api/`.
