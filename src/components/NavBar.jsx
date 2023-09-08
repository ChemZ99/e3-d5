import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-bootstrap-icons";
import logo from "./assets/logo.png";

class NavBar extends Component {
  render() {
    return (
      <Navbar className="justify-content-between" bg="dark" data-bs-theme="dark" expand="lg">
        <img height="70px" src={logo} alt="logo" />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-white me-auto">
              <Nav.Link className="fw-bold fs-5" href="#">
                Home
              </Nav.Link>
              <Nav.Link className="fw-bold fs-5" href="#">
                TV Shows
              </Nav.Link>
              <Nav.Link className="fw-bold fs-5" href="#">
                Movies
              </Nav.Link>
              <Nav.Link className="fw-bold fs-5" href="#">
                Recently Added
              </Nav.Link>
              <Nav.Link className="fw-bold fs-5" href="#">
                My List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="d-flex justify-content-end pe-4" id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#">
                <Icon.Search color="white" />
              </Nav.Link>
              <Nav.Link href="#">KIDS</Nav.Link>
              <Nav.Link href="#">
                <Icon.BellFill color="white" />
              </Nav.Link>
              <Nav.Link href="#">
                <Icon.PersonFill color="white" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
