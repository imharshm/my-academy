import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CourseCard from "./Common/CourseCard";

const Blog = () => {
  return (
    <section className="section">
      <Container>
        <div className="text-center">
          <Button variant="outline-primary" className="btn-txt-primary mb-3">
            New Blog
          </Button>
        </div>
        <h2 className="section-title">
          News &amp; <span>Blogs</span>
        </h2>
        <Row>
          {[...Array(4)].map((_, i) => {
            return (
              <Col className="courses-card" xs={12} md={4} lg={3} key={i}>
                <CourseCard timing="Jan 24, 2024" />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
