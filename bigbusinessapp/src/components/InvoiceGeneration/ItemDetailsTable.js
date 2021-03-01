import React, { useContext } from "react";
import { InvoiceContext } from "./Invoice";

const ItemDetailsTable = (props) => {
  const { itemInputs } = props;
  const { handleItemInputsEdit, handleItemInputsDelete } = useContext(InvoiceContext);
  return (
    <table>
      <tr>
        <th>NAME</th>
        <th>QUANTITY</th>
        <th>RATE</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
      {itemInputs.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.rate}</td>
            <td>
              <button onClick={() => handleItemInputsEdit(item.id)}>
                EDIT
              </button>
            </td>
            <td>
              <button onClick={() => handleItemInputsDelete(item.id)}>
                DELETE
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default ItemDetailsTable;
