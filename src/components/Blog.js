import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CourseCard from "./Common/CourseCard";
import Banner from "./Common/Banner";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Banner title="Blog" breadcrumb={["Home", "Blog"]} className="blog-bg" />
      <section className="section even">
        <Container>
          <div className="text-center">
            <Button variant="outline-primary" className="btn-txt-primary mb-3">
              Blog Section
            </Button>
          </div>
          <h2 className="section-title">
            Blogs &amp; <span>News</span>
          </h2>
          <Row>
            {[...Array(4)].map((_, i) => {
              return (
                <Col className="courses-card" xs={12} md={4} lg={3} key={i}>
                  <Link to="/Blog/BlogDetails" className="text-decoration-none">
                    <CourseCard timing="Jan 24, 2024" />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
