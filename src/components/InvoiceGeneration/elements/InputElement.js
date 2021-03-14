import React, { useContext } from "react";
import { InvoiceContext } from "../Invoice";

// const handleChange = (event) => {
//   const target = event.target;
//   [target.name] = target.value;
// };

const InputElement = (props) => {
  const { value, objectName } = props;
  const min = value.type === "number" ? 1 : "";
  const { handleReceiverChange, handleItemChange } = useContext(InvoiceContext);

  const handleChange = (objectName, event) => {
    const target = event.target;
    const name = target.name;
    const objvalue = target.value;
    if (objectName === "receiver") {
      handleReceiverChange({ [name]: objvalue });
    } else {
      handleItemChange({ [name]: objvalue });
    }
  };

  return (
    <div id={value.key}>
      <label>{`${value.key.toUpperCase()}:`}</label>
      <input
        type={value.type}
        name={value.key}
        value={value.value}
        onChange={(event) => {
          handleChange(objectName, event);
        }}
        min={min}
        required
      />
    </div>
  );
};

export default InputElement;

// name, email, mobile
// address
// gstin, region

// itemdetails all in one line
