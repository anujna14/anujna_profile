import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="skillsHeading">
        <h1>Professional Skills</h1>
        <p>My Primary skills are HTML5, CSS3, Javascript, TailwindCss and ReactJS.</p>
      </div>
      <div className="skills">
        <div class="skill">
          <div class="skill-name">HTML</div>
          <div class="skill-percentage" per="75%" style={{ maxWidth: "75%" }}></div>
          <div class="stripesLoader" style={{ backgroundSize: "180%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">CSS</div>
          <div class="skill-percentage" per="72%" style={{ maxWidth: "72%" }}></div>
          <div class="stripesLoader" style={{ backgroundSize: "178%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">Javascript</div>
          <div class="skill-percentage" per="67%" style={{ maxWidth: "67%" }}></div>
          <div class="stripesLoader" style={{ backgroundSize: "150%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">ReactJs</div>
          <div class="skill-percentage" per="67%" style={{ maxWidth: "67%" }}></div>
          <div class="stripesLoader" style={{ backgroundSize: "150%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">GitHub</div>
          <div class="skill-percentage" per="65%" style={{ maxWidth: "65%" }}></div>
          <div class="stripesLoader" style={{ backgroundSize: "150%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">TailwindCss</div>
          <div class="skill-percentage" per="60%" style={{ maxWidth: "60%" }}></div>
          <div class="stripesLoader" style={{ backgroundSize: "140%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
