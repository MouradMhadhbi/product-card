// Importation des données du produit
import product from "../data/product.js";

// ✅ Définition du composant Price
const Price = () => {
  // Retourne le prix du produit avec un style personnalisé
  return (
    <h5 style={{ color: "#0d6efd", fontWeight: "bold" }}>
      {/* Affichage du symbole + prix */}
      💲 {product.price}
    </h5>
  );
};

// ✅ Exportation du composant
export default Price;
