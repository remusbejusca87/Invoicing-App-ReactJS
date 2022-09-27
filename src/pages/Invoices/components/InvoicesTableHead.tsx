import React from "react";
import Table from "react-bootstrap/Table";

const InvoicesTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Company</th>
        <th>Client</th>
        <th>Serial</th>
        <th>Number</th>
        <th>Date</th>
        <th>Price</th>
        <th>VAT</th>
        <th>Total</th>
        <th colSpan={3}></th>
      </tr>
    </thead>
  );
};

export default InvoicesTableHead;
