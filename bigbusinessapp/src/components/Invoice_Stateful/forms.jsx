// Receiver Details Form
// Item Details Form
// Item Details Table
// Generating Invoice as PDF

import React, { Component } from "react";

import getDetails from "./InvoicePDF";

class Invoice_Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiverDetails: {
        name: "",
        address: "",
        email: "",
        mobile: "",
        gstin: "",
        region: "",
      },
      item: {
        id: 0,
        name: "",
        quantity: 1,
        rate: 1,
      },
      inputs: [
        {
          id: -2,
          name: "Pero",
          quantity: 2,
          rate: 2,
        },
      ],
      emptyString: "",
      numberZero: 0,
    };
  }

  // handleItemInputChange(name) {
  //   return ({ target: { value } }) => {
  //     this.setState((oldValues) => ({ ...oldValues, [name]: value }));
  //   };
  // }

  //   handleItemInputChange(objectName, key) {
  //     return (event) => {
  //       console.log(this.state);
  //       //   this.setState(() => ({
  //       //     [objectName]: {
  //       //       [key]: event.target.value,
  //       //     },
  //       //   }));
  //       this.state[objectName][key] = event.target.value;
  //       console.log(this.state);
  //     };
  //   }

  // objectName is the name of the `key` in state object

  InputElement(objectName, key, type) {
    key = key.toLowerCase();
    let min = type === "number" ? 1 : "";
    return (
      <>
        <label htmlFor={key}>{key.toUpperCase()}</label>
        <input
          type={type}
          name={key}
          id={key}
          //   value={this.state[objectName][key]}
          //   onChange={this.handleItemInputChange(objectName,key)}
          onChange={(event) => {
            this.state[objectName][key] = event.target.value;
            console.log(this.state);
          }}
          //   onChange={(event) => console.log(event.target.value)}
          min={min}
          required
        />
      </>
    );
  }

  FormElement(objectName, form_name, form_values_array) {
    return (
      <form action="">
        <fieldset>
          <legend>{form_name.toUpperCase()}</legend>
          {form_values_array.map((value) =>
            this.InputElement(objectName, value.key, value.type)
          )}
        </fieldset>
      </form>
    );
  }

  ReceiverDetailsForm() {
    // const receiverDetails = this.state.receiverDetails;
    // const inputFieldsArray = [];
    // for (const key in receiverDetails) {
    //   if (Object.hasOwnProperty.call(receiverDetails, key)) {
    //     // const element = receiverDetails[key];
    //     inputFieldsArray.push({ key, type: "text" });
    //   }
    // }
    // return this.FormElement(
    //   "receiverDetails",
    //   "Receiver Details",
    //   inputFieldsArray
    // );
    return this.FormElement("receiverDetails", "Receiver Details", [
      {
        key: "Name",
        type: "text",
      },
      {
        key: "Address",
        type: "text",
      },
      {
        key: "Email",
        type: "email",
      },
      {
        key: "Mobile",
        type: "tel",
      },
      {
        key: "GSTIN",
        type: "text",
      },
      {
        key: "Region",
        type: "text",
      },
    ]);
  }
  /*
   : Name
   : Address 
   : Email
   : Mobile
   : GSTIN
   : Region
  */

  ItemDetailsForm() {
    // const state = this.state;
    // const emptyString = state.emptyString;
    // const numberZero = state.numberZero;
    return (
      <>
        {this.FormElement("item", "ITEM DETAILS", [
          {
            key: "name",
            type: "text",
            // value: emptyString,
          },
          {
            key: "quantity",
            type: "number",
            // value: numberZero + 1,
          },
          {
            key: "rate",
            type: "number",
            // value: numberZero + 1,
          },
        ])}
        <button onClick={() => this.addToTable()}>Add to Table</button>
        <button onClick={() => getDetails(this.state)}>
          Generate Invoice as PDF
        </button>
      </>
    );
  }

  addToTable() {
    const state = this.state;
    // itemObject=state.item - can't be assigned directly because whenever there will be change
    // change in item it will change even array values as well
    const itemObject = { ...state.item, id: state.inputs.length };
    state.inputs.push(itemObject);
    // this.setState(({receiverDetails,item,inputs})=>{{
    //     receiverDetails:receiverDetails,
    //     item:{
    //         id:0,
    //         name:"",
    //         quantity:1,
    //         rate:1
    //     },

    // }})
    for (const key in state.item) {
      if (Object.hasOwnProperty.call(state.item, key)) {
        state.item[key] = "";
      }
    }
    console.log(state.inputs, state.item);

    // call addToTable - now add a new element to table
  }

  TableElement(id, name, quantity, rate) {
    console.log(id, name, quantity, rate);
    return (
      <>
        <tr key={id}>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{rate}</td>
          <td>
            <button>EDIT</button>
          </td>
        </tr>
      </>
    );
  }

  ItemDetailsTable() {
    return (
      <table>
        <tr>
          <th>NAME</th>
          <th>QUANTITY</th>
          <th>RATE</th>
          <th></th>
        </tr>
        {this.TableElement(9999, "Pa", "2", 3)}
        {this.state.inputs.map((itemObject) =>
          this.TableElement(
            itemObject.id,
            itemObject.name,
            itemObject.quantity,
            itemObject.rate
          )
        )}
      </table>
    );
  }

  render() {
    return (
      <>
        {this.ReceiverDetailsForm()}
        {this.ItemDetailsForm()}
        {this.ItemDetailsTable()}
      </>
    );
  }
}

export default Invoice_Stateful;
