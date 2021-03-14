import React from "react";

import FormElement from "./elements/FormElement";
import "./css/ReceiverDetailsForm.css";

const ReceiverDetailsForm = (props) => {
  const { receiver } = props;
  const formValues = [
    {
      key: "name",
      type: "text",
      value: receiver["name"],
    },
    {
      key: "email",
      type: "email",
      value: receiver["email"],
    },
    {
      key: "mobile",
      type: "tel",
      value: receiver["mobile"],
    },
    {
      key: "address",
      type: "text",
      value: receiver["address"],
    },
    {
      key: "gstin",
      type: "text",
      value: receiver["gstin"],
    },
    {
      key: "region",
      type: "text",
      value: receiver["region"],
    },
  ];

  const formname = "Receiver Details";
  const objectName = "receiver";
  // const objectName = receiver.toString();
  return (
    <FormElement
      formname={formname}
      formValues={formValues}
      objectName={objectName}
    />
  );
};

export default ReceiverDetailsForm;
