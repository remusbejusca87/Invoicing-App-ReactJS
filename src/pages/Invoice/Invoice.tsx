import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useInvoice from "../../hooks/useInvoice";
import InvoiceDetails from "./components/InvoiceDetails";

const Invoice = () => {
  const { id } = useParams();
  const { invoice, isError, isLoading } = useInvoice(id || "");

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
  return <InvoiceDetails invoice={invoice} />;
};

export default Invoice;
