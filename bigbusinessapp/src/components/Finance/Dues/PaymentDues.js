import React from "react";
import { useState } from "react";
import "./Dues.css";

const PaymentDues = () => {
  const [redata] = useState([
    {
      id: 0,
      name: "Bb",
      amount: "2300",
      date: "09/01/2021",
    },
    {
      id: 1,
      name: "Cc",
      amount: "6559",
      date: "15/01/2021",
    },
  ]);
  return (
    <div className="dues">
      <h3>Dues List:</h3>
      <p>{redata.id}</p>
      {redata.map((task, index) => (
        <div
          key={index}
          style={{
            border: "1px groove #384259",
            margin: "0px 0px 10px 0px",
            justifyContent: "space-between",
            width: "fit-content",
          }}
        >
          <h5>Name :{task.name}</h5>
          <p>Amount :{task.amount} </p>
          <p>Date :{task.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PaymentDues;
