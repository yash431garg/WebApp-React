import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { InvoiceContext } from "./Invoice";

const ReceiverDetailsForm = (props) => {
  const { handleReceiverChange } = useContext(InvoiceContext);
  const { receiver } = props;

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const objvalue = target.value;
    handleReceiverChange({ [name]: objvalue });
  };

  const formname = "Invoice";

  let [showModal, setShowModal] = useState(false);
  function handleShow() {
    if (props.valChange === "Delete") {
      setShowModal(false);
    } else setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    // <Modal show={showModal} onHide={handleClose}>
    //   {/* <Modal.Header closeButton>
    //       <Modal.Title>{props.itemState}</Modal.Title>
    //     </Modal.Header> */}
    //   <Modal.Body>
        <form>
          <fieldset>
            <legend>{formname.toUpperCase()}</legend>
            <div id="form_input_elements">
              <div className="label_input_container" id="name">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={receiver["name"]}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  required
                />
              </div>
              <div className="label_input_container" id="mobile">
                <label>Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={receiver["mobile"]}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  required
                />
              </div>
              <div className="label_input_container" id="address">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={receiver["address"]}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  required
                />
              </div>
              <div className="label_input_container" id="gstin">
                <label>GSTIN</label>
                <input
                  type="text"
                  name="gstin"
                  value={receiver["gstin"]}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  required
                />
              </div>
              <div className="label_input_container" id="email">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={receiver["email"]}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  required
                />
              </div>
              <div className="label_input_container" id="region">
                <label>Region</label>
                <input
                  type="text"
                  name="region"
                  value={receiver["region"]}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  required
                />
              </div>
            </div>
          </fieldset>
        </form>
    //   </Modal.Body>
    //   {/* <Modal.Footer>
    //       <Button
    //         variant="primary"
    //         onClick={(e) => {
    //           firebaseAction({
    //             name: name,
    //             price: price,
    //             quantity: quantity,
    //             id:id
    //           })

    //         }}
    //       >
    //         {" "}
    //         {props.valChange}{" "}
    //       </Button>
    //     </Modal.Footer> */}
    // </Modal>
  );
};

export default ReceiverDetailsForm;
