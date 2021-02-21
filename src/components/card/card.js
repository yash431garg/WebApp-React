import React, { Component } from "react";

import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./card.css";

export default class card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: null,

    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", (e) => {
        console.log(e);
      });
    }

    var a = localStorage.getItem("Inventory");
    if (a) {
      var b = JSON.parse(a);
      this.setState({ cards: b.data });
    }
  }
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("storage");
    }
  }

  render() {
    if (this.state.cards) {
      var cards = this.state.cards.map((ele, index) => {
        return (
          <Card key={index}>
            <Card.Body>
              <p>{ele.productName}</p>
              <p>{ele.Price}</p>
              <p>{ele.Quantity}</p>
            </Card.Body>
          </Card>
        );
      });
    } else {
      return <p align="center">No products Yet</p>;
    }

    return <>{cards}</>;
  }
}
