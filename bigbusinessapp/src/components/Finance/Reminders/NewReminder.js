import React, { useState } from "react";

const NewReminder = ({ onSaveReminder }) => {
  const [name, setName] = useState("");
  const [transtype, setTransType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a name!");
      return;
    }
    onSaveReminder({ name, amount, date });
    setName("");
    setAmount("");
    setDate("");
    console.log(transtype);
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={onSubmit}>
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <label className="col-2.5">
            Name :{" "}
            <span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a Business Name."
              />
            </span>{" "}
          </label>
        </div>
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <label className="col-2.5">Transaction Type:</label>
          <label className="col-2">
            Receive :{" "}
            <span>
              <input
                type="radio"
                value={transtype}
                onChange={(e) => setTransType(e.target.value)}
              />
            </span>
          </label>{" "}
          <label className="col-8">
            Pay :{" "}
            <span>
              <input type="radio" />
            </span>
          </label>
        </div>
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <label className="col-2.5">
            Amount :{" "}
            <span>
              {" "}
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter a Amount."
              />
            </span>
          </label>
        </div>
        <div className="row">
          <label>
            Date :{" "}
            <span>
              {" "}
              <input
                type="Date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Pick a Date."
              />
            </span>
          </label>
        </div>
        <input
          className="row btn btn-primary"
          type="submit"
          name="Add"
          value="Save Reminder"
        />
      </form>
    </div>
  );
};

export default NewReminder;
