import { IInvoice } from "../../../types/IInvoice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface InvoiceTableProps {
  invoice: IInvoice;
}

const InvoicesTable = ({ invoice }: InvoiceTableProps) => {
  // const navigate = useNavigate();
  // const handleRedirect = () => {
  //   navigate(`/invoices/${invoice.id}`);
  // };
  return (
    <tbody>
      <tr className="text-center">
        <td>{invoice.company}</td>
        <td>{invoice.client}</td>
        <td>{invoice.serial}</td>
        <td>{invoice.nr}</td>
        <td>{invoice.date}</td>
        <td>{invoice.price}</td>
        <td>{invoice.vat}</td>
        <td>
          <b>{invoice.total}</b>
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
            to="#"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Edit
          </NavLink>
        </td>
        <td>
          <NavLink to="#" style={{ color: "red", textDecoration: "underline" }}>
            Delete
          </NavLink>
        </td>
      </tr>
    </tbody>
  );
};

export default InvoicesTable;
