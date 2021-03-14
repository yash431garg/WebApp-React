import React from "react";
import InputElement from "./InputElement";

const FormElement = (props) => {
  const { formname, formValues, objectName } = props;
  return (
    <form>
      <fieldset>
        <legend>{formname.toUpperCase()}</legend>
        <div id="form_input_elements">
          {formValues.map((value, index) => (
            <InputElement
              value={value}
              key={index.toString()}
              objectName={objectName}
            />
          ))}
        </div>
      </fieldset>
    </form>
  );
};

export default FormElement;
