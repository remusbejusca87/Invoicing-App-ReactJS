import { IInvoice } from "../../../types/IInvoice";
import "react-bootstrap";
import { Button, Card, NavLink } from "react-bootstrap";

interface InvoiceDetailsProps {
  invoice: IInvoice;
}

const InvoiceDetails = ({ invoice }: InvoiceDetailsProps) => {
  return (
    <Card style={{ width: "80%" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default InvoiceDetails;
