import React from 'react';
import './AboutUs.css';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <h1 className="about-heading fade-in">About Us</h1>
        <hr className="about-purple-line fade-in" />
        <p className="about-description fade-in delay">
          This website is for college students to share resources, collaborate, and access a variety of study materials. Our platform offers a collection of educational content that supports the learning journey of students across different fields of study.  
        </p> <br />
        <p className="about-description fade-in delay">
          Students can easily find and contribute materials such as textbooks, video tutorials, notes, and practice problems. With a simple, user-friendly interface, it’s easier than ever to engage with educational content and stay on top of your academic goals.  
        </p><br />
        <p className="about-description fade-in delay">
          Our mission is to create a collaborative space where college students can empower each other by sharing knowledge and resources. Join us in building a community focused on academic success, growth, and learning. Together, we can support each other on the path to excellence.  
        </p>
      </div>
    </div>
  );
};

export default About;
