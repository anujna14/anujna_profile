import React from "react";
import "./Education.css";
import { FaUserGraduate, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <div className="educationContainer">
      <h1>Education</h1>
      <div className="cardContainer">
        <div class="card" data-label="2015- 2019">
          <div class="card__container">
            <h4 class="card__header">
              <span>
                <FaUserGraduate />
              </span>
              Bachelor of Engineering
            </h4>
            <h4 class="card__header">
              <span>
                <FaUniversity />
              </span>
              Canara Engineering College
            </h4>

            <p class="card__body">
              I pursued my engineering in Electronics and Communication from Canara College of Engineering, Mangalore. I have overall CGPA of 7.68 in
              my bachelor's degree.
            </p>
          </div>
        </div>
        <div class="card" data-label="2013-2015">
          <div class="card__container">
            <h4 class="card__header">
              <span>
                <FaUserGraduate />
              </span>
              Pre-University
            </h4>
            <h4 class="card__header">
              <span>
                <FaUniversity />
              </span>
              Vidyarashmi Vidyalaya, Puttur
            </h4>

            <p class="card__body">I completed class XI and XII in science stream from Vidyarashmi Vidyalaya, Puttur(PU Board) with 80%.</p>
          </div>
        </div>
        <div class="card" data-label="2010-2013">
          <div class="card__container">
            <h4 class="card__header">
              <span>
                <FaUserGraduate />
              </span>
              High School
            </h4>
            <h4 class="card__header">
              <span>
                <FaUniversity />
              </span>
              Vidyarashmi Vidyalaya, Puttur
            </h4>

            <p class="card__body">I completed high school from Vidyarashmi Vidyalaya, Puttur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
