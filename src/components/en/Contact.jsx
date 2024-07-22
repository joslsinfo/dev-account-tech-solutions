import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        form.current,
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        (result) => {
          toast.success("Your message has been sent successfully !");
          // Code pour gérer la soumission réussie du formulaire
          console.log("SUCCESS!", result.text);
          // Réinitialiser le formulaire après l'envoi réussi
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          toast.error("An error has occurred. please try again later.");
          // Code pour gérer l'échec de la soumission du formulaire
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail} className="container mt-5">
        <h1>Contact</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="your_name"
            className="form-control"
            required
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
            required
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
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
    </>
  );
};
export default Contact;
