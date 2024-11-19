import React, { useState, useRef } from 'react';
import './Resources.css';
import { FaBook } from 'react-icons/fa'; // Import an icon (Font Awesome)
import Units from '../Units/Units'; // Import the Units component

function Resources() {
  const semesters = Array.from({ length: 8 }, (_, index) => `Semester ${index + 1}`); // Generate Semester 1 to Semester 8
  const [visible, setVisible] = useState(false); // Track visibility of Units section
  const [selectedSemester, setSelectedSemester] = useState(''); // Track the selected semester
  const unitsRef = useRef(null); // Reference for Units section

  const handleIconClick = (semester) => {
    setSelectedSemester(semester); // Set the selected semester
    setVisible(true); // Show the Units section
    setTimeout(() => {
      // Scroll to the Units section after rendering
      unitsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className="Resource-section" id="Resources">
      <h1 className="Resource-heading">Resources</h1> {/* Heading */}
      <div className="Resource-container">
        {semesters.map((semester, index) => (
          <div key={index} className="Resource-item">
            <div
              className="Resource-icon"
              onClick={() => handleIconClick(semester)}
              style={{ cursor: 'pointer' }}
            >
              <FaBook size={40} color="#6200ea" /> {/* Icon */}
            </div>
            <p className="Resource-label">{semester}</p> {/* Label */}
          </div>
        ))}
      </div>
      {/* Render the Units section below all the semesters */}
      {visible && (
        <div className="Units-wrapper" ref={unitsRef}>
          <Units title={selectedSemester} />
        </div>
      )}
    </div>
  );
}

export default Resources;
