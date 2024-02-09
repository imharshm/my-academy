import React from "react";
import { Accordion, Button, Col, Container, Form, Image, Row, Tab, Tabs } from "react-bootstrap";
import GetHelpVideo from "./Courses/GetHelpVideo";
import Call from "../assets/img/banner/phonecall.svg";

const FAQs = () => {
  return (
    <>
      <section className="section">
        <Container>
          <div className="text-center">
            <Button variant="outline-primary" className="btn-txt-primary mb-3">
              Have Any Questions?
            </Button>
          </div>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <div className="mb-5">
            <Tabs defaultActiveKey="course-req" className="featured-course__tab mb-4">
              <Tab eventKey="course-req" title="Course Requirements">
                <Accordion className="row" defaultActiveKey="1">
                  <Col xs={12} md={6} className="mb-3 mb-md-0">
                    {[...Array(6)].map((_, i) => {
                      return (
                        <Accordion.Item eventKey={1} key={i}>
                          <Accordion.Header>Accordion Item {i + 1}</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Col>
                  <Col xs={12} md={6}>
                    {[...Array(6)].map((_, i) => {
                      return (
                        <Accordion.Item eventKey={0} key={i}>
                          <Accordion.Header>Accordion Item {i + 1}</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Col>
                </Accordion>
              </Tab>
              <Tab eventKey="about" title="About">
                Tab content for Profile
              </Tab>
              <Tab eventKey="instructors" title="Instructors">
                Tab content for Loooonger Tab
              </Tab>
              <Tab eventKey="pricing-package" title="Pricing Package">
                Tab content for Loooonger Tab
              </Tab>
            </Tabs>
          </div>
          <GetHelpVideo />
        </Container>
      </section>
      <section className="section">
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <Button className="btn-txt-primary">Get In Touch?</Button>
              <h3 className="fw-bold my-3">
                Have Any Question <br />
                On Minds ?
              </h3>
              <p className="mt-3">
                On the other hand we denounce with righteou indigntion and dislike men who are so
                beguiled and drem the charms of pleasure of the moment so blinded by desire
              </p>
              <div className="d-flex align-items-center mt-4">
                <Image src={Call} width={30} className="me-2" />
                <div>
                  <small>Have any Question?</small>
                  <h6 className="fw-bold mb-0">0203 9292013</h6>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7} className="mt-4 mt-md-0">
              <Form className="faq-form">
                <Row className="mb-3 mb-md-4">
                  <Form.Group
                    as={Col}
                    md={6}
                    controlId="firstName"
                    className="fname form-field mb-3 mb-md-0"
                  >
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md={6}
                    controlId="mobileNUmber"
                    className="mobile form-field"
                  >
                    <Form.Control type="tel" placeholder="Mobile Number" />
                  </Form.Group>
                </Row>
                <Row className="mb-3 mb-md-4">
                  <Form.Group
                    as={Col}
                    md={6}
                    controlId="emailAddress"
                    className="email form-field mb-3 mb-md-0"
                  >
                    <Form.Control type="text" placeholder="Email Address" />
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="subject" className="subject form-field">
                    <Form.Select defaultValue="Subject">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row className="mb-4 mb-md-5">
                  <Form.Group as={Col} controlId="description" className="description form-field">
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder="Why you would like to discuess"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    controlId="agree"
                    className="d-flex flex-column flex-md-row align-items-md-center"
                  >
                    <Button className="order-2 order-md-1 me-md-4">Send Message</Button>
                    <Form.Check
                      label="I ageree with the privacy policy"
                      name="group1"
                      type="radio"
                      id="agree"
                      className="mb-3 mb-md-0"
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FAQs;
