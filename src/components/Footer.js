import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FB from "../assets/img/fb.svg";
import IG from "../assets/img/ig.svg";
import LinkedIn from "../assets/img/linkedin.svg";
import TopArrow from "../assets/img/top-arrow.svg";
import Logo from "../assets/img/logo-light.svg";
import DummyImg from "../assets/img/dummy-1.svg";

const Footer = () => {
  const coursesList = [
    {
      name: "Life Coach",
      title: "",
    },
    {
      name: "Business Coach",
      title: "",
    },
    {
      name: "Health Coach",
      title: "",
    },
    {
      name: "Development",
      title: "",
    },
    {
      name: "Web Design",
      title: "",
    },
    {
      name: "SEO Optimize",
      title: "",
    },
  ];
  return (
    <footer>
      <Container>
        <Row className="footer-top">
          <Col xs={12} md={9}>
            <Row>
              <Col xs={6} md={3} className="order-4 order-md-0">
                <h6>About Us</h6>
                <p>
                  Sit amet consectetur adipiscin seeiusmod tempor incididunt ut dolore magna aliqu
                  asusp disse ultrices gravida commodo
                </p>
                <img src={Logo} alt="" className="d-none d-md-block" />
              </Col>
              <Col xs={6} md={3} className="order-1 order-md-1 mb-3 mb-md-0">
                <h6>Courses</h6>
                <ul className="ps-3">
                  {coursesList.map((course, i) => {
                    return (
                      <li className="mb-3" key={i}>
                        {course.name}
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col xs={6} md={3} className="order-2 order-md-2">
                <h6>Get In Touch</h6>
                <ul className="list-unstyled get-in-touch__ul">
                  <li className="address">55 Main Street, 2nd Block, New York</li>
                  <li className="email">info@CareTrainings.com</li>
                  <li className="phone">0203 9292013</li>
                  <li className="timing">
                    Sunday - Friday <br />
                    08 AM - 05 PM
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={3} className="order-3 order-md-3">
                <h6>Follow Us</h6>
                <ul className="list-unstyled follow-us__ul">
                  <li>
                    <a href="/#">
                      <img src={FB} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src={IG} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <img src={LinkedIn} alt="" />
                    </a>
                  </li>
                </ul>
                <img src={Logo} alt="" className="d-block d-md-none" />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} className="d-none d-md-block">
            <p>Quis autem vel eum iure repre enderit voluptate</p>
            <img src={DummyImg} alt="" />
            <Button variant="link" className="text-white text-decoration-none p-0 mt-2">
              VIEW MORE
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <Container className="copyright-container">
          <div>&copy;2024 Care Trainings All rights reserved</div>
          <div className="top-arrow">
            <img src={TopArrow} alt="" />
          </div>
          <div className="d-none d-md-flex">
            <ul className="list-unstyled">
              <li>
                <a href="/#">FAQs</a>
              </li>
              <li>
                <a href="/#">Links</a>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Payments</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
