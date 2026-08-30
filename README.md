# DataHelix

Minimal Next.js (App Router, TypeScript) site for DataHelix consulting.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (GitHub + Vercel, as its own separate project)

1. Create a new, empty repo on GitHub (e.g. `datahelix`). Do not add a README/gitignore there, this folder already has them.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/datahelix.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new, click "Import Git Repository", and select the new repo. This is a separate Vercel project from your existing site, it won't touch it.
4. Vercel auto-detects Next.js, leave the defaults, click Deploy.
5. You'll get a free `datahelix.vercel.app` URL immediately. To use your own domain, go to the project's Settings → Domains and add it there, then update the DNS records at your domain registrar as Vercel instructs.

## Before publishing

Two placeholders are still in the page, search for the class `placeholder` in `app/page.tsx`, or just look for the orange text in the browser:
- The email in the Contact section
- Your location in the Background section
- The domain line in the footer
