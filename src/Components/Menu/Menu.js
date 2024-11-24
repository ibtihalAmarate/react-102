import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/home" onClick={toggleSidebar}>Accueil</Link>
            </li>
            <li>
              <Link to="/GraphTemp" onClick={toggleSidebar}>Graph de temperature</Link>
            </li>
            <li>
              <Link to="/GraphHum" onClick={toggleSidebar}>Graph de humidité</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>
    </>
  );
};

export default Menu;
