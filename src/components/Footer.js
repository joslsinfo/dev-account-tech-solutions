// Footer.js

import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <span className="text-muted">
          {/* © 2022 DevAccount Tech Solutions. Tous droits réservés. */}
          {/* © 2024  DevAccount Tech Solutions. All rights reserved. */}
          &copy; {new Date().getFullYear()} DevAccount Tech Solutions. Tous
          droits réservés.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
