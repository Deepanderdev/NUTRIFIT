import React from "react";
import runningIcon from "/images/running1.png";
import yogaIcon from "/images/yoga1.png";
import gymIcon from "/images/exercise.png";
import walkingIcon from "/images/jogging.png";

const ExerciseSuggestions = ({ calories }) => {
  if (!calories) return null;

  // Define exercise activities with their calorie burn rate
  const exercises = [
    { name: "Jog", icon: runningIcon, rate: 378 },
    { name: "Power Yoga", icon: yogaIcon, rate: 223 },
    { name: "Gym Workout", icon: gymIcon, rate: 483 },
    { name: "Brisk Walk", icon: walkingIcon, rate: 294 },
  ];

  return (
    <div className="exercise-container">
      <h4 className="mt-3 mb-4 text-center">
        To burn <strong>{calories}</strong> calories, you will have to:
      </h4>

      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <img src={exercise.icon} alt={exercise.name} width="64" height="64" />
            <div>
              <h5>{exercise.name}</h5>
              <p>
                You will have to {exercise.name.toLowerCase()} for{" "}
                <strong>{Math.round((calories / exercise.rate) * 60)}</strong> minutes.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSuggestions;
