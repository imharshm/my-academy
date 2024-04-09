import React from "react";
import { Badge, Button, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import Books from "../../assets/img/books.svg";
import Notes from "../../assets/img/notepad.svg";
import Banner from "../Common/Banner";
import { Link } from "react-router-dom";

const MyCourses = () => {
  return (
    <>
      <Banner
        title="Welcome UserName"
        desc="Below is a list of all available courses"
        breadcrumb={["Home", "My Courses"]}
      />
      <section className="section">
        <Container>
          <div className="text-center">
            <Button className="btn-txt-primary mb-3">My Courses</Button>
            <h2 className="section-title">
              List of Active <span>Courses</span>
            </h2>
          </div>
          <Row>
            {[...Array(10)].map(() => {
              return (
                <Col xs={12} md={6} lg={3}>
                  <Link className="text-decoration-none" to="/MyCourses/MyCoursesDetails">
                    <Card className="my-course__card mb-3">
                      <Card.Header>
                        <Badge className="font-12 fw-normal rounded-0">Incomplete</Badge>
                      </Card.Header>
                      <Card.Body>
                        <small className="d-inline-block fw-medium text-secondary mb-1">
                          Level 1
                        </small>
                        <h6 className="fw-bold">Food Hygiene &amp; Safety for Catering</h6>
                        <ProgressBar
                          variant="warning"
                          now={60}
                          style={{ height: 5 }}
                          className="mb-2"
                        />
                        <small className="text-secondary">Completed 15% of this course.</small>
                        <div className="d-flex align-items-center justify-content-between border-top p-2 mt-3">
                          <div className="col d-flex align-items-center">
                            <img src={Books} alt="" />
                            <small>9 Sections</small>
                          </div>
                          <div className="col d-flex align-items-center">
                            <img src={Notes} alt="" />
                            <small>3 Tests</small>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
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

export default MyCourses;
