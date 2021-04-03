<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import ReceiverDetailsForm from "./ReceiverDetailsForm";
import ItemDetailsForm from "./ItemDetailsForm";
import ItemDetailsTable from "./ItemDetailsTable";
import getDetails from "./InvoicePDF";
import * as loader from "@revolist/revo-dropdown/loader";
import firebase from "../../containers/Firebase";
import Header1 from "../Header1/Header1";
import Sidebar from "../Sidebar/Sidebar";
=======
import React, { useState } from "react";
import "./css/Invoice.css";
import getDetails from "./InvoicePDF";
import ItemDetailsForm from "./ItemDetailsForm";
import ItemDetailsTable from "./ItemDetailsTable";
import ReceiverDetailsForm from "./ReceiverDetailsForm";
>>>>>>> b6eb4aad29809b1d3f6d528da08002b0d35403d2

export const InvoiceContext = React.createContext();

const Invoice = () => {
  const receiverSchema = {
    id: 0,
    name: "",
    address: "",
    email: "",
    mobile: "",
    gstin: "",
    IncludeGST: true,
    region: "",
  };
<<<<<<< HEAD
  let [inventoryItems, setInventoryItems] = useState([]);
  useEffect(() => {
    firebase.database
      .ref("Users/uid1")
      .child("inventory")
      .on("value", function (snapshot) {
        let json = snapshot.val();
        let keys = Object.keys(json);
        let vals = Object.values(json);
        for (let i = 0; i < keys.length; i++) {
          vals[i].id = keys[i];
        }
        setInventoryItems(vals);
      });
  }, []);
  const [receiver, setReceiver] = useState(receiverSchema);
  const dropdowns = document.querySelectorAll("revo-dropdown");
  for (var q = 0; q < dropdowns.length; q++) {
    dropdowns[q].source = inventoryItems;
  }
=======
  const [receiver, setReceiver] = useState(receiverSchema);
>>>>>>> b6eb4aad29809b1d3f6d528da08002b0d35403d2

  const itemSchema = {
    id: -9999,
    name: "",
    quantity: 1,
    rate: 1,
  };
  const [item, setItem] = useState(itemSchema);

  const sampleItemInputs = [];
  const [itemInputs, setInputs] = useState(sampleItemInputs);

  const [formEmpty, setFormEmpty] = useState(false);

  const handleReceiverChange = (newReceiver) => {
    setReceiver({ ...receiver, ...newReceiver });
  };

  const handleItemChange = (newItem) => {
    setItem({ ...item, ...newItem });
  };

  const handleItemInputsAdd = () => {
    if (
      item.name !== "" &&
      item.name !== null &&
      item.name.length !== 0 &&
      item.name !== " "
    ) {
      itemInputs.push({ ...item, id: Math.random() });
      setItem(itemSchema);
    }
  };

  const handleItemInputsDelete = (id) => {
    setInputs(itemInputs.filter((item) => item.id !== id));
  };

  const handleItemInputsEdit = (id) => {
    const itemSelected = itemInputs.find((arrayItem) => arrayItem.id === id);
    setItem(itemSelected);
    setInputs(itemInputs.filter((arrayItem) => arrayItem.id !== id));
  };

  const generateInvoice = () => {
    if (
      receiver.name !== "" &&
      receiver.email !== "" &&
      receiver.mobile !== "" &&
      receiver.gstin !== "" &&
      itemInputs.length !== 0
    ) {
      let InvoiceId = String(Math.random()).substring(2, 14);
      let d = new Date();
      let CreationDate = `${d.getDate()}-${
        d.getMonth() + 1
      }-${d.getFullYear()}`;

      getDetails({ InvoiceId, CreationDate, receiver, itemInputs });
      setFormEmpty(false);
    } else setFormEmpty(true);
  };

  const InvoiceContextValue = {
    handleReceiverChange,
    handleItemChange,
    handleItemInputsAdd,
    handleItemInputsDelete,
    handleItemInputsEdit,
  };

<<<<<<< HEAD
  return (
    <InvoiceContext.Provider value={InvoiceContextValue}>
      <Header1 />
      <Sidebar />
      <ReceiverDetailsForm receiver={receiver} />
      <ItemDetailsForm item={item} />

      <ItemDetailsTable itemInputs={itemInputs} />
      <button
        style={{
          margin: "20px",
          padding: "5px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => generateInvoice()}
      >
        Generate Invoice as PDF
      </button>
      <div>
        {formEmpty &&
          setTimeout(() => {
            setFormEmpty(false);
          }, 5000) && <p>PLEASE FILL RECEIVER DETAILS AND ITEM DETAILS FORM</p>}
=======
  const [GST, setGST] = useState(true);

  return (
    <InvoiceContext.Provider value={InvoiceContextValue}>
      <div id="main_container">
        <div id="container">
          <div id="receiver_details_container">
            <ReceiverDetailsForm receiver={receiver} />
          </div>
          <div id="item_details_container">
            <ItemDetailsForm item={item} />
          </div>
          <label htmlFor="gst">
            <input
              type="checkbox"
              name="gst"
              id="gst"
              checked={GST}
              onChange={() => {
                setGST(GST ? false : true);
                handleReceiverChange({ IncludeGST: GST });
              }}
            />
            Include GST
          </label>
          <button
            id="generate_invoice--button"
            onClick={() => generateInvoice()}
          >
            Generate Invoice as PDF
          </button>
          <ItemDetailsTable itemInputs={itemInputs} />
          <>
            {formEmpty &&
              setTimeout(() => {
                setFormEmpty(false);
              }, 5000) && (
                <p>PLEASE FILL RECEIVER DETAILS AND ITEM DETAILS FORM</p>
              )}
          </>
        </div>
>>>>>>> b6eb4aad29809b1d3f6d528da08002b0d35403d2
      </div>
    </InvoiceContext.Provider>
  );
};

export default Invoice;
