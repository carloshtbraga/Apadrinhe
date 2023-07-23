import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "../../src/images/logo2.webp";
import "../styles/Header.css";
import coin from "../../src/images/coin.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary header">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <img className="logoheader" src={logo2} alt="" width="100px" />
        <Navbar.Brand href="#">
          <h3>Apadrinhe um sorriso</h3>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className="nav"
              target="_blank"
              href="https://www.facebook.com/apadrinheumsorrisoPQM/?locale=pt_BR"
            >
              Facebook
            </Nav.Link>

            <Nav.Link
              className="nav"
              href="https://www.instagram.com/apadrinheumsorrisooficial/"
              target="_blank"
            >
              <p>Instagram</p>
            </Nav.Link>
            <Nav.Link className="nav" href="#equipe">
              <p>Equipe</p>
            </Nav.Link>
            <Nav.Link
              className="nav"
              href="https://www.vakinha.com.br/3855330"
              target="_blank"
            >
              <p>Doar</p>
            </Nav.Link>
          </Nav>
          <Navbar.Brand
            href="https://www.vakinha.com.br/3855330"
            target="_blank"
          >
            <h3 className="doar">Doar</h3>
          </Navbar.Brand>
          <Navbar.Brand className="doar">
            <a href="https://www.vakinha.com.br/3855330" target="_blank" rel="noreferrer">
              <img width="80px" src={coin} alt="" />
            </a>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
