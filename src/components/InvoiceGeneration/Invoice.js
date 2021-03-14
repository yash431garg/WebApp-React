import React, { useState } from "react";
import "./css/Invoice.css";
import getDetails from "./InvoicePDF";
import ItemDetailsForm from "./ItemDetailsForm";
import ItemDetailsTable from "./ItemDetailsTable";
import ReceiverDetailsForm from "./ReceiverDetailsForm";

export const InvoiceContext = React.createContext();

const Invoice = () => {
  const receiverSchema = {
    id: 0,
    name: "",
    address: "",
    email: "",
    mobile: "",
    gstin: "",
    region: "",
  };
  const [receiver, setReceiver] = useState(receiverSchema);

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
      getDetails({ receiver, itemInputs });
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

  return (
    <InvoiceContext.Provider value={InvoiceContextValue}>
      <div id="container">
        <div id="details_container">
          <div id="receiver_details_container">
            <ReceiverDetailsForm receiver={receiver} />
          </div>
          <div id="item_details_container">
            <ItemDetailsForm item={item} />
          </div>
        </div>
        <ItemDetailsTable itemInputs={itemInputs} />
        <button id="generate_invoice--button" onClick={() => generateInvoice()}>
          Generate Invoice as PDF
        </button>
        <>
          {formEmpty &&
            setTimeout(() => {
              setFormEmpty(false);
            }, 5000) && (
              <p>PLEASE FILL RECEIVER DETAILS AND ITEM DETAILS FORM</p>
            )}
        </>
      </div>
    </InvoiceContext.Provider>
  );
};

export default Invoice;
