import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";

const ManageInvoice = () => {
  const SampleInvoiceData = [
    {
      InvoiceId: "12345",
      CreationDate: "01-01-2001",
      receiver: {
        name: "Aryan",
        address: "Hyderabad",
        email: "founder@bigbusinessapp.com",
        mobile: "9993883839",
        gstin: "9393939",
        IncludeGST: true,
        region: "Telangana",
      },
      itemInputs: [
        { id: "1228801", name: "Bread", quantity: 19, rate: 20 },
        { id: "1037732", name: "Milk", quantity: 12, rate: 10 },
        { id: "0929293", name: "Corn", quantity: 5, rate: 12 },
      ],
    },
    {
      InvoiceId: "54321",
      CreationDate: "01-02-2021",
      receiver: {
        name: "Akhil",
        address: "Ongole",
        email: "ak@bigbusinessapp.com",
        mobile: "9292299111",
        gstin: "9299292",
        IncludeGST: false,
        region: "Andhra Pradesh",
      },
      itemInputs: [
        { id: "1228801", name: "item1", quantity: 10, rate: 29 },
        { id: "1037732", name: "item2", quantity: 110, rate: 9 },
        { id: "0929293", name: "item3", quantity: 210, rate: 2 },
      ],
    },
  ];
  const [InvoiceData, setInvoice] = useState(SampleInvoiceData);
  console.log(InvoiceData);

  const handleAddInvoice = (newInvoice) => {
    console.log("Working", newInvoice);
    // console.log([...newInvoice.files].map((item) => item.name));
    console.log(...newInvoice.files);
    const InvoiceObjectArray = [...newInvoice.files].map((file) => {
      if (file.size / (1024 * 1024) < 2) {
        let d = new Date(file.lastModified);
        let ddmmyyyy = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

        let name = file.name;
        return {
          InvoiceId: String(Math.random()).substring(2),
          CreationDate: ddmmyyyy,
          receiver: {
            name: name.substring(0, name.length - 4),
            address: "UnParsed",
            email: "UnParsed",
            mobile: "UnParsed",
            gstin: "UnParsed",
            IncludeGST: true,
            region: "UnParsed",
          },
          itemInputs: [
            { id: 123456, name: "UnParsed", quantity: "0", rate: "0" },
            { id: 123456, name: "UnParsed", quantity: "0", rate: "0" },
            { id: 123456, name: "UnParsed", quantity: "0", rate: "0" },
          ],
        };
      } else alert(`${file.name} - File Size must be less than 2 mb`);
    });
    setInvoice([...InvoiceData, ...InvoiceObjectArray]);

    console.log(InvoiceData);
  };
  const handleDeleteInvoice = (invoice) =>
    setInvoice(
      InvoiceData.filter((invoiceItem) => invoiceItem.id !== invoice.id)
    );

  return (
    <div id="container">
      <div id="search_filter_add_bar">
        <label htmlFor="addInvoiceFile">
          <input
            type="file"
            accept=".pdf"
            multiple
            name="invoiceFile"
            id="addInvoiceFile"
            onChange={(event) => handleAddInvoice(event.target)}
          />
          HE
        </label>
      </div>

      <div>
        {InvoiceData.map((item) => (
          <span>{item.receiver.name}</span>
        ))}
      </div>

      <div id="cardgroup">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div id="carddeck">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
         </CardDeck>
      </div>
    </div>
  );
};

export default ManageInvoice;
// invoicetable
