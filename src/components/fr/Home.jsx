import React from "react";
import "../../components/fr/home.css";
import logoWeb from "../../components/assets/world-wide-web.png";
import logoFinance from "../../components/assets/bars.png";

function Home() {
  return (
    <div className="container">
      <h1>Bienvenue chez DevAccount Tech Solutions</h1>
      <p>
        Nous sommes votre partenaire de confiance pour vos besoins en
        développement web et en comptabilité. Notre entreprise s'engage à
        fournir des solutions innovantes et fiables pour répondre à vos
        exigences spécifiques.
      </p>

      <section>
        <div className="service">
          <img src={logoWeb} alt="" className="logo-web" />
          <h2>Développement Web</h2>
        </div>
        <p>
          Nous offrons une gamme complète de services de développement web pour
          aider votre entreprise à prospérer en ligne. Que vous ayez besoin d'un
          site web sur mesure, d'une application web complexe ou de solutions
          e-commerce, notre équipe d'experts est là pour vous accompagner à
          chaque étape du processus.
        </p>
        <p>
          Explorez nos services de développement web pour découvrir comment nous
          pouvons vous aider à concrétiser vos idées en ligne :
        </p>
        <ul>
          <li>Conception et développement de sites web sur mesure</li>
          <li>Développement d'applications web personnalisées</li>
          <li>Intégration de systèmes et de bases de données</li>
          <li>
            Optimisation de la performance et de la sécurité des sites web
          </li>
        </ul>
        <p>
          Quels que soient vos besoins en développement web, nous sommes là pour
          vous aider à réussir en ligne.
        </p>
      </section>

      <section>
        <div className="service">
          <img src={logoFinance} alt="logo finance" className="logo-finance" />
          <h2>Comptabilité</h2>
        </div>
        <p>
          En plus de nos services de développement web, nous proposons également
          des services comptables complets pour soutenir la croissance et la
          réussite de votre entreprise. Notre équipe de professionnels de la
          comptabilité peut vous aider à gérer efficacement vos finances et à
          prendre des décisions éclairées pour l'avenir de votre entreprise.
        </p>
        <p>
          Explorez nos services comptables pour découvrir comment nous pouvons
          vous aider à maintenir une santé financière solide :
        </p>
        <ul>
          <li>Tenue de livres et gestion des comptes</li>
          <li>Déclarations de revenus et de taxes</li>
          <li>Consultations financières et planification budgétaire</li>
          <li>Analyses financières et rapports personnalisés</li>
        </ul>
        <p>
          Avec notre expertise en développement web et en comptabilité, nous
          sommes prêts à être votre partenaire de confiance dans la croissance
          et le succès de votre entreprise.
        </p>
      </section>
    </div>
  );
}

export default Home;

// ***********************************************************************************
// Version anglaise

// import React from "react";

// function Home() {
//   return (
//     <div className="container">
//       <h1>Welcome to DevAccount Tech Solutions</h1>
//       <p>
//         We are your trusted partner for web development and accounting needs.
//         Our company is committed to providing innovative and reliable solutions
//         to meet your specific requirements.
//       </p>

//       <section>
//         <h2>Web Development</h2>
//         <p>
//           We offer a comprehensive range of web development services to help
//           your business thrive online. Whether you need a custom website, a
//           complex web application, or e-commerce solutions, our team of experts
//           is here to support you at every step of the process.
//         </p>
//         <p>
//           Explore our web development services to discover how we can help bring
//           your ideas to life online:
//         </p>
//         <ul>
//           <li>Custom website design and development</li>
//           <li>Custom web application development</li>
//           <li>System and database integration</li>
//           <li>Website performance and security optimization</li>
//         </ul>
//         <p>
//           Whatever your web development needs, we are here to help you succeed
//           online.
//         </p>
//       </section>

//       <section>
//         <h2>Accounting</h2>
//         <p>
//           In addition to our web development services, we also offer
//           comprehensive accounting services to support the growth and success of
//           your business. Our team of accounting professionals can help you
//           effectively manage your finances and make informed decisions for the
//           future of your business.
//         </p>
//         <p>
//           Explore our accounting services to discover how we can help maintain
//           strong financial health:
//         </p>
//         <ul>
//           <li>Bookkeeping and account management</li>
//           <li>Income and tax filings</li>
//           <li>Financial consultations and budget planning</li>
//           <li>Financial analysis and customized reports</li>
//         </ul>
//         <p>
//           With our expertise in web development and accounting, we are ready to
//           be your trusted partner in the growth and success of your business.
//         </p>
//       </section>
//     </div>
//   );
// }

// export default Home;
