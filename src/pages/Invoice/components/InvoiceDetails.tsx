import { IInvoice } from "../../../types/IInvoice";
import "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";

interface InvoiceDetailsProps {
  invoice: IInvoice;
}

const InvoiceDetails = ({ invoice }: InvoiceDetailsProps) => {
  const totalValue = parseInt(
    (invoice.itemAmount * invoice.itemPrice).toFixed(2)
  );
  return (
    <>
      <div style={{ width: "80%", margin: "0 auto", marginTop: "1rem" }}>
        <NavLink to="/invoices">
          <Button variant="secondary">Back</Button>
        </NavLink>
        <NavLink to={`/invoices/edit/${invoice.id}`}>
          <Button variant="primary" style={{ marginLeft: "15px" }}>
            Edit
          </Button>
        </NavLink>
      </div>

      <Card
        style={{
          width: "80%",
          margin: "0 auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Card.Body>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col-auto">
              Company: <strong> {invoice.company} </strong> <br />
              <CompanyDetails
                reg={(Math.random() + 1)
                  .toString(36)
                  .substring(7)
                  .toUpperCase()}
                cui={(Math.random() + 1)
                  .toString(36)
                  .substring(2)
                  .toUpperCase()}
                office={
                  (Math.random() + 1)
                    .toString(36)
                    .substring(7)
                    .charAt(0)
                    .toUpperCase() +
                  (Math.random() + 1).toString(36).substring(7).slice(1)
                }
                account={(Math.random() + 1)
                  .toString(36)
                  .substring(2)
                  .toUpperCase()}
                bank={(Math.random() + 1)
                  .toString(36)
                  .substring(2)
                  .toUpperCase()}
                capital={Math.floor(Math.random() * 100) + 10}
                vat={19}
              />
            </div>
            <div className="col-auto">
              Client: <strong> {invoice.client} </strong> <br />
              <CompanyDetails
                reg={(Math.random() + 1)
                  .toString(36)
                  .substring(7)
                  .toUpperCase()}
                cui={(Math.random() + 1)
                  .toString(36)
                  .substring(2)
                  .toUpperCase()}
                office={
                  (Math.random() + 1)
                    .toString(36)
                    .substring(7)
                    .charAt(0)
                    .toUpperCase() +
                  (Math.random() + 1).toString(36).substring(7).slice(1)
                }
                account={(Math.random() + 1)
                  .toString(36)
                  .substring(2)
                  .toUpperCase()}
                bank={(Math.random() + 1)
                  .toString(36)
                  .substring(2)
                  .toUpperCase()}
                capital={Math.floor(Math.random() * 100) + 10}
                vat={19}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <div className="d-flex justify-content-center pb-4">
                <h3> INVOICE </h3>
              </div>
              <div className="d-flex justify-content-center">
                Serial: <strong> {invoice.serial} </strong>
              </div>
              <div className="d-flex justify-content-center">
                No.: <strong> {invoice.nr} </strong>
              </div>
              <div className="d-flex justify-content-center">
                Date: <strong> {invoice.date} </strong>
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
                <td> {invoice.itemName}</td>
                <td> {invoice.itemUnit} </td>
                <td> {invoice.itemAmount} </td>
                <td> {invoice.itemPrice}</td>
                <td> {totalValue}</td>
                <td>{(totalValue * 0.19).toFixed(2)}</td>
                <th colSpan={3}></th>
              </tr>
              <tr className="text-center">
                <th scope="row"></th>
                <td colSpan={3}></td>
                <td>Total:</td>
                <td>
                  <strong>{totalValue.toFixed(2)} </strong>
                </td>
                <td>
                  <strong> {(totalValue * 0.19).toFixed(2)} </strong>
                </td>
              </tr>
              <tr className="text-center">
                <th scope="row"></th>
                <td colSpan={3}></td>
                <td className="fs-5">Total payment</td>
                <td colSpan={2} className="fs-5">
                  <strong>{(totalValue + totalValue * 0.19).toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </>
  );
};

export default InvoiceDetails;
