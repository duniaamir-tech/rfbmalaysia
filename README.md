# Serverless Tailwind Website Template

A modern, production-ready website template structured for GitHub and serverless deployment (Vercel / Netlify).

## Project Structure

```text
website_project/
├── public/                 # Public HTML folder (static assets & index.html)
│   ├── index.html          # Main landing page with Tailwind & JSON fetch
│   └── assets/
│       └── css/
│           └── input.css   # Tailwind source CSS
├── data/
│   └── database.json       # Centralized JSON database
├── api/
│   └── data.js             # Serverless function endpoint
├── package.json            # Node.js dependencies and build scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vercel.json             # Serverless routing configuration
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
   Or run the Tailwind watcher during development:
   ```bash
   npm run dev
   ```

## Deployment on GitHub & Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel or Netlify.
3. The platform will automatically detect `package.json`, build the Tailwind styles, and serve static pages from `public/` alongside serverless API routes in `api/`.
