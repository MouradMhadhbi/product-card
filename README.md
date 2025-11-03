# 🛍️ React Product Card

## 🎯 Objectif
Créer une application React affichant un produit sous forme de carte avec des composants séparés.

## 🚀 Installation
```bash
git clone https://github.com/MouradMhadhbi/product-card.git
cd product-card
npm install
npm start
```

---

## 📁 Structure
```text
src/
│
├── components/                 ← 📁 Dossier contenant les composants React
│   ├── Name.js                 ← Affiche le nom du produit
│   ├── Price.js                ← Affiche le prix du produit
│   ├── Description.js          ← Affiche la description du produit
│   └── Image.js                ← Affiche l’image du produit
│
├── data/                       ← 📁 Dossier pour les données du produit
│   └── product.js              ← Contient l’objet JSON exporté
│
├── App.js                      ← 🧩 Composant racine de l’application React
├── App.css                     ← 🎨 Feuille de style principale
├── index.js                    ← 🚀 Point d’entrée qui monte <App /> dans le DOM
└── index.css                   ← 🌍 Styles globaux (facultatif)

```
---

## 🧩 Fonctionnalités

- Utilisation de React Components

- Importation d’un objet JSON

- Utilisation de react-bootstrap pour la mise en page

- Affichage conditionnel du message et de l’image selon le prénom

---

## 🖼️ Exemple de rendu

Une carte élégante affichant le produit, suivie d’un message :
```text
Hello, Mourad!
```