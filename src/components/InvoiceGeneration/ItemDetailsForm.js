import React, { useContext } from "react";
import "./css/ItemDetailsForm.css";
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
      <button id="add_to_invoice--button" onClick={() => handleItemInputsAdd()}>
        Add to InvoiceTable
      </button>
    </>
  );
};

export default ItemDetailsForm;
