import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../components/assets/logo-dev-account-tech-solutions-logo.jpg";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success nav-color">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div style={{ marginLeft: "22px" }}>
            <img
              src={logo}
              alt="DevAccount Tech Solutions Logo"
              className="logo mr-2 img-fluid"
              // style={{ maxWidth: "100px" }}
            />
            <div>
              <div className="logo-text">DevAccount Tech Solutions</div>
              {/* <div className="text-muted">
                Là où la technologie rencontre l'expertise financière.
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
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/development" onClick={toggleMenu}>
                Développement
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accounting" onClick={toggleMenu}>
                Comptabilité
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleMenu}>
                À propos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleMenu}>
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h2 className="text-center">
        "Là où la technologie rencontre l'expertise financière."
      </h2>
    </>
  );
}

export default Navigation;
