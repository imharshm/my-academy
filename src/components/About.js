import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Book from "../assets/img/book.svg";
import Team from "../assets/img/team.svg";
import Testimonial from "./Common/Testimonial";
import GlobalPartners from "./Common/GlobalPartners";
import GetHelpVideo from "./Courses/GetHelpVideo";

const About = () => {
  return (
    <>
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
            {[...Array(3)].map((_, i) => {
              return (
                <Col xs={12} md={4} className="mb-3 mb-md-0" key={i}>
                  <Card>
                    <Card.Body className="p-4 pb-3">
                      <Image src={Book} width={40} className="mb-3" />
                      <h6 className="fw-bold mb-2">Experts Minds</h6>
                      <p>Sed ut persiciatis omnis natus voluptate accsantie doloreue laudantium</p>
                      <Button variant="link" className="p-0">
                        <i className="material-icons text-warning">east</i>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="section light-gray-section">
        <Container className="mb-5">
          <div className="text-center mb-3">
            <Button className="btn-txt-primary">Meet Our Team</Button>
          </div>
          <h4 className="section-title">
            We’ve Thousands Of Experience <br />
            <span>Team</span> Members
          </h4>
          <Row>
            {[...Array(4)].map((_, i) => {
              return (
                <Col xs={12} md={3} className="mb-3 m-md-0" key={i}>
                  <Card className="border-0 text-center">
                    <Image src={Team} className="rounded team-member-img mb-3" />
                    <h4 className="fw-bold font-18 m-0">Roger Korsgaard</h4>
                    <span className="text-primary">Senior Manager</span>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <GetHelpVideo />
        </Container>
        <Testimonial />
      </section>
      <section className="section even">
        <Container>
          <GlobalPartners />
        </Container>
      </section>
    </>
  );
};

export default About;
