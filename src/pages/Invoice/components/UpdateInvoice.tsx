import { useEffect, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useInvoice from "../../../hooks/useInvoice";
import { useUpdateInvoiceMutation } from "../../../hooks/useUpdateInvoiceMutation";

const UpdateInvoice = () => {
  const { id } = useParams();

  const { invoice } = useInvoice(id || "");

  const [company, setCompany] = useState(invoice.company);
  const [client, setClient] = useState(invoice.client);
  const [serial, setSerial] = useState(invoice.serial);
  const [nr, setNr] = useState(invoice.nr);
  const [date, setDate] = useState(invoice.date);
  const [itemName, setItemName] = useState(invoice.itemName);
  const [itemUnit, setItemUnit] = useState(invoice.itemUnit);
  const [itemAmount, setItemAmount] = useState(invoice.itemAmount);
  const [itemPrice, setItemPrice] = useState(invoice.itemPrice);

  useEffect(() => {
    //nu se updatau state-urile fara sa fac inca un state cu noua val de invoice.
    setCompany(invoice.company);
    setClient(invoice.client);
    setSerial(invoice.serial);
    setNr(invoice.nr);
    setDate(invoice.date);
    setItemName(invoice.itemName);
    setItemUnit(invoice.itemUnit);
    setItemAmount(invoice.itemAmount);
    setItemPrice(invoice.itemPrice);
  }, [
    invoice.company,
    invoice.client,
    invoice.serial,
    invoice.nr,
    invoice.date,
    invoice.itemName,
    invoice.itemUnit,
    invoice.itemAmount,
    invoice.itemPrice,
  ]);

  const { updateInvoice } = useUpdateInvoiceMutation();

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/invoices/${id}`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateInvoice({
      company,
      client,
      serial,
      nr,
      date,
      itemName,
      itemUnit,
      itemAmount,
      itemPrice,
      id: invoice.id,
    });
    handleRedirect();
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
                    <strong>test</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <Button type="submit"> Update </Button>
          </Card.Body>
        </Card>
      </form>
    </>
  );
};

export default UpdateInvoice;
