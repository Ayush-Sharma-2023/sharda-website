import React from 'react';
import './Resources.css';
import { FaBook } from 'react-icons/fa'; // Import an icon (Font Awesome)

function Resources() {
  const classes = Array.from({ length: 12 }, (_, index) => `Class ${index + 1}`); // Generate Class 1 to Class 12

  const handleIconClick = () => {
    // Redirect to the specific 
    window.open("https://ncert.nic.in/textbook/pdf/aemh1dd.zip");
  };

  return (
    <div className="Resource-section" id="Resources">
      <h1 className="Resource-heading">Resources</h1> {/* Heading */}
      <div className="Resource-container">
        {classes.map((className, index) => (
          <div key={index} className="Resource-item">
            <div className="Resource-icon" onClick={handleIconClick} style={{ cursor: "pointer" }}>
              <FaBook size={40} color="#6200ea" /> {/* Icon */}
            </div>
            <p className="Resource-label">{className}</p> {/* Label below the square */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
