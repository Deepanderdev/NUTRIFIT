import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const ChartComponent = ({ data }) => {
  // Default Apple nutrition data
  const defaultData = {
    name: "Apple",
    calories: 95,
    protein: 0.5,
    fat: 0.3,
    carbohydrates: 25,
  };

  // Use provided data or default Apple data
  const chartData = [
    { name: "Calories", value: data?.calories || defaultData.calories, color: "#FF6384" },
    { name: "Protein", value: data?.protein || defaultData.protein, color: "#36A2EB" },
    { name: "Fat", value: data?.fat || defaultData.fat, color: "#FFCE56" },
    { name: "Carbs", value: data?.carbohydrates || defaultData.carbohydrates, color: "#4BC0C0" },
  ];

  return (
    <div className="chart-container mt-4">
      <h3 className="text-center">Nutritional Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
