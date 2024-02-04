import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

const Header = () => {
  const menuList = [
    {
      title: "Home",
      component: "",
    },
    {
      title: "About",
      component: "",
    },
    {
      title: "All Courses",
      component: "",
    },
    {
      title: "Blog",
      component: "",
    },
    {
      title: "FQA's",
      component: "",
    },
    {
      title: "My Profile",
      component: "",
    },
    {
      title: "Contact Us",
      component: "",
    },
  ];
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top me-2" />
          My Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 p-0" />
        <Navbar.Collapse className="mt-3">
          <NavDropdown title="Categories" className="mx-md-4">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav className="me-auto">
            {menuList.map((menu) => {
              return (
                <Nav.Link href="#features" key={menu.title}>
                  {menu.title}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="d-flex flex-row mt-3 mt-md-0">
            <Button variant="primary" className="me-2">
              Sign In
            </Button>
            <Button variant="warning" className="text-white">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
