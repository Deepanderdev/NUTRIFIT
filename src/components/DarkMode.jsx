import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="form-check form-switch my-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="darkModeSwitch"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="form-check-label" htmlFor="darkModeSwitch">
        Dark Mode
      </label>
    </div>
  );
};

export default DarkModeToggle;
