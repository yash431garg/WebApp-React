import React, { useState } from "react";

import Invoice from "../InvoiceGeneration/Invoice";
import ManageInvoiceTable from "./ManageInvoiceTable";

export const InvoiceDataContext = React.createContext();

const InvoiceData = () => {
  const [InvoiceData, setInvoiceData] = useState(SampleInvoiceData);

  const InvoiceDataContextValue = {
    getInvoiceObject,
    addInvoiceObject,
    deleteInvoiceObject,
  };

  const getInvoiceObject = (id) => {
    return InvoiceData.find((id) => InvoiceData.InvoiceId === id);
  };

  const addInvoiceObject = (newInvoice) => {
    setInvoiceData([...InvoiceData, newInvoice]);
  };

  const deleteInvoiceObject = (id) => {
    setInvoiceData(InvoiceData.filter((id) => InvoiceData.InvoiceId !== id));
  };

  return (
    <InvoiceDataContext.Provider value={InvoiceDataContextValue}>
      {Invoice}
      <ManageInvoiceTable value={InvoiceData} />
    </InvoiceDataContext.Provider>
  );
};

export default InvoiceData;

/* const InvoiceObject = {
    InvoiceId: Math.round(d.getTime() * Math.random()),
    ReceiverDetails: receiver,
    ItemInputsArray: itemInputs,
    CreationDate: dd_mm_yyyy,
    Creationtime: hh_mm,
   };
*/

const SampleInvoiceData = [
  {
    InvoiceId: "qqq11111",
    ReceiverDetails: {
      name: "Aaryan",
      address: "Malad West",
      email: "aa@bigb.com",
      mobile: "9010329748",
      gstin: "duw82",
      region: "Mumbai",
    },
    ItemInputsArray: [
      { name: "Bread", quantity: 2, rate: 3 },
      { name: "Coco", quantity: 200, rate: 31 },
      { name: "Paneer", quantity: 20, rate: 300 },
    ],
    CreationDate: "01-03-2021",
    Creationtime: "08:56",
  },
];
