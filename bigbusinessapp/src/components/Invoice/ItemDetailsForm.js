import React, { useContext } from "react";

import FormElement from "./elements/FormElement";
import { InvoiceContext } from "./Invoice";

import getDetails from "./InvoicePDF";

const ItemDetailsForm = (props) => {
  const { handleItemInputsAdd } = useContext(InvoiceContext);
  const { item } = props;

  const formValues = [
    {
      key: "name",
      type: "text",
      value: item["name"],
    },
    {
      key: "quantity",
      type: "number",
      value: item["quantity"],
    },
    {
      key: "rate",
      type: "number",
      value: item["rate"],
    },
  ];

  const formname = "Item Details";
  // const objectName = item.toString();
  const objectName = "item";
  return (
    <>
      <FormElement
        formname={formname}
        formValues={formValues}
        objectName={objectName}
      />
      <button
        onClick={() => {
          console.log("Cliecked");
          handleItemInputsAdd();
        }}
      >
        Add to InvoiceTable
      </button>
    </>
  );
};

export default ItemDetailsForm;
