import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController
} from 'chart.js';

// Enregistre les composants nécessaires pour le graphique
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, LineController);

const TemperatureGraph = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  // Données brutes avec différents niveaux de granularité
  const rawData = {
    yearly: [
      { year: '2023', value: 18 },
      { year: '2024', value: 22 },
      { year: '2025', value: 24 },
    ],
    monthly: [
      { month: '2024-01', value: 12 },
      { month: '2024-02', value: 15 },
      { month: '2024-03', value: 18 },
      { month: '2024-04', value: 21 },
      { month: '2024-05', value: 25 },
      { month: '2024-06', value: 28 },
    ],
    weekly: [
      { week: '2024-11-01 to 2024-11-07', value: 18 },
      { week: '2024-11-08 to 2024-11-14', value: 20 },
      { week: '2024-11-15 to 2024-11-21', value: 22 },
      { week: '2024-11-22 to 2024-11-28', value: 19 },
    ],
  };

  // État pour le filtre et les données du graphique
  const [filter, setFilter] = useState('yearly'); // 'yearly', 'monthly', 'weekly'
  const [chartData, setChartData] = useState({
    labels: rawData.yearly.map((data) => data.year),
    values: rawData.yearly.map((data) => data.value),
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Crée ou met à jour le graphique
    if (chartRef.current) {
      chartRef.current.data.labels = chartData.labels;
      chartRef.current.data.datasets[0].data = chartData.values;
      chartRef.current.update();
    } else {
      chartRef.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: 'Température (°C)',
              data: chartData.values,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'category',
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartData]);

  // Met à jour les données en fonction du filtre
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);

    if (newFilter === 'yearly') {
      setChartData({
        labels: rawData.yearly.map((data) => data.year),
        values: rawData.yearly.map((data) => data.value),
      });
    } else if (newFilter === 'monthly') {
      setChartData({
        labels: rawData.monthly.map((data) => data.month),
        values: rawData.monthly.map((data) => data.value),
      });
    } else if (newFilter === 'weekly') {
      setChartData({
        labels: rawData.weekly.map((data) => data.week),
        values: rawData.weekly.map((data) => data.value),
      });
    }
  };

  return (
    <div>
      <h2>Graphique de Température</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Filtrer par :{' '}
          <select
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="yearly">Année</option>
            <option value="monthly">Mois</option>
            <option value="weekly">Semaine</option>
          </select>
        </label>
      </div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default TemperatureGraph;
