import React from "react";

const SearchBar = ({ setFoodItem, fetchNutrition }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search the food Blud?"
        onChange={(e) => setFoodItem(e.target.value)}
      />
      <button className="search-button" onClick={fetchNutrition}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
