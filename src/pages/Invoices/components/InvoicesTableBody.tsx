import { IInvoice } from "../../../types/IInvoice";
import { NavLink } from "react-router-dom";

interface InvoiceTableProps {
  invoice: IInvoice;
}

const InvoicesTable = ({ invoice }: InvoiceTableProps) => {
  const total = parseInt((invoice.itemAmount * invoice.itemPrice).toFixed(2));
  const totalValue = total + total * 0.19;
  return (
    <tbody>
      <tr className="text-center">
        <td>{invoice.company}</td>
        <td>{invoice.client}</td>
        <td>{invoice.serial}</td>
        <td>{invoice.nr}</td>
        <td>{invoice.date}</td>
        <td>{total.toFixed(2)}</td>
        <td>{(total * 0.19).toFixed(2)}</td>
        <td>
          <b>{totalValue.toFixed(2)}</b>
        </td>
        <td>
          <NavLink
            to={`/invoices/${invoice.id}`}
            style={{ color: "gray", textDecoration: "underline" }}
          >
            Show
          </NavLink>
        </td>
        <td>
          <NavLink
            to={`/invoices/edit/${invoice.id}`}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Edit
          </NavLink>
        </td>
        <td>
          <NavLink
            to={`/invoices/delete/${invoice.id}`}
            style={{ color: "red", textDecoration: "underline" }}
          >
            Delete
          </NavLink>
        </td>
      </tr>
    </tbody>
  );
};

export default InvoicesTable;
