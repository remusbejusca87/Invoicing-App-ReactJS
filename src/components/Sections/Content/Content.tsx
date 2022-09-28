import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface IContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  return (
    <Container style={{ backgroundColor: "#f5f5dc", minHeight: "100vh" }}>
      <Row>
        <Col> {children} </Col>
      </Row>
    </Container>
  );
};

export default Content;
