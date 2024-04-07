import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FB from "../assets/img/fb.svg";
import IG from "../assets/img/ig.svg";
import LinkedIn from "../assets/img/linkedin.svg";
import TopArrow from "../assets/img/top-arrow.svg";
import Logo from "../assets/img/logo-light.svg";
import WriteUs from "./Common/WriteUs";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <WriteUs />
      <Container>
        <Row className="footer-top">
          <Col xs={12} lg={9}>
            <Row>
              <Col xs={6} md={3} className="order-4 order-md-0">
                <img src={Logo} alt="" className="d-none d-md-block mb-3" />
                <p className="m-0">
                  Sit amet consectetur adipiscin seeiusmod tempor incididunt ut dolore magna aliqu
                  asusp disse ultrices gravida commodo
                </p>
              </Col>
              <Col xs={6} md={3} className="order-1 order-md-1 mb-5 mb-md-0">
                <h6>Menu</h6>
                <ul className="ps-3">
                  <li className="mb-3">Home</li>
                  <li className="mb-3">All Courses</li>
                  <li className="mb-3">Contact Us</li>
                  <li className="mb-3">Blogs</li>
                </ul>
              </Col>
              <Col xs={6} md={3} className="order-2 order-md-2">
                <h6>Information</h6>
                <ul className="ps-3">
                  <li className="mb-3">About Us</li>
                  <li className="mb-3">FAQ's</li>
                  <li className="mb-3">Terms &amp; Conditions</li>
                  <li className="mb-3">Privacy Policy</li>
                </ul>
              </Col>
              <Col xs={6} md={3} className="order-3 order-md-3">
                <h6>Get In Touch</h6>
                <ul className="list-unstyled get-in-touch__ul">
                  <li className="address">55 Main Street, 2nd Block, New York</li>
                  <li className="email text-break">info@CareTrainings.com</li>
                  <li className="phone">0203 9292013</li>
                  <li className="timing">
                    Sunday - Friday <br />
                    08 AM - 05 PM
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} className="d-none d-lg-block ps-5">
            <h6>Follow Us</h6>
            <ul className="list-unstyled follow-us__ul">
              <li>
                <a href="/#">
                  <img src={FB} alt="" /> Facebook
                </a>
              </li>
              <li>
                <a href="/#">
                  <img src={IG} alt="" /> Instagram
                </a>
              </li>
              <li>
                <a href="/#">
                  <img src={LinkedIn} alt="" /> LinkedIn
                </a>
              </li>
            </ul>
            <img src={Logo} alt="" className="d-block d-md-none" />
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <Container className="copyright-container">
          &copy;2024 Care Trainings All rights reserved
          <Button onClick={handleScrollTop} className="top-arrow">
            <img src={TopArrow} alt="" />
          </Button>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
