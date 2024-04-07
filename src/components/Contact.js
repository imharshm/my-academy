import React from "react";
import Banner from "./Common/Banner";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Phone from "../assets/img/phone-1.svg";
import Email from "../assets/img/email.svg";
import Location from "../assets/img/location.svg";
import FB from "../assets/img/fb-1.svg";

const Contact = () => {
  return (
    <>
      <Banner title="Contact Us" breadcrumb={["Home", "Contact Us"]} className="contact-bg" />
      <section className="section pb-0">
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} lg={7}>
              <Button variant="outline-primary" className="btn-txt-primary mb-3">
                Need Any Helps?
              </Button>
              <h3 className="section-title text-start">Contact For Information</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis
                et quasi architecto
              </p>
              <Form className="contact-form">
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Control placeholder="Mobile Number" />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Control placeholder="Subject" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Why you would like to discuss"
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="d-flex mb-3">
                  <Form.Check className="me-2" id="formGridCheckbox" />
                  <Form.Label htmlFor="formGridCheckbox">
                    I agree to the Terms & Conditions
                  </Form.Label>
                </Form.Group>

                <Button className="mb-3 mb-lg-5 px-5" variant="primary" type="submit">
                  Send Your Message
                </Button>
              </Form>
            </Col>
            <Col xs={12} lg={4} className="contact-info pt-4 mb-5 mb-lg-0">
              <Card className="shadow border-0 p-4">
                <div className="d-flex align-items-start mb-4">
                  <img className="me-2 mt-1" src={Location} alt="" />
                  <div>
                    <span className="text-primary">Location</span>
                    <div>Abbot Kinney Blvd. New York, USA-5785</div>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <img className="me-2 mt-1" src={Email} alt="" />
                  <div>
                    <span className="text-primary">Email</span>
                    <div>info@CareTrainings.com</div>
                    <div>info@MyAcademy.co.uk</div>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <img className="me-2 mt-1" src={Phone} alt="" />
                  <div>
                    <span className="text-primary">Phone</span>
                    <div>Mobile : 0203 9292013</div>
                    <div>Hotline : 0203 9292013</div>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <img className="invisible me-2 mt-1" src={Phone} alt="" />
                  <div>
                    <span className="text-primary">Follow Us</span>
                    <div className="mt-1">
                      <img src={FB} alt="" />
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
