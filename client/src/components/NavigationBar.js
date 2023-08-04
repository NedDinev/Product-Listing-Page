import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { data } from "../data";

export default function NavigationBar() {
  const categories = [
    ...new Set(data.products.map((product) => product.category)),
  ]; // Extracting unique categories from the data

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/C4-Jewelry-Logo.png"
            className="logo"
            alt="C4 Jewelry"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end ">
            {categories.map((currentCategory) => (
              <Nav.Item
                key={currentCategory}
                as={Link}
                to={`/category/${currentCategory}`}
                className="nav-link text-center"
              >
                {currentCategory.toUpperCase()}
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
