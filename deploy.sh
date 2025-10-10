#!/bin/bash
set -e

echo "🏗️  Building and exporting Next.js…"
cd frontend

# Install deps if node_modules is missing (optional but handy)
if [ ! -d node_modules ]; then
  if command -v pnpm >/dev/null; then pnpm install
  elif command -v yarn >/dev/null; then yarn
  else npm ci || npm install
  fi
fi

# Build + Export (creates frontend/out/)
npm run build

# Sanity check
if [ ! -d out ]; then
  echo "❌ Export failed: frontend/out not found."
  echo "Make sure next.config has: output: 'export'"
  exit 1
fi

echo "📦 Copying exported files to repo root…"
cd ..

# Copy files manually to preserve important root files
cp -r frontend/out/_next .
cp -r frontend/out/assets .
cp -r frontend/out/case-studies .
cp frontend/out/*.html .
cp frontend/out/*.txt .
cp frontend/out/robots.txt .
cp frontend/out/sitemap.xml .

# Keep custom domain and disable Jekyll on GH Pages
echo "groveline.ai" > CNAME
touch .nojekyll

# Cache busting: update sitemap timestamp to force CDN refresh
if [ -f sitemap.xml ]; then
  TIMESTAMP=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
  sed -i.bak "s|<lastmod>.*</lastmod>|<lastmod>$TIMESTAMP</lastmod>|g" sitemap.xml
  rm -f sitemap.xml.bak
  echo "🔄 Updated sitemap timestamps for cache busting"
fi

echo "✅ Build complete!"
echo "Next steps:"
echo "  git status"
echo "  git commit -m \"deploy: $(date -u +'%Y-%m-%d %H:%M:%SZ')\""
echo "  git push origin main"
