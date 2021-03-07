import React, { useState, useEffect } from "react";

import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { addInventoryItem } from "../redux-state-management/actionCreators";
import { connect } from "react-redux";

const InventoryItem = (props) => {
  let [productName, setProductName] = useState(props.productName);
  let [productPrice, setProductPrice] = useState(props.productPrice);
  let [productQuantity, setProductQuantity] = useState(props.productQuantity);
  let [showModal, setShowModal] = useState(false);

  function handleShow() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
    setProductName = "";
    setProductPrice = "";
    setProductQuantity = "";
  }
  useEffect(() => {
    console.log(props);
    if (props.productName) {
      console.log(props.productName);
    }
  }, []);

  return (
    <div>
      <div style={{ padding: "10px" }}>
        <Button variant="primary" onClick={handleShow} size="sm">
          {props.itemState}
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Product Name</label>
            <input
              style={{ display: "block" }}
              type="text"
              name="productName"
              placeholder="Product Name"
              value={props.prodName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label>Product Price</label>
            <input
              style={{ display: "block" }}
              type="number"
              name="productPrice"
              placeholder="Product Price"
              value={props.productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <label>Product Quantity</label>
            <input
              style={{ display: "block" }}
              type="number"
              name="productQuantity"
              placeholder="Product Quantity"
              value={props.productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => {
              props.submission({
                productName: productName,
                productPrice: productPrice,
                productQuantity: productQuantity,
              });
              setShowModal(false);
            }}
          >
            {" "}
            {props.valChange}{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({ productName: state.productName });
const mapDispatchToProps = (dispatch) => ({
  submission(inventoryItem) {
    console.log("Inside Redux");
    dispatch(addInventoryItem(inventoryItem));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(InventoryItem);
