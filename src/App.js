import React from "react";
import Header from "./components/header/header";
import CardS from "./components/card/card";
import AddItemModal from "./components/addItemModal/additemModal";

export default function App() {
  return (
    <>
      <Header name="BigBizz" />
      <Header name="Inventory" />
      <hr />
      <div className="container">
        <AddItemModal />
        <CardS />
      </div>
    </>
  );
}
