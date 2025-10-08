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

- **Framework:** Next.js 14 (App Router) with static export
- **Styling:** Tailwind CSS + Custom CSS Variables (forest theme)
- **TypeScript:** Full type safety
- **Analytics:** Google Analytics 4 (G-BC515SS1FE)
- **SEO:** Open Graph, Twitter Cards, Schema.org structured data
- **Deployment:** GitHub Pages (static site generation)

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

**A Records (for apex domain @):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record (for www subdomain):**
```
Type: CNAME
Name: www
Value: chainlen-ship-it.github.io
```

**Note:** The www CNAME points to GitHub Pages directly, which handles SSL for both `groveline.ai` and `www.groveline.ai`. GitHub automatically redirects www to the apex domain.

---

## 📚 Content Structure

### Homepage Sections (v2.0 - Value-Focused)
1. **Hero** - Value proposition: "60% of traditional costs"
2. **Why Choose Groveline** - Big stats (60% savings, 2 funds, 300+ ODD)
3. **The Challenge** - Problem statement for emerging managers
4. **How We Deliver** - 4 pillars:
   - Modular Vendor Architecture
   - Smart Audit & Service Provider Selection
   - AI-Enhanced Operations
   - Allocator-Informed Design
5. **What We Build** - 6 service cards
6. **Track Record** - Merewether & Kiski case studies with specific results
7. **Final CTA** - Contact info and calls to action

### Case Studies
- **GMAM** (`/case-studies/gmam`) - Trade approval system with SQL/Excel
- **BBT** (`/case-studies/bbt`) - Option expiry automation
- **Institutional vs Pragmatic** (`/case-studies/institutional-vs-pragmatic`) - Fund launch strategies
- **Allocator Platform** (`/case-studies/allocator-platform`) - $200M institutional allocation
- **Founder Equity** (`/case-studies/founder-equity`) - $150M fund launch

### Components
- `Header.tsx` - Navigation with Groveline G logo
- `Footer.tsx` - Contact info, social links, copyright
- `GoogleAnalytics.tsx` - GA4 tracking (G-BC515SS1FE)
- `StructuredData.tsx` - Schema.org SEO markup

### Key Messaging
- **Cost savings:** 60% vs traditional vendors
- **Track record:** $350M+ raised across 2 funds
- **Expertise:** 300+ operational due diligence reviews
- **Specific examples:**
  - Athena OMS + GRA: 67% savings vs bundled packages
  - BDO audit: 60% savings vs Big 4

---

## 🔧 Troubleshooting

### Changes not appearing on live site
**Cause:** Forgot to rebuild and copy to root, or browser/CDN cache
**Solution:**
1. Run `bash deploy.sh` (or manual build + copy steps)
2. Commit and push changes
3. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Wait 2-5 minutes for GitHub Pages CDN to update
5. Try incognito/private window to bypass cache

### Case study pages showing 404
**Cause:** Files not properly structured for Next.js App Router
**Solution:** Each route needs to be in its own directory with `page.tsx`:
```
frontend/app/case-studies/
├── page.tsx                    # /case-studies
├── gmam/page.tsx              # /case-studies/gmam
└── bbt/page.tsx               # /case-studies/bbt
```

### www subdomain SSL certificate error
**Cause:** DNS CNAME not pointing to GitHub Pages
**Solution:**
- Set www CNAME to `chainlen-ship-it.github.io` (not `groveline.ai`)
- GitHub Pages will handle SSL for both domains
- Wait 10-30 minutes for DNS propagation

### Deploy script not running (`./deploy.sh`)
**Cause:** Windows line endings (CRLF) or file permissions
**Solution:**
- Use `bash deploy.sh` instead
- Or run commands manually (see Manual Deployment Steps above)

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
