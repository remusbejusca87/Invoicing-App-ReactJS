import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const Header = () => {
  // const [company, setCompany] = useState("");
  // const [client, setClient] = useState("");
  // const [serial, setSerial] = useState("");
  // const [nr, setNr] = useState(0);
  // const [date, setDate] = useState("");
  return (
    <>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="col-auto">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              <b>Company</b>
            </InputGroup.Text>
            <Form.Control
              // onChange={(e) => setCompany(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              // value={company}
              type="text"
              id="company"
            />
          </InputGroup>
        </div>
        <div className="col-auto">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              <b>Client:</b>
            </InputGroup.Text>
            <Form.Control
              // onChange={(e) => setClient(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              // value={client}
              type="text"
              id="client"
            />
          </InputGroup>
        </div>
      </div>
      <div className="row d-flex justify-content-center mb-4">
        <div className="col-4">
          <div className="d-flex justify-content-center">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Serial:
              </InputGroup.Text>
              <Form.Control
                // onChange={(e) => setSerial(e.target.value)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                // value={serial}
                type="text"
                id="serial"
              />
            </InputGroup>
          </div>
          <div className="d-flex justify-content-center">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">No:</InputGroup.Text>
              <Form.Control
                type="number"
                // onChange={(e) => setNr(Number(e.target.value))}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                // value={nr}
                id="nr"
              />
            </InputGroup>
          </div>
          <div className="d-flex justify-content-center">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Date:</InputGroup.Text>
              <Form.Control
                // onChange={(e) => setDate(e.target.value)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                // value={date}
                id="date"
              />
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
