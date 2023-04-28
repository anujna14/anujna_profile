import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="overlay"></div>
      <div className="headerContent">
        <h1>Hi! I am Anujna</h1>
        <p>
          Frontend Software Developer <span>|</span> ReactJs Developer
        </p>
      </div>
      <div className="scrollDown">
        <a href="#about">
          <span className="scrollArrow"></span>
          <span className="scrollArrow"></span>
          <span className="scrollArrow"></span>
        </a>
      </div>
    </div>
  );
};

export default Header;
