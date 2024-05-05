import React from "react";
import "../../components/en/accounting.css";
import logoFinance from "../assets/bars.png";
import logoBookeeping from "../assets/accountant.png";
import logoTax from "../assets/tax.png";
import logoConsultation from "../assets/consultation.png";
import logoAnalyse from "../assets/analysing.png";

function Accounting() {
  return (
    <div className="container">
      <div className="service">
        <img src={logoFinance} alt="logo finance" className="logo-finance" />
        <h1>Accounting Services</h1>
      </div>
      <p>
        DevAccount Tech Solutions offers a comprehensive range of accounting
        services to help your business maintain strong financial health and
        achieve its financial goals.
      </p>

      <section>
        <div className="service">
          <img src={logoBookeeping} alt="" className="logo-bookeeping" />
          <h2>Bookkeeping and Account Management</h2>
        </div>
        <p>
          We provide professional bookkeeping services to help you track and
          manage your financial transactions effectively. Our team can also help
          you establish budgets, prepare financial reports, and analyze your
          financial data to make informed decisions.
        </p>
      </section>

      <section>
        <div className="service">
          <img src={logoTax} alt="" className="logo-tax" />
          <h2>Income and Tax Filings</h2>
        </div>
        <p>
          We can assist you in preparing and filing your income and tax returns
          in a timely and accurate manner. Our team will ensure that you
          maximize your tax deductions and comply with all applicable tax
          requirements.
        </p>
      </section>

      <section>
        <div className="service">
          <img src={logoConsultation} alt="" className="logo-consultation" />
          <h2>Financial Consultations and Budget Planning</h2>
        </div>
        <p>
          We offer personalized financial consultations to help you plan your
          financial future and achieve your long-term financial goals. Whether
          you are considering investing, expanding your business, or planning
          for retirement, our team can provide you with the advice and
          strategies you need to succeed.
        </p>
      </section>

      <section>
        <div className="service">
          <img src={logoAnalyse} alt="" className="logo-analyse" />
          <h2>Financial Analysis and Customized Reports</h2>
        </div>
        <p>
          We can provide you with in-depth financial analysis and customized
          reports to help you assess the financial performance of your business
          and identify improvement opportunities. Our goal is to provide you
          with the information you need to make informed and proactive decisions
          for your business.
        </p>
      </section>
    </div>
  );
}

export default Accounting;
