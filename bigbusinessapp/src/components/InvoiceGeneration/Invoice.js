// remove useState from import statement and receiverSchema out of Invoice function

import React, { useState } from "react";

import ReceiverDetailsForm from "./ReceiverDetailsForm";
import ItemDetailsForm from "./ItemDetailsForm";
import ItemDetailsTable from "./ItemDetailsTable";

import getDetails from "./InvoicePDF";

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
        id: 0,
        name: "",
        quantity: 1,
        rate: 1,
    };
    const [item, setItem] = useState(itemSchema);

    const sampleItemInputs = [
        // {
        //     id: 0,
        //     name: "bread",
        //     quantity: 1,
        //     rate: 1,
        // },
    ];
    const [itemInputs, setInputs] = useState(sampleItemInputs);

    const handleReceiverChange = (newReceiver) => {
        setReceiver({ ...receiver, ...newReceiver });
        console.log("Receiver", receiver, newReceiver);
    };

    const handleItemChange = (newItem) => {
        setItem({ ...item, ...newItem });
        console.log("Item", item, newItem);
    };

    const handleItemInputsAdd = () => {
        if (
            item.name !== "" &&
            item.name !== null &&
            item.name.length !== 0 &&
            item.name !== " "
        ) {
            itemInputs.push({ ...item, id: itemInputs.length });
            setItem({ ...itemSchema });
            console.log(itemInputs);
        }
    };

    const handleItemInputsDelete = (id) => {
        setInputs(itemInputs.filter((item) => item.id !== id));
    }

    const handleItemInputsEdit = (id) => {
        const itemSelected = itemInputs[id];
        setItem(itemSelected);
        setInputs(itemInputs.filter((item) => item.id !== id));
        console.log(itemInputs);
    };

    //   const handleItemInputsChange = (newItemInput, idx) => {
    //     idx = idx ?? itemInputs.length;
    //     newItemInput = newItemInput ?? item;
    //     // setInputs([...itemInputs, { ...newItemInput, id: idx }]);
    //     // setInputs(itemInputs.push({ ...newItemInput, id: idx }));
    //     itemInputs.push({ ...newItemInput, id: idx });
    //     setItem({ ...itemSchema });
    //     console.log(itemInputs);
    //   };

    const generateInvoice = () => {
        console.log(receiver, itemInputs);
        getDetails({ receiver, itemInputs });
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
            <ReceiverDetailsForm receiver={receiver} />
            <ItemDetailsForm item={item} />
            <ItemDetailsTable itemInputs={itemInputs} />
            <button onClick={() => generateInvoice()}>Generate Invoice as PDF</button>
        </InvoiceContext.Provider>
    );
};

export default Invoice;
