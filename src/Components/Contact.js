import React from "react";
import "./Contact.css";
import { FaPhoneSquareAlt, FaCopyright, FaLinkedin, FaGithubSquare, FaUserFriends, FaFacebook } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contantInfo">
        <h1>Contact</h1>
        <h3>I'd Love To Hear From You</h3>
        <p>You can reach out to me by any means of communication. I will be happy to hear from you.</p>
      </div>
      <div className="footerInfo">
        <div>
          <span>
            <ImLocation2 />
          </span>
          <h4>Address</h4>
          <p>Puttur, Mangalore, Karnataka</p>
        </div>
        <div>
          <span>
            <FaPhoneSquareAlt />
          </span>
          <h4>call</h4>
          <p>+91 9901806470</p>
        </div>
        <div>
          <span>
            <MdEmail />
          </span>
          <h4>Email</h4>
          <p>anujnarai1396@gmail.com</p>
        </div>
        <div>
          <span>
            <FaUserFriends />
          </span>
          <h4>Social Networks</h4>
          <div className="socialMediaIconsContact">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaGithubSquare />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>
          <span style={{padding: "12px", fontSize: "19px"}}>
            {" "}
            <FaCopyright fontSize="12px" />
          </span>
          Copyright Anujna 2023 | Design by Anujna
        </p>
      </div>
    </div>
  );
};

export default Contact;
