// Page1.js
import React from "react";
import { Link } from "react-router-dom";
import './Page1.css'; // Fichier de styles pour la page d'accueil

const Page1 = () => {
  return (
    <div className="page1-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>Bienvenue sur IoT Monitor</h1>
          <p>Surveillez les données de température et d'humidité en temps réel avec notre application IoT moderne.</p>
          <Link to="/home">
            <button className="cta-button">Commencer</button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <h3>Suivi en Temps Réel</h3>
          <p>Visualisez les données de température et d'humidité en temps réel.</p>
        </div>
        <div className="feature-item">
          <h3>Graphiques Dynamiques</h3>
          <p>Suivez l'évolution des données sur des graphiques interactifs.</p>
        </div>
        <div className="feature-item">
          <h3>Alertes Personnalisées</h3>
          <p>Recevez des alertes en fonction des seuils de température et d'humidité.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 IoT Monitor. Tous droits réservés.</p>
        <div>
          <a href="/contact">Contact</a> | <a href="/about">À propos</a>
        </div>
      </footer>
    </div>
  );
};

export default Page1;
