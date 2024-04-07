import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Testimonial from "./Common/Testimonial";
import GlobalPartners from "./Common/GlobalPartners";
import GetHelpVideo from "./Courses/GetHelpVideo";
import Banner from "./Common/Banner";
import About1 from "../assets/img/about-learn-1.svg";
import About2 from "../assets/img/about-learn-2.svg";

const About = () => {
  return (
    <>
      <Banner title="About" breadcrumb={["Home", "About Us"]} className="about-bg" />
      <section className="section">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Button className="btn-txt-primary mb-3">About Learn Us</Button>
              <h4 className="section-title text-start mb-3">
                We're Experience To <br /> Online Education <br />
                Learning Center
              </h4>
              <span className="text-secondary">
                Why Students Choose Us for Gain Their Knowledge
              </span>
              <p className="mt-3">
                Helping employees gain skills and providing career development often take a back
                seat to business priorities but workplace better right now. Seventy percent of
                workers think that.
              </p>
              <Button className="px-4">How It Work</Button>
            </Col>
            <Col xs={12} md={6}>
              <div className="about-banner mt-4 mt-md-0"></div>
            </Col>
            <Col
              xs={12}
              md={2}
              className="d-flex flex-row flex-md-column justify-content-around mt-4 mt-md-0"
            >
              <div className="d-flex flex-column">
                <h3 className="text-warning fw-bold m-0">256+</h3>
                <span className="font-12">Enrolled Learner</span>
              </div>
              <div className="d-flex flex-column">
                <h3 className="text-warning fw-bold m-0">2.36+</h3>
                <span className="font-12">Finished Session</span>
              </div>
              <div className="d-flex flex-column">
                <h3 className="text-warning fw-bold m-0">99%</h3>
                <span className="font-12">Satisfaction Rate</span>
              </div>
              <div className="d-flex flex-column">
                <h3 className="text-warning fw-bold m-0">83+</h3>
                <span className="font-12">Awards Winning</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section even">
        <Container>
          <div className="text-center mb-3">
            <Button className="btn-txt-primary">How About Learn Us</Button>
          </div>
          <h4 className="section-title">
            Opportunity For Online <span>Learning</span>
          </h4>
          <Row>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card>
                <Card.Body className="p-4 pb-3">
                  <Image src={About1} width={40} className="mb-3" />
                  <h6 className="fw-bold mb-2">Care Trainings</h6>
                  <p>
                    Care Trainings is a leading training and apprenticeship provider based in London
                    operating across the whole of England.
                  </p>
                  <Button variant="link" className="p-0">
                    <i className="material-icons text-success">east</i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card>
                <Card.Body className="p-4 pb-3">
                  <Image src={About2} width={40} className="mb-3" />
                  <h6 className="fw-bold mb-2">Universal Vibes</h6>
                  <p>
                    Care Trainings is a leading training and apprenticeship provider based in London
                    operating across the whole of England.
                  </p>
                  <Button variant="link" className="p-0">
                    <i className="material-icons text-danger">east</i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card>
                <Card.Body className="p-4 pb-3">
                  <Image src={About1} width={40} className="mb-3" />
                  <h6 className="fw-bold mb-2">My Academy</h6>
                  <p>
                    Care Trainings is a leading training and apprenticeship provider based in London
                    operating across the whole of England.
                  </p>
                  <Button variant="link" className="p-0">
                    <i className="material-icons text-primary">east</i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section light-gray-section">
        <GetHelpVideo />
      </section>

      <section className="section even">
        <Testimonial />
      </section>
      <section className="section">
        <Container>
          <GlobalPartners />
        </Container>
      </section>
    </>
  );
};

export default About;
