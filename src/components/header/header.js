import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

export default class header extends Component {
  render() {
    return (
      <>
        <Navbar bg="light">
          <Navbar.Brand href="/">{this.props.name}</Navbar.Brand>

          {/*
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        */}
        </Navbar>
      </>
    );
  }
}
