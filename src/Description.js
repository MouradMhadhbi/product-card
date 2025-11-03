// Importation de React
import React from "react";
// Importation de l’objet JSON du produit
import product from "./product";

// ✅ Définition du composant Description
const Description = () => {
  // Retourne la description du produit avec une couleur discrète
  return <p className="text-muted">{product.description}</p>;
};

// ✅ Exportation du composant
export default Description;
