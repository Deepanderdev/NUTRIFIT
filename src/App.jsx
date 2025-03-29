import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/Searchbar";
import NutritionTable from "./components/Nutritiontable";
import ExerciseSuggestions from "./components/Exercise";
import RadarChartComponent from "./components/Chart";
import DarkModeToggle from "./components/DarkMode";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Hardcoded Apple Nutrition Data (per 100g)
const defaultNutrition = {
  name: "Apple",
  calories: 52,
  protein: 0.3,
  carbohydrates: 13.8,
  fiber: 2.4,
  sugar: 10.0,
  fat: 0.2,
  saturated_fat: 0.03,
  monounsaturated_fat: 0.01,
  polyunsaturated_fat: 0.05,
  cholesterol: 0,
  sodium: 1,
};

const App = () => {
  const [foodItem, setFoodItem] = useState("");
  const [nutritionData, setNutritionData] = useState(defaultNutrition);
  const [darkMode, setDarkMode] = useState(false);


  const fetchNutrition = async (query) => {
    try {
      const response = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
        {
          headers: { "X-Api-Key": 'FTNDeqn0JTvkClxw/SC3+w==Ba17jcR86UYacQqJ' },
        }
      );
      console.log("API Response:", response.data);
      if (response.data.items.length > 0) {
        setNutritionData(response.data.items[0]); 
      } else {
        alert("No nutrition data found!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <div className="container py-4">
        
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        
        <div className="text-center">
          <img src="/images/logo2.png" width="200" height="200" alt="Logo" />
        </div>

        
        <div className="mt-3">
          <SearchBar setFoodItem={setFoodItem} fetchNutrition={fetchNutrition} />
        </div>

        
        {nutritionData && (
          <>
            <h1 className="text-center mt-3">
              {nutritionData.name} has <strong>{nutritionData.calories} Calories</strong>
            </h1>

            
            <div className="row mt-4">
              
              <div className="col-md-6">
                <NutritionTable nutritionData={nutritionData} />
              </div>

              
              <div className="col-md-6">
                <ExerciseSuggestions calories={nutritionData.calories} />
              </div>
            </div>

           
            <div className="mt-4">
              <RadarChartComponent data={nutritionData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
