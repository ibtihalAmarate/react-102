import React from "react";
import Table from "./Table"; // Importe le tableau

const Hometable = () => {
  const data = [
    { id: 1, temperature: "22°C", humidity: "55%" },
    { id: 2, temperature: "25°C", humidity: "60%" },
    { id: 3, temperature: "20°C", humidity: "50%" },
  ];

  return (
    <div>
    
      <Table data={data} /> 
    </div>
  );
};

export default Hometable;
