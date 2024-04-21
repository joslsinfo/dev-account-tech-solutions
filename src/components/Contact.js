// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// function Contact() {
//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
//         publicKey: "YOUR_PUBLIC_KEY",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   // Définir les états pour les champs du formulaire
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   // Fonction pour gérer la soumission du formulaire
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Envoyer les données du formulaire à votre backend ou traiter les données localement
//     console.log("Nom :", name);
//     console.log("E-mail :", email);
//     console.log("Message :", message);
//     // Réinitialiser les champs du formulaire après soumission
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="container">
//       <h1 className="mt-5 mb-4">Contactez-nous</h1>
//       <form onSubmit={handleSubmit} ref={form} onSubmit={sendEmail}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Nom :
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             E-mail :
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="message" className="form-label">
//             Message :
//           </label>
//           <textarea
//             className="form-control"
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Envoyer
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_te691sa",
//         "template_68pt75r",
//         form.current,
//         "ljx51Sf9QIG1iDX2l"
//       )
//       .then(
//         (result) => {
//           // Code pour gérer la soumission réussie du formulaire
//           console.log("SUCCESS!", result.text);
//         },
//         (error) => {
//           // Code pour gérer l'échec de la soumission du formulaire
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="your_name" />
//       <label>Email</label>
//       <input type="email" name="your_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
// export default Contact;

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
