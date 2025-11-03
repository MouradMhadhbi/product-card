// Importation de React
import React from "react";
// Importation des informations du produit
import product from "./product";

// ✅ Définition du composant Image
const Image = () => {
  // Retourne l’image du produit avec un style responsive
  return (
    <img
      // Source de l'image provenant de l'objet product
      src={product.image}
      // Texte alternatif si l'image ne se charge pas
      alt={product.name}
      // Classe Bootstrap pour la mise en forme
      className="card-img-top"
      // Style inline pour la taille et le recadrage
      style={{ height: "250px", objectFit: "cover" }}
    />
  );
};

// ✅ Exportation du composant
export default Image;
