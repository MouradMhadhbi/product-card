// Importation de React pour utiliser la syntaxe JSX
import React from "react";
// Importation de l'objet produit défini dans product.js
import product from "./product";

// ✅ Définition du composant Name
const Name = () => {
  // Le composant retourne le nom du produit sous forme de titre
  return <h3 className="fw-bold">{product.name}</h3>;
};

// ✅ Exportation du composant pour l'utiliser ailleurs (dans App.js)
export default Name;
