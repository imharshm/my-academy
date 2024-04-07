import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import SearchDark from "../assets/img/search-dark.svg";
import UserCircle from "../assets/img/UserCircle.svg";

const Header = () => {
  const menuList = [
    {
      title: "Home",
      path: "",
    },
    { title: "All Courses", path: "AllCourses" },
    { title: "About Us", path: "About" },
    { title: "Pricing", path: "Pricing" },
    { title: "Blog", path: "Blog" },
    { title: "FAQ's", path: "FAQ's" },
    { title: "Contact Us", path: "ContactUs" },
  ];
  const pathname = useLocation().pathname;

  return (
    <Navbar sticky="top" className="bg-white shadow-sm" collapseOnSelect expand="xl">
      <Container className="p-0">
        <Navbar.Brand as={Link} href="/">
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top me-2" />
          My Academy
        </Navbar.Brand>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>My Academy</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="align-items-center pt-0">
            <NavDropdown
              title="Categories"
              className={classNames("mb-2 mb-xl-0", { "mx-xl-4": pathname === "/" })}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav className={pathname === "/" ? "me-auto" : "me-3"}>
              {menuList.map((menu) => {
                return (
                  <Link
                    className={classNames("nav-link", { active: pathname === `/${menu.path}` })}
                    to={menu.path.replace(/[-\s]/g, "")}
                    key={menu}
                  >
                    {menu.title}
                  </Link>
                );
              })}
            </Nav>
            <Nav className="d-flex flex-row ms-auto">
              {pathname === "/" && (
                <>
                  <Button variant="primary" className="me-2">
                    Sign In
                  </Button>
                  <Button variant="warning" className="text-white">
                    Sign Up
                  </Button>
                </>
              )}
              {pathname !== "/" && (
                <>
                  <InputGroup className="header-input d-none d-xl-flex">
                    <Form.Control
                      placeholder="What do you want to learn ?"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="py-1 px-3">
                      <img src={SearchDark} alt="" />
                    </div>
                  </InputGroup>
                  <Button variant="warning" className="text-nowrap text-white ms-3">
                    <img src={UserCircle} alt="" /> My Account
                  </Button>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
      </Container>
    </Navbar>
  );
};

export default Header;
