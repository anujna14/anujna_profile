import React from "react";
import ProfilePhoto from "../assets/profilePhoto.JPG";
import "./About.css";
import { FaUserCircle, FaGithubSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";
const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="aboutHeading">
        <h1>About</h1>
        <p>I am a Front End Developer</p>
      </div>
      <div className="aboutContent">
        <div className="aboutProfileImage">
          <img src={ProfilePhoto} alt="profile-pic" width={150} height={150} className="profilePhoto" />
        </div>
        <div className="aboutDescription">
          <p>
            As a focused and dedicated software engineer with 3.8 years of experience in programming, I have provided high-impact web solutions for
            various projects and clients. My expertise lies in developing and implementing new software programs using HTML, CSS, JavaScript, and Git.
            I have worked on a variety of projects, including e-commerce websites and responsive applications using APIs like Google Maps and Open
            Weather. My responsibilities have included designing and developing the frontend applications, debugging and testing new features, and
            collaborating with team members to brainstorm innovative ideas.
          </p>
        </div>
      </div>
      <div className="aboutInfo">
        <div className="aboutIcon">
          <FaUserCircle color="#f99417" fontSize="32px" />
        </div>
        <div className="aboutInfoColoumn">
          <div className="leftInfo">
            <p>Name</p>
            <p>Date of Birth</p>
            <p>Place of Birth</p>
            <p>Nationality</p>
          </div>
          <div className="rightInfo">
            <p>Anujna A Rai</p>
            <p>14th December, 1996</p>
            <p>Mangalore</p>
            <p>Indian</p>
          </div>
        </div>
        <div className="aboutButton">
          <a href="#contact">
            {" "}
            <button className="btn-1">Get In Touch ?</button>
          </a>

          <a href={Resume} download>
            {" "}
            <button className="btn-2">Get My CV ?</button>
          </a>
        </div>
        <div className="socialMediaIcons">
          <div>
            <a rel="noreferrer" href="https://www.linkedin.com/in/anujna-rai-n-002106152/" target="_blank">
              <FaGithubSquare color="#f99417" fontSize="25px" />
            </a>
          </div>
          <div>
            <a rel="noreferrer" href="" target="_blank">
              <FaFacebook color="#f99417" fontSize="25px" />
            </a>
          </div>
          <div>
            <a rel="noreferrer" href="https://github.com/anujna14" target="_blank">
              <FaLinkedin color="#f99417" fontSize="25px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
