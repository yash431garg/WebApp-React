import { useContext } from "react";
import "./css/ItemDetailsForm.css";
import { InvoiceContext } from "./Invoice";

const ItemDetailsForm = (props) => {
  const { handleItemInputsAdd, handleItemChange } = useContext(InvoiceContext);
  const { item } = props;

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const objvalue = target.value;
    handleItemChange({ [name]: objvalue });
  };

  const formname = "Item Details";
  return (
    <div className="item_details">
      <form>
        <fieldset>
          <legend>{formname.toUpperCase()}</legend>
          <div id="form_input_elements">
            <div className="label_input_container" id="name">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={item["name"]}
                onChange={(event) => {
                  handleChange(event);
                }}
                required
              />
            </div>
            <div className="label_input_container" id="quantity">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                min={1}
                value={item["quantity"]}
                onChange={(event) => {
                  handleChange(event);
                }}
                required
              />
            </div>
            <div className="label_input_container" id="rate">
              <label>Rate</label>
              <input
                type="number"
                name="rate"
                min={1}
                value={item["rate"]}
                disabled
              />
            </div>
          </div>
        </fieldset>
      </form>
      <button id="add_to_invoice--button" onClick={() => handleItemInputsAdd()}>
        Add to Invoice
      </button>
    </div>
  );
};

export default ItemDetailsForm;
