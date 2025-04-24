#!/bin/bash

echo "🚀 Nettoyage du dossier dist/"
rm -rf dist .astro

echo "🔧 Build Astro..."
astro build

echo "🧩 Copie du dossier _astro dans public/"
cp -R dist/_astro public/

echo "📝 Ajout des fichiers au suivi Git"
git add public/_astro .nojekyll CNAME public/* src/* package.json astro.config.* tailwind.config.* tsconfig.* --all

echo "✅ Commit des modifications"
git commit -m "🚀 Déploiement avec correction CSS (_astro)"

echo "📦 Push vers gh-pages"
git push origin main

echo "🎉 Terminé. Vérifie le site en ligne."