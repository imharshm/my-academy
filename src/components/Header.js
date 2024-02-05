import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Form, InputGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import logoLight from "../assets/img/logo-light.svg";
import Search from "../assets/img/banner/search.svg";

const Header = () => {
  const menuList = ["Home", "All Courses", "About", "Blog", "FQA's", "My Profile", "Contact Us"];
  const pathname = useLocation().pathname;

  return (
    <Container fluid className={classNames("p-0", { "header-bg": pathname !== "/Home" })}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={pathname === "/Home" ? logo : logoLight}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            {pathname === "/Home" && "My Academy"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 p-0" />
          <Navbar.Collapse className="mt-3 mt-md-0">
            <NavDropdown
              title="Categories"
              className={classNames({ "mx-md-4": pathname === "/Home" })}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav className={pathname === "/Home" ? "me-auto" : "me-3"}>
              {menuList.map((menu) => {
                console.log(menu.replace(/[-\s]/g, ""));
                return (
                  <Link
                    className={classNames("nav-link", { active: pathname === `/${menu}` })}
                    to={menu.replace(/[-\s]/g, "")}
                    key={menu}
                  >
                    {menu}
                  </Link>
                );
              })}
            </Nav>
            <Nav className="d-flex flex-row mt-3 mt-md-0 ms-auto">
              {pathname === "/Home" && (
                <>
                  <Button variant="primary" className="me-2">
                    Sign In
                  </Button>
                  <Button variant="warning" className="text-white">
                    Sign Up
                  </Button>
                </>
              )}
              {pathname !== "/Home" && (
                <>
                  <InputGroup className="header-input">
                    <Form.Control
                      placeholder="What do you want to learn ?"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="py-1 px-3">
                      <img src={Search} alt="" />
                    </div>
                  </InputGroup>
                  <Button variant="warning" className="text-nowrap text-white ms-3">
                    My Profile
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {pathname !== "/Home" && (
        <Container className="title-container text-center">
          <h1 className="fw-bold text-white">All Courses</h1>
          <p className="desc d-none d-md-block">Below is a list of all available courses</p>
          <ul className="d-flex align-items-center justify-content-center list-unstyled m-0 p-0">
            <li className="text-white me-3">Home</li>
            <span className="text-white me-3">{">>"}</span>
            <li className="highlight">All Courses</li>
          </ul>
        </Container>
      )}
    </Container>
  );
};

export default Header;
