import React from "react";
import Banner from "./Common/Banner";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import BlogImg from "../assets/img/blog-img.svg";
import BlogImg1 from "../assets/img/blog-img-1.svg";

const BlogDetails = () => {
  return (
    <>
      <Banner title="Blog" breadcrumb={["Home", "Blog", "Blog Details"]} className="blog-bg" />
      <section className="section pb-0">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Image className="rounded course-img" src={BlogImg} />
              <h3 className="section-title text-start mt-3">
                When aeunkno printer took gallery of scrambled
              </h3>
              <ul className="course-detailed__ul d-flex mb-4">
                <li className="pe-2 pe-lg-4 border-end">
                  <a href="/#">
                    {/* <img src={CourseDesc} alt="" /> */}
                    Aim of Courses
                  </a>
                </li>
                <li className="pe-2 pe-lg-4 border-end">
                  <a href="/#">
                    {/* <img src={Target} alt="" /> */}
                    Target Audience
                  </a>
                </li>
              </ul>

              <h4 className="fw-bold">During the Program</h4>
              <p>
                This short course is aimed at those working in Health or social care settings. The
                objectives introduce Signs and symptoms of abuse, gives an overview of allegations
                and how to deal with these, support awareness of national and local policies and how
                to record and report
              </p>
              <p>
                This short course is aimed at those working in Health or social care settings. The
                objectives introduce Signs and symptoms of abuse, gives an overview of allegations
                and how to deal with these, support awareness of national and local policies and how
                to record and report
              </p>
              <div className="d-flex align-items-center border-top border-bottom py-2 my-5">
                <h6 className="m-0 me-2">Tags: </h6>
                {[...Array(5)].map(() => {
                  return <Button className="btn-txt-primary px-3 py-1 me-2">Tag1</Button>;
                })}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <Card className="p-4">
                <div className="px-2">
                  <h5 className="fw-bold mb-3">Recent Blogs</h5>
                  {[...Array(5)].map(() => {
                    return (
                      <div className="d-flex mb-3">
                        <Image className="mw-100 me-2" src={BlogImg1} />
                        <div>
                          <h6 className="fw-bold font-14 m-0">How to Learn Basic Web (U) Design</h6>
                          <small className="font-12">25 Dec, 2023</small>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
