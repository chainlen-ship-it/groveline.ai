#!/bin/bash

# Groveline.ai Deployment Script
# This script builds the Next.js site and deploys to GitHub Pages

set -e  # Exit on any error

echo "🏗️  Building Next.js site..."
cd frontend
npm run build

echo "📦 Copying build files to root..."
cd ..
cp -r frontend/out/* .

echo "📝 Staging changes..."
git add -A

echo "✅ Build complete! Now run:"
echo "   git status"
echo "   git commit -m \"your message\""
echo "   git push origin main"
