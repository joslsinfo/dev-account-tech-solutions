import React from "react";
import "../../components/en/webDevelopment.css";
import programming from "../assets/programmingpng.png";
import development from "../assets/developmentpng.png";
import developperatwork from "../assets/developperatwork.jpg";

function WebDevelopment() {
  return (
    <div className="container">
      <div className="web-programming">
        <img src={programming} alt="" className="programming" />
        <h1>Web Development</h1>
      </div>
      <h2>Welcome to DevAccount Tech Solutions!</h2>
      {/* <p>
        We are a team of passionate web development professionals dedicated to
        providing innovative technological solutions to meet your business
        needs. With deep expertise in web development and a client-focused
        approach, we are here to help you achieve digital success.
      </p> */}
      <div className="dev">
        <img src={developperatwork} alt="" className="img-dev" />
        <p>
          We are a team of passionate web development professionals dedicated to
          providing innovative technological solutions to meet your business
          needs. With deep expertise in web development and a client-focused
          approach, we are here to help you achieve digital success.
        </p>
      </div>

      <hr />
      <div className="service">
        <img src={development} alt="" className="development" />
        <h2>Our Services</h2>
      </div>
      <p>
        At DevAccount Tech Solutions, we offer a comprehensive range of web
        development services tailored to your specific needs. Whether you are a
        startup looking for an online presence, an SME eager to modernize your
        existing website, or a large enterprise seeking to develop a complex web
        application, we have the skills and experience to support you at every
        stage of your project.
      </p>
      <ul>
        Our services include:
        <li>Custom website design and development.</li>
        <li>Custom web application development.</li>
        <li>System and database integration.</li>
        <li>Website performance and security optimization.</li>
        <li>Migrating and upgrading existing platforms.</li>
        <li>Developing responsive and mobile-friendly websites.</li>
      </ul>
      <hr />
      <h2>Our Approach</h2>
      <p>
        At DevAccount Tech Solutions, we believe in a collaborative and
        transparent approach to every project we undertake. We start by
        carefully listening to your needs and goals, then work closely with you
        at every stage of the development process to ensure that we meet your
        expectations and deliver outstanding results.
      </p>
      <hr />
      <ul>
        <h3>Why Choose Us</h3>
        <li>
          Technical Expertise: Our team has deep expertise in the latest and
          most advanced web development technologies.
        </li>
        <li>
          Personalized Approach: We are committed to providing customized
          solutions that specifically address the unique needs of your business.
        </li>
        <li>
          Commitment to Quality: We are dedicated to delivering products of the
          highest quality, with particular attention to usability, performance,
          and security.
        </li>
        <li>
          Customer Satisfaction: Our clients' satisfaction is our top priority.
          We work tirelessly to ensure that our clients are fully satisfied with
          our services and products.
        </li>
      </ul>
      <hr />
      <h2>Ready to Take Action?</h2>
      <p>
        Do you have a web development project in mind? We would love to discuss
        how we can help you bring it to life. Contact us today for a free quote
        or to schedule a consultation.
      </p>
    </div>
  );
}

export default WebDevelopment;
