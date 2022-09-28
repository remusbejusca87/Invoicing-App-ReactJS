import InvoicesTableHead from "./components/InvoicesTableHead";
import InvoicesTableBody from "./components/InvoicesTableBody";
import Title from "../../components/Title/Title";
import { Table, Button } from "react-bootstrap";
import { IInvoice } from "../../types/IInvoice";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import useInvoices from "../../hooks/useInvoices";
import { NavLink as RouterNavLink } from "react-router-dom";

const Invoices = () => {
  const { isLoading, isError, invoices } = useInvoices();

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError) {
    return (
      <Alert
        variant="danger"
        style={{ marginTop: "0.75rem" }}
        className="fw-bold"
      >
        Ups! Something went wrong :(
      </Alert>
    );
  }

  return (
    <>
      <Title title="My Invoices" />
      <RouterNavLink to={`/invoices/new`}>
        <Button variant="primary" style={{ marginBottom: "15px" }}>
          New Invoice
        </Button>
      </RouterNavLink>

      <Table striped bordered hover size="sm">
        <InvoicesTableHead />
        {invoices.map((invoice: IInvoice) => (
          <InvoicesTableBody
            invoice={invoice}
            key={invoice.id}
          ></InvoicesTableBody>
        ))}
      </Table>
    </>
  );
};

export default Invoices;
