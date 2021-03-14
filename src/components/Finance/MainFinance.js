import React from "react";
import PaymentDues from "./Dues/PaymentDues";
import PaymentReminders from "./Reminders/PaymentReminders";
import { TransactionsTable } from "./TransactionTable/TransactionsTable";
import { Container, Row, Col } from "react-bootstrap";
import "./MainFinance.css";
// import Routes from './components/Routes';
// import Header from './components/Header/Header';
// react-bootstrap here

const MainFinance = () => {
  return (
    <div className="container_main">
    <h3 className='header'>Finance</h3>
      <div className="transaction">
        <TransactionsTable />
      </div>
      <hr style={{ border: "1px solid #384259", width: "98vw" }} noshade="" />

      <div id="remainder">
        <h3 className="transaction_h3">Reminders</h3>
        <PaymentReminders />
      </div>
      <div id="due">
        <h3 className="transaction_h3">Dues</h3>
        <PaymentDues />
      </div>
    </div>
  );
};

export default MainFinance;
