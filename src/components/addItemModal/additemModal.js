import React, { Component } from "react";

import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export default class additemModal extends Component {
  constructor(props) {
    super(props);

    this.ProductName = React.createRef();
    this.Price = React.createRef();
    this.Quantity = React.createRef();

    this.QuantityInvalid = React.createRef();
    this.PriceInvalid = React.createRef();
    this.ProductInvalid = React.createRef();

    this.state = {
      show: false,
    };
  }

  handleShow = () => this.setState({ show: true });

  handleClose = () => {
    this.setState({ show: false });
    this.ProductName.current.value = "";
    this.Price.current.value = "";
    this.Quantity.current.value = "";
  };

  handleSumbit = () => {
    var a = this.ProductName.current;
    var b = this.Price.current;
    var c = this.Quantity.current;

    var d = this.ProductInvalid.current;
    var e = this.PriceInvalid.current;
    var f = this.QuantityInvalid.current;

    a.setAttribute("class", "form-control");
    b.setAttribute("class", "form-control");
    c.setAttribute("class", "form-control");

    if (
      a.value.replace(/\s/g, "").length &&
      b.value.replace(/\s/g, "").length &&
      c.value.replace(/\s/g, "").length &&
      b.value > 0 &&
      !b.value.contains("e") &&
      c.value > 0 &&
      !c.value.contains("e")
    ) {
      var g = localStorage.getItem("Inventory");
      var h;
      var i;
      if (g) {
        h = JSON.parse(g);
        i = h.data;
      } else {
        i = [];
      }

      var j = {
        productName: a.value,
        Price: b.value,
        Quantity: c.value,
      };
      i.push(j);
      var k = {
        data: i,
      };

      localStorage.setItem("Inventory", JSON.stringify(k));

      this.setState({ show: false });
      a.value = "";
      b.value = "";
      c.value = "";
    } else {
      if (!a.value.replace(/\s/g, "").length) {
        d.innerHTML = "Product Name must not be empty";
        a.setAttribute("class", "form-control is-invalid");
      } else if (!b.value.replace(/\s/g, "").length) {
        e.innerHTML = "Price must not be empty";
        b.setAttribute("class", "form-control is-invalid");
      } else if (!c.value.replace(/\s/g, "").length) {
        f.innerHTML = "Quantity Name must not be empty";
        c.setAttribute("class", "form-control is-invalid");
      } else if (b.value <= 0) {
        e.innerHTML = "Price must be more than 0";
        b.setAttribute("class", "form-control is-invalid");
      } else if (c.value <= 0) {
        f.innerHTML = "Quantity must be more than 0";
        c.setAttribute("class", "form-control is-invalid");
      } else if (b.value.contains("e")) {
        f.innerHTML = "Price must be a number";
        b.setAttribute("class", "form-control is-invalid");
      } else if (c.value.contains("e")) {
        f.innerHTML = "Quantity must be a number";
        c.setAttribute("class", "form-control is-invalid");
      }
    }
  };

  render() {
    return (
      <>
        <div align="right">
          <Button variant="primary" onClick={this.handleShow} size="sm">
            Add item
          </Button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <InputGroup className="mb-3" size="sm">
                <FormControl
                  placeholder="Product Name"
                  ref={this.ProductName}
                />
                <div class="invalid-feedback" ref={this.ProductInvalid}></div>
              </InputGroup>

              <InputGroup className="mb-3" size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text>&#8377;</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  ref={this.Price}
                  placeholder="Price"
                  type="number"
                  min="1"
                />

                <InputGroup.Append>
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
                <div class="invalid-feedback" ref={this.PriceInvalid}></div>
              </InputGroup>

              <InputGroup className="mb-3" size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text>Quantity</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  ref={this.Quantity}
                  type="number"
                  min="1"
                  defaultValue="1"
                />
                <div class="invalid-feedback" ref={this.QuantityInvalid}></div>
              </InputGroup>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleSumbit}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
