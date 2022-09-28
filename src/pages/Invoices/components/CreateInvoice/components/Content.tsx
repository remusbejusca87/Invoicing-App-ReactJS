import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const Content = () => {
  // const [itemName, setItemName] = useState("");
  // const [itemUnit, setItemUnit] = useState("");
  // const [itemAmount, setItemAmount] = useState(0);
  // const [itemPrice, setItemPrice] = useState(0);
  return (
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
                // onChange={(e) => setItemName(e.target.value)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                // value={itemName}
                id="itemName"
              />
            </InputGroup>
          </td>
          <td>
            <InputGroup className="mb-3">
              <Form.Control
                // onChange={(e) => setItemUnit(e.target.value)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                // value={itemUnit}
                id="itemUnit"
              />
            </InputGroup>
          </td>
          <td>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                // onChange={(e) => setItemAmount(Number(e.target.value))}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                // value={itemAmount}
                id="itemAmount"
              />
            </InputGroup>
          </td>
          <td>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                // onChange={(e) => setItemPrice(Number(e.target.value))}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                // value={itemPrice}
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
  );
};

export default Content;
