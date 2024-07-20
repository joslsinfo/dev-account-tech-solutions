import React from "react";
import logoWeb from "../../components/assets/world-wide-web.png";
import logoFinance from "../../components/assets/bars.png";
import image5 from "../../components/assets/image5.png";
import "../../components/en/home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to DevAccount Tech Solutions</h1>
      <img src={image5} alt="" className="image5" />

      <p>
        We are your trusted partner for web development and accounting needs.
        Our company is committed to providing innovative and reliable solutions
        to meet your specific requirements.
      </p>

      <section>
        <div className="service">
          <img src={logoWeb} alt="" className="logo-web" />
          <h2>Web Development</h2>
        </div>
        <p>
          We offer a comprehensive range of web development services to help
          your business thrive online. Whether you need a custom website, a
          complex web application, or e-commerce solutions, our team of experts
          is here to support you at every step of the process.
        </p>
        <p>
          Explore our web development services to discover how we can help bring
          your ideas to life online:
        </p>
        <ul>
          <li>Custom website design and development</li>
          <li>Custom web application development</li>
          <li>System and database integration</li>
          <li>Website performance and security optimization</li>
        </ul>
        <p>
          Whatever your web development needs, we are here to help you succeed
          online.
        </p>
      </section>

      <section>
        <div className="service">
          <img src={logoFinance} alt="logo finance" className="logo-finance" />
          <h2>Accounting</h2>
        </div>
        <p>
          In addition to our web development services, we also offer
          comprehensive accounting services to support the growth and success of
          your business. Our team of accounting professionals can help you
          effectively manage your finances and make informed decisions for the
          future of your business.
        </p>
        <p>
          Explore our accounting services to discover how we can help maintain
          strong financial health:
        </p>
        <ul>
          <li>Bookkeeping and account management</li>
          <li>Income and tax filings</li>
          <li>Financial consultations and budget planning</li>
          <li>Financial analysis and customized reports</li>
        </ul>
        <p>
          With our expertise in web development and accounting, we are ready to
          be your trusted partner in the growth and success of your business.
        </p>
      </section>
    </div>
  );
};

export default Home;
