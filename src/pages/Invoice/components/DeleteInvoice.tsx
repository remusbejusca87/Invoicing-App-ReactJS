import { Alert, Button, NavLink } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useDeleteInvoice from "../../../hooks/useDeleteInvoice";

const DeleteInvoice = () => {
  const { id } = useParams();
  const { deleteInvoice } = useDeleteInvoice(id || "");

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/invoices");
  };

  const handleDelete = () => {
    deleteInvoice(id || "");
    handleRedirect();
  };

  return (
    <>
      <Alert
        variant="danger"
        style={{ width: "50%", margin: "0 auto", marginTop: "20px" }}
      >
        <Alert.Heading>
          Are you sure you want to delete this invoice?
        </Alert.Heading>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handleRedirect}
            variant="secondary"
            style={{ width: "150px" }}
          >
            NO
          </Button>
          <Button
            onClick={handleDelete}
            variant="danger"
            style={{ width: "150px" }}
          >
            YES
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default DeleteInvoice;
