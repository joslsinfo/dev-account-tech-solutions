import React, { useState } from "react";

function Contact() {
  // Définir les états pour les champs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire à votre backend ou traiter les données localement
    console.log("Nom :", name);
    console.log("E-mail :", email);
    console.log("Message :", message);
    // Réinitialiser les champs du formulaire après soumission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom :
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message :
          </label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
