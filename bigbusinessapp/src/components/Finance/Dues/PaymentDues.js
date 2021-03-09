import React from "react";
import { useState,useEffect } from "react";
import firebaseDB from '../../../containers/Firebase';
import "./Dues.css";

const PaymentDues = () => {
  const [dues,setDues] = useState([]);
  useEffect(() => {
    firebaseDB.ref('Users/uid1').child('dues').on('value',function(snapshot){
      let json = snapshot.val();
      let keys = Object.keys(json);
      let vals = Object.values(json);
      for(let i=0;i<keys.length;i++){
        vals[i].id = keys[i]; 
      }
      setDues(vals);
    });
  })
  return (
    <div className="dues">
      <h3>Dues List:</h3>
      <p>{dues.id}</p>
      {dues.map((task, index) => (
        <div
          key={index}
          style={{
            border: "1px groove #384259",
            margin: "0px 0px 10px 0px",
            justifyContent: "space-between",
            width: "fit-content",
          }}
        >
          <h5>Name :{task.title}</h5>
          <p>Amount :{task.amount} </p>
          <p>Date :{task.reminderDate}</p>
        </div>
      ))}
    </div>
  );
};

export default PaymentDues;
