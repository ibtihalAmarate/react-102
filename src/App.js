// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu"; // Importe ton composant Menu
import Hometable from "./Components/Contenue/Hometable"; // Page de tableau
import TemperatureGraph from "./Components/Contenue/TemperatureGraph"; // Graphique température
import HumidityGraph from "./Components/Contenue/HumidityGraph"; // Graphique humidité
import Page1 from "./Components/Pages/Page1"; // Page1 sans le menu

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route vers Page1 sans le menu */}
        <Route path="/" element={<Page1 />} />

        {/* Routes avec le menu */}
        <Route
          path="/home"
          element={
            <div className="page-container">
              <Menu /> {/* Affiche le menu sur toutes les pages sauf Page1 */}
              <Hometable /> {/* Page tableau */}
            </div>
          }
        />
        <Route
          path="/GraphTemp"
          element={
            <div className="page-container">
              <Menu /> {/* Affiche le menu sur toutes les pages sauf Page1 */}
              <TemperatureGraph /> {/* Graphique température */}
            </div>
          }
        />
        <Route
          path="/GraphHum"
          element={
            <div className="page-container">
              <Menu /> {/* Affiche le menu sur toutes les pages sauf Page1 */}
              <HumidityGraph /> {/* Graphique humidité */}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
