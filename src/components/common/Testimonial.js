import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import User from "../../assets/img/user.svg";
import Rating from "../../assets/img/5-star.svg";

const Testimonial = () => {
  return (
    <Container>
      <div className="text-center">
        <Button variant="outline-primary" className="btn-txt-primary mb-3">
          Testimonials
        </Button>
      </div>
      <h2 className="section-title">
        What Students Think and <span>Say</span>
        <br />
        About My Academy
      </h2>
      <Row className="testimonials-wrapper">
        {[...Array(3)].map((_, i) => {
          return (
            <Col key={i} xs={12} md={4} className="testimonials-card mb-3">
              <Card>
                <Card.Header className="d-flex align-items-center px-1">
                  <Image src={User} roundedCircle className="user-img me-2" />
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="m-0">Brandon Tylor</h6>
                    <small className="text-secondary">Food Hygiene</small>
                  </div>
                </Card.Header>
                <Card.Body className="px-0">
                  <Image src={Rating} className="mb-3" />
                  <h5 className="text-primary">Best Experience !</h5>
                  <p className="m-0">
                    In every software-as-a-service solution, user billing and payments are key
                    aspects in the sale of services rendered. Let's Learn about Stripe the metal
                    mates
                  </p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Testimonial;
