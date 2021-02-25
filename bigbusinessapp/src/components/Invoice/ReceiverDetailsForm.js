import React from "react";
import FormElement from "./elements/FormElement";

const ReceiverDetailsForm = (props) => {
  const { receiver } = props;
  const formValues = [
    {
      key: "name",
      type: "text",
      value: receiver["name"],
    },
    {
      key: "address",
      type: "text",
      value: receiver["address"],
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
  // const objectName = receiver.toString();
  const objectName = "receiver";
  return (
    <FormElement
      formname={formname}
      formValues={formValues}
      objectName={objectName}
    />
  );
};

export default ReceiverDetailsForm;
