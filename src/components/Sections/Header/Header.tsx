import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        // bg="dark"
        variant="dark"
        style={{ backgroundColor: "#26272b" }}
      >
        <Container fluid>
          <FaFileInvoiceDollar
            style={{ color: "#1e90ff", width: "30", height: "30" }}
          />
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/invoices"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Invoices
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
