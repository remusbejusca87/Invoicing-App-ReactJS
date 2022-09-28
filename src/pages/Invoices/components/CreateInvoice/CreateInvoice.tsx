import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";
import { useCreateInvoice } from "../../../../hooks/useCreateInvoice";
import { useState } from "react";

const CreateInvoice = () => {
  const [company, setCompany] = useState("");
  const [client, setClient] = useState("");
  const [serial, setSerial] = useState("");
  const [nr, setNr] = useState(0);
  const [date, setDate] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemUnit, setItemUnit] = useState("");
  const [itemAmount, setItemAmount] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const { createInvoice } = useCreateInvoice();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // let company: string = "",
    //   client: string = "",
    //   serial: string = "",
    //   nr: number = 0,
    //   date: string = "",
    //   itemName: string = "",
    //   itemUnit: string = "",
    //   itemAmount: number = 0,
    //   itemPrice: number = 0;
    // (e.target as HTMLFormElement).forEach((element: HTMLFormElement) => {
    //   switch (element.id) {
    //     case "company":
    //       company = element.value;
    //       break;
    //     case "client":
    //       client = element.value;
    //       break;
    //     case "serial":
    //       serial = element.value;
    //       break;
    //     case "nr":
    //       nr = element.value;
    //       break;
    //     case "date":
    //       date = element.value;
    //       break;
    //     case "itemName":
    //       itemName = element.value;
    //       break;
    //     case "itemUnit":
    //       itemUnit = element.value;
    //       break;
    //     case "itemAmount":
    //       itemAmount = element.value;
    //       break;
    //     case "itemPrice":
    //       itemPrice = element.value;
    //       break;

    //     default:
    //       break;
    //   }
    // });

    await createInvoice({
      company,
      client,
      serial,
      nr,
      date,
      itemName,
      itemUnit,
      itemAmount,
      itemPrice,
    });
    // setCompany("");
    // setClient("");
    // setSerial("");
    // setNr(0);
    // setDate("");
    // setItemName("");
    // setItemUnit("");
    // setItemAmount(0);
    // setItemPrice(0);
    ///aici un redirect
  };

  return (
    <>
      <div style={{ width: "80%", margin: "0 auto", marginTop: "1rem" }}>
        <NavLink to="/invoices">
          <Button variant="secondary">Back</Button>
        </NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "80%", margin: "0 auto", marginTop: "1rem" }}>
          <Card.Body>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="col-auto">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    <b>Company</b>
                  </InputGroup.Text>
                  <Form.Control
                    onChange={(e) => setCompany(e.target.value)}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={company}
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
                    onChange={(e) => setClient(e.target.value)}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={client}
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
                      onChange={(e) => setSerial(e.target.value)}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      value={serial}
                      type="text"
                      id="serial"
                    />
                  </InputGroup>
                </div>
                <div className="d-flex justify-content-center">
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      No:
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      onChange={(e) => setNr(Number(e.target.value))}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      value={nr}
                      id="nr"
                    />
                  </InputGroup>
                </div>
                <div className="d-flex justify-content-center">
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Date:
                    </InputGroup.Text>
                    <Form.Control
                      onChange={(e) => setDate(e.target.value)}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="text"
                      value={date}
                      id="date"
                    />
                  </InputGroup>
                </div>
              </div>
            </div>
            <table className="table table-hover">
              <thead className="table table-dark">
                <tr className="text-center">
                  <th style={{ width: "50px" }}> No.crt. </th>
                  <th> Services/Products </th>
                  <th> Unit </th>
                  <th> Amount </th>
                  <th> Price </th>
                  <th> Total </th>
                  <th> VAT </th>
                  <th colSpan={3}></th>
                </tr>
                <tr className="text-center">
                  <th> 0 </th>
                  <th> 1 </th>
                  <th> 2 </th>
                  <th> 3 </th>
                  <th> 4 </th>
                  <th> 5 = 3 x 4 </th>
                  <th> 6 </th>
                  <th colSpan={3}></th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-center">
                  <td> 1 </td>
                  <td>
                    <InputGroup className="mb-3">
                      <Form.Control
                        onChange={(e) => setItemName(e.target.value)}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={itemName}
                        id="itemName"
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <Form.Control
                        onChange={(e) => setItemUnit(e.target.value)}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={itemUnit}
                        id="itemUnit"
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="number"
                        onChange={(e) => setItemAmount(Number(e.target.value))}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={itemAmount}
                        id="itemAmount"
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="number"
                        onChange={(e) => setItemPrice(Number(e.target.value))}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={itemPrice}
                        id="itemPrice"
                      />
                    </InputGroup>
                  </td>
                  <td style={{ width: "100px" }}>total result</td>

                  <td style={{ width: "100px" }}>total vat</td>

                  <th colSpan={3}></th>
                </tr>
                <tr className="text-center">
                  <th scope="row"></th>
                  <td colSpan={3}></td>
                  <td>Total:</td>
                  <td>
                    <strong>nothing </strong>
                  </td>
                  <td>
                    <strong> nothing </strong>
                  </td>
                </tr>
                <tr className="text-center">
                  <th scope="row"></th>
                  <td colSpan={3}></td>
                  <td className="fs-5">Total payment</td>
                  <td colSpan={2} className="fs-5">
                    <strong> total value</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <Button type="submit"> Create </Button>
          </Card.Body>
        </Card>
      </form>
    </>
  );
};

export default CreateInvoice;
