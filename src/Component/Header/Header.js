import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-cont d-flex align-items-center pt-5">
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="navlink" to="/home">
                Home
              </Link>
              <Link className="navlink" to="/projects">
                Projects
              </Link>
              <Link className="navlink" to="/about">
                About
              </Link>

              <a
                href="https://drive.google.com/file/d/1stPB-XgIULyCKw9a4Bp-KkAQbZYiIbwl/view?usp=sharing"
                className="navlink"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1stPB-XgIULyCKw9a4Bp-KkAQbZYiIbwl/view?usp=sharing"
                className="navlink"
              >
                Resume
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-right">
        <a
          href="https://www.linkedin.com/in/sheikh-asif-ahmed-1022131ba/"
          className="navlink"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/sheikhasifahmed" className="navlink">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
