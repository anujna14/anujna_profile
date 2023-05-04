import React from "react";
import "./History.css";

const History = () => {
  return (
    <div className="historyContainer">
      <h1>Work History </h1>
      <div class="historyLayoutContainer">
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>BrightLine-Web</h3>
            <span></span>
            <p>
              Brightline is a website where a user can book their train ticket to move from one place to another via online. And also, Brightline
              provides some other Education facilities which can also be booked by the user.
              <br />
              <strong>Responsibilities </strong>
              <br />
              <strong>Process </strong>
              Implement new features in Application. Working on bug fix and new features added to the website <br />
              <strong>Environment/Tools </strong> ReactJs, Tailwind CSS, Jira, Problem solving
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Cookpad</h3>
            <span></span>
            <p>
              This is a simple responsive website for fetching the recipes and popular recipes using the spoonacular API. Also, it provides a facility
              to add your favourite recipe to the favourite list...<br/>
              <strong> Responsibilities </strong>
              <br />
              <strong>Process </strong>
              Designing and development frontend Application <br/>
              <strong>Environment/Tools:</strong> React-JS, Heroku, GitHub, Communication skill
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>React Weather APP</h3>
            <span></span>
            <p>
              A responsive weather app built with React , Redux, SASS. Uses the Google Maps API to search for locations and autocompletion, and the
              OpenWeather API to retrieve weather data. Also provides the weather information for the every 3hr. It also provides the weather
              information of the day. <br/>
              <strong>Website URL</strong> https://main--radiant-salmiakki- 589b90.netlify.app/ <br/>
              <strong>Responsibilities</strong>
              <br />
              <strong>Process </strong> Designing and development frontend Application.<br/>
              <strong>Environment/Tools </strong> React-JS, netlify, sass, Git
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Shopping cart-app</h3>
            <p>
              This an E-commerce website where you can do an online shopping.<br/>
              <strong>Website Url</strong> https://new-shopping-cart-app-2.vercel.app/cart <br/>
              <strong>Responsibilities</strong> <br/>
              <strong>Process </strong> Designing and development frontend Application Environment/Tools: NextJS, Vercel, Tailwind CSS
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3> Recipe-app</h3>
            <span></span>
            <p>
              This project helps to find the Recipe of the different dishes, Once the login is successful.<br/>
              <strong>Responsibilities </strong> <br/>
              <strong>Process </strong> Designing and development frontend Application. <br/>
              <strong>Environment/Tools </strong> React-JS, Firebase, Cascading Style Sheets(CSS), HTML 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
