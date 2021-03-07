import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import InventoryItem from "./InventoryItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { connect } from "react-redux";
import FirebaseCRUD from "../../containers/FirebaseCRUD";
let items = [
  { productName: "Brush", productPrice: "20", productQuantity: "5" },
];
const Inventory = (props) => {
  //For page load events
  useEffect(() => {
    new FirebaseCRUD().getInventory();
  }, []);
  let defaultProps = {
    productName: "",
    pruductPrice: "",
    productQuantity: "",
  };

  return items.length > 0 ? (
    items.map((ele, index) => {
      return (
        <div>
          <div className="product_detail">
            <p>Product Name : {ele.productName}</p>
            <p>Product Price : {ele.productPrice}</p>
            <p>Product Quantiity : {ele.productQuantity}</p>

            <InventoryItem
              itemState="Edit Item"
              prodName={ele.productName}
              productPrice={ele.productPrice}
              productQuantity={ele.productQuantity}
              valChange="Update"
            />
          </div>
          <InventoryItem itemState="Add Item" valChange="Add" />
        </div>
      );
    })
  ) : (
    <p>No Items </p>
  );
};

const mapStateToProps = (state) => {
  if (state.addInventoryItem.inventoryItem != null)
    return { items: items.push({ ...state.addInventoryItem.inventoryItem }) };
  else return 0;
};

export default connect(mapStateToProps)(Inventory);
