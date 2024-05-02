import React from "react";

function LanguageSelector({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <div className="language-selector d-flex justify-content-end">
      <button className="btn btn-secondary" onClick={toggleLanguage}>
        {language === "fr" ? "English" : "Français"}
      </button>
    </div>
  );
}

export default LanguageSelector;
