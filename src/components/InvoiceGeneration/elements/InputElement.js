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
    <>
      <label
        style={{ display: "block", margin: "0px 0px 0px 5px" }}
      >{`${value.key.toUpperCase()}:`}</label>
      <input
        style={{ display: "block", width: "40vw", margin: "0px 0px 0px 5px" }}
        type={value.type}
        name={value.key}
        value={value.value}
        onChange={(event) => {
          handleChange(objectName, event);
        }}
        min={min}
        required
      />
    </>
  );
};

export default InputElement;
