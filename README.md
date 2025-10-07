# 🌲 Groveline.ai

**Fractional COO & Operations Support for Emerging and Mid-Sized Managers**

A professional Next.js website with forest theme styling, showcasing allocator-ready operations consulting services.

🔗 **Live Site:** [https://groveline.ai](https://groveline.ai)
📅 **Book a Call:** [Calendly](https://calendly.com/chris-groveline)
💼 **LinkedIn:** [Chris Hainlen](https://www.linkedin.com/in/chainlen/)

---

## 🚀 Project Structure

```
groveline.ai/
├── frontend/          # Next.js application
│   ├── app/          # App router pages & components
│   │   ├── components/     # Reusable components (Header, Footer)
│   │   ├── case-studies/   # Case study pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles with forest theme
│   ├── public/       # Static assets
│   │   └── assets/   # Images, logos, icons
│   ├── package.json
│   ├── tailwind.config.ts
│   └── next.config.js
├── old/              # Legacy static site (for reference)
└── README.md
```

---

## 🎨 Design System

### Forest Theme Colors
- **Primary Green:** `#228B22` (forest)
- **Dark Green:** `#2c5f2d` (grove)
- **Sage Green:** `#8FBC8F` (sage)
- **Light Green:** `#e8f5e8` (mist)
- **Background:** `#f0f7f0` (morning)

### Features
- ✅ Responsive design (mobile-first)
- ✅ Dark mode support
- ✅ Professional header with sticky navigation
- ✅ Forest-themed cards and badges
- ✅ SEO optimized with Open Graph tags
- ✅ Static site generation (SSG)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Custom CSS Variables
- **TypeScript:** Full type safety
- **Deployment:** GitHub Pages (static export)

---

## 📦 Getting Started

### Install Dependencies
\`\`\`bash
cd frontend
npm install
\`\`\`

### Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000)

### Build for Production
\`\`\`bash
npm run build
\`\`\`

### Preview Production Build
\`\`\`bash
npm start
\`\`\`

---

## 🚢 Deployment

### Quick Deploy Workflow (Recommended)

When you make content changes, use the automated deploy script:

\`\`\`bash
# 1. Make your edits to files in frontend/app/
# 2. Run the deploy script
./deploy.sh

# 3. Review what changed
git status

# 4. Commit your changes
git commit -m "Update content"

# 5. Push to GitHub
git push origin main
\`\`\`

**What `deploy.sh` does:**
- Builds the Next.js site (`npm run build`)
- Copies static files from `frontend/out/*` to repository root
- Stages all changes (`git add -A`)
- Leaves you ready to commit and push

### Manual Deployment Steps

If you prefer to deploy manually:

1. **Build the static site:**
   \`\`\`bash
   cd frontend
   npm run build
   cd ..
   \`\`\`

2. **Copy build output to root:**
   \`\`\`bash
   cp -r frontend/out/* .
   \`\`\`

3. **Commit and push:**
   \`\`\`bash
   git add -A
   git status
   git commit -m "Your commit message"
   git push origin main
   \`\`\`

### GitHub Pages Configuration

- **Repository:** [github.com/yourusername/groveline.ai](https://github.com)
- **Source:** Deploy from branch `main`, root directory `/`
- **Custom Domain:** `groveline.ai` (configured via `CNAME` file)
- **Files:** `.nojekyll` prevents Jekyll processing

### DNS Configuration (GoDaddy)

Already configured:
- A records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- CNAME for `www` → `groveline.ai`
- HTTPS enabled in GitHub Pages settings

---

## 📚 Content Structure

### Pages
- **Homepage** (`/`) - Hero, stats, featured projects, CTA
- **Case Studies** (`/case-studies`) - Index of all case studies with insights
- **Individual Case Studies:**
  - GMAM Risk Approval System
  - BBT Option Expiry Automation
  - Institutional vs Pragmatic Launches
  - Allocator Platform (Anonymized)
  - Founder-Led Equity Fund (Anonymized)

### Components
- `Header.tsx` - Navigation with logo, links, CTA button
- `Footer.tsx` - Contact info, social links, copyright

---

## 🗑️ Cleanup Notes

**Can I remove `/old` before git?**

✅ **Yes, you can safely remove the `/old` directory** once you've verified that:
1. All assets have been copied to `frontend/public/assets/`
2. All case studies content has been migrated to Next.js pages
3. The new site builds successfully (`npm run build` ✓)
4. You've reviewed that nothing important is missing

The `/old` directory was only used as a reference during migration. The new Next.js site in `/frontend` is complete and ready to deploy.

---

## 📬 Contact

If you know a manager who is close to a raise but missing key operational pieces:
👉 Book directly at [Calendly](https://calendly.com/chris-groveline)
👉 Or connect on [LinkedIn](https://www.linkedin.com/in/chainlen/)

---

© 2025 Groveline Advisor Services. All rights reserved.
