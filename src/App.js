// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavigationEn from "./components/en/Navigation";
// import NavigationFr from "./components/en/Navigation";
// import HomeEn from "./components/en/Home";
// import HomeFr from "./components/fr/Home";
// import WebDevelopmentEn from "./components/en/WebDevelopment";
// import WebDevelopmentFr from "./components/fr/WebDevelopment";
// import AccountingEn from "./components/en/Accounting";
// import AccountingFr from "./components/fr/Accounting";
// import AboutEn from "./components/en/About";
// import AboutFr from "./components/fr/About";
// import ContactEn from "./components/en/Contact";
// import ContactFr from "./components/fr/Contact";
// import Footer from "./components/Footer";
// import LanguageSelector from "./components/LanguageSelector";

// function App() {
//   const [language, setLanguage] = useState("fr");
//   return (
//     <>
//       <div>
//         <BrowserRouter basename="/dev-account-tech-solutions">
//           <div>
//             <LanguageSelector language={language} setLanguage={setLanguage} />
//             <NavigationEn />
//             <NavigationFr />
//             <Routes>
//               <Route path="/" element={<HomeEn language={language} />} />
//               <Route path="/" element={<HomeFr language={language} />} />
//               <Route
//                 path="/developmentEn"
//                 element={<WebDevelopmentEn language={language} />}
//               />
//               <Route
//                 path="/developmentFr"
//                 element={<WebDevelopmentFr language={language} />}
//               />
//               <Route
//                 path="/accountingEn"
//                 element={<AccountingEn language={language} />}
//               />
//               <Route
//                 path="/accountingFr"
//                 element={<AccountingFr language={language} />}
//               />
//               <Route
//                 path="/aboutEn"
//                 element={<AboutEn language={language} />}
//               />
//               <Route
//                 path="/aboutFr"
//                 element={<AboutFr language={language} />}
//               />
//               <Route path="/contactEn" element={<ContactEn />} />
//               <Route path="/contactFr" element={<ContactFr />} />
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </div>
//       <Footer language={language} />
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationEn from "./components/en/Navigation";
import NavigationFr from "./components/fr/Navigation";
import HomeEn from "./components/en/Home";
import HomeFr from "./components/fr/Home";
import WebDevelopmentEn from "./components/en/WebDevelopment";
import WebDevelopmentFr from "./components/fr/WebDevelopment";
import AccountingEn from "./components/en/Accounting";
import AccountingFr from "./components/fr/Accounting";
import AboutEn from "./components/en/About";
import AboutFr from "./components/fr/About";
import ContactEn from "./components/en/Contact";
import ContactFr from "./components/fr/Contact";
import FooterEn from "./components/en/Footer";
import FooterFr from "./components/fr/Footer";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <BrowserRouter basename="/dev-account-tech-solutions">
        <div>
          <LanguageSelector language={language} setLanguage={setLanguage} />
          {language === "fr" ? <NavigationFr /> : <NavigationEn />}

          <Routes>
            <Route
              path="/"
              element={language === "fr" ? <HomeFr /> : <HomeEn />}
            />
            <Route
              path="/development"
              element={
                language === "fr" ? <WebDevelopmentFr /> : <WebDevelopmentEn />
              }
            />
            <Route
              path="/accounting"
              element={language === "fr" ? <AccountingFr /> : <AccountingEn />}
            />
            <Route
              path="/about"
              element={language === "fr" ? <AboutFr /> : <AboutEn />}
            />
            <Route
              path="/contact"
              element={language === "fr" ? <ContactFr /> : <ContactEn />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <Footer language={language} /> */}
      {language === "fr" ? <FooterFr /> : <FooterEn />}
    </>
  );
}

export default App;
