import React from 'react';
import './Units.css'; // Import the CSS for styling

function Units({ title }) {
  const units = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]; // Array of unit names

  return (
    <div className="units-section">
      <h1 className="units-heading">{title}</h1> {/* Dynamic title */}
      <div className="units-container">
        {units.map((unit, index) => (
          <div key={index} className="unit-rectangle">
            <p className="unit-text">{unit}</p> {/* Display unit text */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Units;
