import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../components/assets/logo-dev-account-tech-solutions-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div style={{ marginLeft: "22px" }}>
            <img
              src={logo}
              alt="DevAccount Tech Solutions Logo"
              className="logo mr-2 img-fluid"
              // style={{ maxWidth: "70px"}}
            />
            <div>
              <div className="logo-text">DevAccount Tech Solutions</div>
              {/* <div className="text-muted">
                Where Technology Meets Finance Expertise
              </div> */}
            </div>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/development" onClick={toggleMenu}>
                Development
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accounting" onClick={toggleMenu}>
                Accounting
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h2 className="text-center">
        "Where Technology Meets Finance Expertise"
      </h2>
    </>
  );
};

export default Navigation;
