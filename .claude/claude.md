# Groveline.ai Project Documentation

## Project Overview
Professional Next.js website for Groveline Advisor Services - fractional COO and operations consulting for emerging investment managers.

**Live Site:** https://groveline.ai
**Repository:** GitHub Pages deployment from main branch

---

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router) with static export
- **Styling:** Tailwind CSS + Custom CSS Variables (forest theme)
- **TypeScript:** Full type safety
- **Deployment:** GitHub Pages (static site generation)

### Theme
- **Primary Colors:**
  - Forest: `#228B22`
  - Grove: `#2c5f2d`
  - Sage: `#8FBC8F`
  - Mist: `#e8f5e8`
  - Morning: `#f0f7f0`
- **Dark mode:** Fully supported via CSS variables

### Analytics & SEO
- **Google Analytics:** G-BC515SS1FE
- **SEO:** Open Graph tags, Twitter Cards, Schema.org structured data
- **Sitemap:** Auto-generated at /sitemap.xml
- **Robots.txt:** Configured for search engines

---

## Project Structure

```
groveline.ai/
├── .claude/                    # Claude Code documentation
├── frontend/                   # Next.js application source
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx     # Navigation with Groveline G logo
│   │   │   ├── Footer.tsx     # Contact info, social links
│   │   │   ├── GoogleAnalytics.tsx
│   │   │   └── StructuredData.tsx
│   │   ├── case-studies/
│   │   │   ├── page.tsx       # Case studies index
│   │   │   ├── gmam/page.tsx
│   │   │   ├── bbt/page.tsx
│   │   │   ├── allocator-platform/page.tsx
│   │   │   ├── founder-equity/page.tsx
│   │   │   └── institutional-vs-pragmatic/page.tsx
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Forest theme CSS
│   ├── public/
│   │   ├── assets/            # Images, logos, icons
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── out/                   # Build output (gitignored in frontend/)
│   └── [config files]
├── [root build files]         # Copied from frontend/out/ for GitHub Pages
├── deploy.sh                  # Deployment automation script
├── .nojekyll                  # Prevents Jekyll processing
├── CNAME                      # Custom domain: groveline.ai
└── README.md
```

---

## Content Strategy

### Homepage Sections
1. **Hero** - Value proposition: "60% of traditional costs"
2. **Why Choose Groveline** - Big stats (60%, 2 funds, 300+ ODD)
3. **The Challenge** - Problem statement for emerging managers
4. **How We Deliver** - 4 pillars:
   - Modular Vendor Architecture
   - Smart Audit & Service Provider Selection
   - AI-Enhanced Operations
   - Allocator-Informed Design
5. **What We Build** - 6 service cards
6. **Track Record** - Merewether & Kiski case studies with results
7. **Final CTA** - Contact info and calls to action

### Case Studies
- **GMAM** - Trade approval system with SQL/Excel
- **BBT** - Option expiry automation
- **Institutional vs Pragmatic** - Fund launch strategies
- **Allocator Platform** - $200M institutional allocation (anonymous)
- **Founder Equity** - $150M fund launch (anonymous)

### Key Messaging
- Cost savings: 60% vs traditional vendors
- Proven track record: $350M+ raised
- Allocator expertise: 300+ ODD reviews
- Specific examples: Athena OMS + GRA (67% savings), BDO vs Big 4 (60% savings)

---

## Deployment Workflow

### Quick Deploy (Recommended)
```bash
# 1. Edit files in frontend/app/
# 2. Run deploy script
bash deploy.sh

# 3. Review changes
git status

# 4. Commit
git commit -m "Your message"

# 5. Push
git push origin main
```

### What deploy.sh Does
1. Builds Next.js site (`cd frontend && npm run build`)
2. Copies build output to root (`cp -r frontend/out/* .`)
3. Stages all changes (`git add -A`)

### Manual Deployment
```bash
cd frontend
npm run build
cd ..
cp -r frontend/out/* .
git add -A
git status
git commit -m "Your message"
git push origin main
```

### Important Notes
- **Static files must be at repository root** for GitHub Pages
- Source files in `frontend/app/` don't deploy automatically
- Must rebuild and copy every time you change content
- GitHub Pages serves from `/` (root directory)

---

## GitHub Pages Configuration

### Repository Settings
- **Source:** Deploy from branch `main`, directory `/` (root)
- **Custom Domain:** groveline.ai (configured via CNAME file)
- **HTTPS:** Enforced (automatic via GitHub)

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

This setup allows GitHub Pages to handle SSL for both `groveline.ai` and `www.groveline.ai`.

### Special Files
- **.nojekyll** - Prevents GitHub from using Jekyll to process the site
- **CNAME** - Contains `groveline.ai` to configure custom domain

---

## Development

### Local Development
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000

### Build for Production
```bash
cd frontend
npm run build
```
Output: `frontend/out/`

### Preview Production Build
```bash
cd frontend
npm start
```

---

## Key Email & Contact Info
- **Email:** chris@groveline.ai
- **Phone:** 903-605-6399
- **LinkedIn:** https://www.linkedin.com/in/chainlen
- **Calendly:** https://calendly.com/chris-groveline

---

## Common Issues & Solutions

### Issue: Changes not appearing on live site
**Cause:** Forgot to rebuild and copy to root, or browser cache
**Solution:**
1. Run `bash deploy.sh`
2. Commit and push
3. Hard refresh browser (Ctrl+Shift+R)
4. Wait 2-5 minutes for GitHub Pages CDN

### Issue: Case study pages showing 404
**Cause:** Files not properly structured for Next.js App Router
**Solution:** Each route needs `[route-name]/page.tsx` structure

### Issue: www subdomain SSL error
**Cause:** DNS CNAME not pointing to GitHub Pages
**Solution:** Set www CNAME to `chainlen-ship-it.github.io`

### Issue: Deploy script not running
**Cause:** Windows line endings (CRLF)
**Solution:** Run commands manually or use `bash deploy.sh`

---

## Analytics

### Google Analytics Setup
- **Tracking ID:** G-BC515SS1FE
- **Component:** `frontend/app/components/GoogleAnalytics.tsx`
- **Loaded in:** `frontend/app/layout.tsx`

### Key Metrics to Track
- Homepage visits
- "Schedule Discovery Call" clicks
- Case study page views
- Time on site
- Bounce rate

---

## Future Enhancements

### Potential Additions
- Blog/insights section
- Downloadable resources (whitepapers, guides)
- Client testimonials section
- Video case studies
- Interactive cost calculator
- Live chat integration

### Technical Improvements
- Implement ISR (Incremental Static Regeneration) if moving off GitHub Pages
- Add MDX support for easier content management
- Implement automated testing
- Add performance monitoring (Web Vitals)

---

## Version History

### v2.0 (Current) - Value-Focused Redesign
- Complete homepage redesign with 60% cost savings messaging
- Added "Why Choose Groveline" stats section
- Built "How We Deliver" 4-pillar framework
- Added Track Record section with Merewether & Kiski
- More positive, benefit-focused tone throughout
- Fixed case study routing structure

### v1.0 - Initial Launch
- Next.js migration from static HTML
- Forest theme implementation
- Google Analytics integration
- SEO optimization with Schema.org
- Case studies content migration
- GitHub Pages deployment setup
