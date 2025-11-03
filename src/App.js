// Importation de React
import React from "react";
// Importation des composants de mise en page de Bootstrap
import { Card, Container, Button } from "react-bootstrap";
// Importation des composants enfants
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
// Importation du fichier de style personnalisé
import "./App.css";

// ✅ Déclaration d’une variable pour le prénom (modifiable)
const firstName = "Mourad"; // Change ici si tu veux tester

// ✅ Définition du composant principal de l’application
function App() {
  // Le composant retourne la structure complète de la page
  return (
    <>
      {/* Conteneur principal centré avec Bootstrap */}
      <Container className="mt-5 d-flex justify-content-center">
        {/* Carte Bootstrap affichant les infos du produit */}
        <Card className="product-card" style={{ width: "22rem" }}>
          {/* Affichage de l’image via le composant Image */}
          <Image />
          <Card.Body>
            {/* Titre du produit */}
            <Card.Title>
              <Name />
            </Card.Title>
            {/* Sous-titre affichant le prix */}
            <Card.Subtitle className="mb-3">
              <Price />
            </Card.Subtitle>
            {/* Description du produit */}
            <Card.Text>
              <Description />
            </Card.Text>
            {/* Bouton d’action centré */}
            <div className="text-center">
              <Button variant="primary" className="rounded-pill px-4">
                Ajouter au panier 🛒
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>

      {/* --- SECTION MESSAGE HELLO --- */}
      <div className="hello-section">
        {/* Si un prénom existe, on affiche "Hello, prénom !" et une image */}
        {firstName ? (
          <>
            <h1>Hello, {firstName}!</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
              alt="avatar"
            />
          </>
        ) : (
          // Sinon on affiche un message générique
          <h1>Hello, there!</h1>
        )}
      </div>
    </>
  );
}

// ✅ Exportation du composant principal
export default App;
