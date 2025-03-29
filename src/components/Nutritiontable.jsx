import React from "react";

const NutritionTable = ({ nutritionData }) => {
  return (
    <div className="custom-table-container">
      <div className="custom-table">
        <h2>Nutrition Facts (Per 100g)</h2>
        <div className="nutrient-item">
          Calories: <span className="float-end">{nutritionData.calories} kcal</span>
        </div>
        <div className="nutrient-item">
          Protein: <span className="float-end">{nutritionData.protein} g</span>
        </div>
        <div className="nutrient-item">
          Carbohydrates: <span className="float-end">{nutritionData.carbohydrates} g</span>
        </div>
        <div className="nutrient-item">
          Fiber: <span className="float-end">{nutritionData.fiber} g</span>
        </div>
        <div className="nutrient-item">
          Sugar: <span className="float-end">{nutritionData.sugar} g</span>
        </div>
        <div className="nutrient-item">
          Fat: <span className="float-end">{nutritionData.fat} g</span>
        </div>
        <div className="nutrient-item">
          Saturated Fat: <span className="float-end">{nutritionData.saturated_fat} g</span>
        </div>
        <div className="nutrient-item">
          Monounsaturated Fat: <span className="float-end">{nutritionData.monounsaturated_fat} g</span>
        </div>
        <div className="nutrient-item">
          Polyunsaturated Fat: <span className="float-end">{nutritionData.polyunsaturated_fat} g</span>
        </div>
        <div className="nutrient-item">
          Cholesterol: <span className="float-end">{nutritionData.cholesterol} mg</span>
        </div>
        <div className="nutrient-item">
          Sodium: <span className="float-end">{nutritionData.sodium} mg</span>
        </div>
      
      </div>
    </div>
  );
};

export default NutritionTable;
