import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_te691sa",
        "template_68pt75r",
        form.current,
        "ljx51Sf9QIG1iDX2l"
      )
      .then(
        (result) => {
          // Code pour gérer la soumission réussie du formulaire
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          // Code pour gérer l'échec de la soumission du formulaire
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="your_name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="your_email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-secondary">
        Send
      </button>
    </form>
  );
};
export default Contact;
