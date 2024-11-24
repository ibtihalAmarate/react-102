import React from "react";
import { FaThermometerHalf, FaCloudRain } from "react-icons/fa"; // Icônes pour la température et l'humidité
import "./Table.css"; // Styles spécifiques au tableau

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <h2 className="table-title">Température et Humidité</h2>
      <p className="table-description">Suivi de la température et de l'humidité sur une semaine.</p>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <FaThermometerHalf /> Température
            </th>
            <th>
              <FaCloudRain /> Humidité
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.temperature}</td>
              <td>{row.humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
