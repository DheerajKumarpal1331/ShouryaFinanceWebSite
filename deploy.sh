#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building React app..."
npm run build

# Create a temporary directory for deployment
echo "📁 Preparing deployment files..."
rm -rf temp-deploy
mkdir temp-deploy
cp -r build/* temp-deploy/

# Initialize git in temp directory
cd temp-deploy
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Add remote and push to gh-pages branch
echo "🌐 Deploying to GitHub Pages..."
git remote add origin https://github.com/DheerajKumarpal1331/ShouryaFinanceWebSite.git
git branch -M gh-pages
git push -f origin gh-pages

# Clean up
cd ..
rm -rf temp-deploy

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://DheerajKumarpal1331.github.io/ShouryaFinanceWebSite"
