import React, { useContext } from "react";

import FormElement from "./elements/FormElement";
import { InvoiceContext } from "./Invoice";

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
        style={{
          margin: "20px",
          padding: "5px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => handleItemInputsAdd()}
      >
        Add to InvoiceTable
      </button>
    </>
  );
};

export default ItemDetailsForm;
