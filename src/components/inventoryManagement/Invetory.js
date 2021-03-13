import React, { useEffect,useState } from "react";
import { Card } from "react-bootstrap";
import InventoryItem from "./InventoryItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { connect } from "react-redux";
import firebaseDB from '../../containers/Firebase';

let items = [
  { productName: "Brush", productPrice: "20", productQuantity: "5" },
];
const Inventory = (props) => {
  let [items,setItems] = useState([]);
  //For page load events
  useEffect(() => {
    firebaseDB.ref('Users/uid1').child('inventory').on('value',function(snapshot){
      let json = snapshot.val();
      let keys = Object.keys(json);
      let vals = Object.values(json);
      for(let i=0;i<keys.length;i++){
        vals[i].id = keys[i]; 
      }
      setItems(vals);

    });
    
  }, []);
  let defaultProps = {
    productName: "",
    pruductPrice: "",
    productQuantity: "",
  };

  return items.length > 0 ? (
    items.map((ele, index) => {
      return (
        
          <div className="product_detail">
          {(index===0)?  <InventoryItem itemState="Add Item" valChange="Add" />:''}
        <div>
            <p>Product Name : {ele.name}</p>
            <p>Product Price : {ele.price}</p>
            <p>Product Quantiity : {ele.quantity}</p>

            <InventoryItem
              itemState="Edit Item"
              prodName={ele.name}
              productPrice={ele.price}
              productQuantity={ele.quantity}
              valChange="Update"
            />
          </div>
         
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
