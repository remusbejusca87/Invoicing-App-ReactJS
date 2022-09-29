import React from "react";

const InvoicesTableHead = () => {
  return (
    <thead style={{ backgroundColor: "#26272b", color: "white" }}>
      <tr className="text-center">
        <th>Company</th>
        <th>Client</th>
        <th>Serial</th>
        <th>Number</th>
        <th>Date</th>
        <th>Value</th>
        <th>VAT</th>
        <th>Total Value</th>
        <th colSpan={3}></th>
      </tr>
    </thead>
  );
};

export default InvoicesTableHead;
