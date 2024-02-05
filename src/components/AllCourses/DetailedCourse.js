import React from "react";
import { Button, Card, Col, Container, Image, ProgressBar, Row, Table } from "react-bootstrap";
import WriteUs from "../Common/WriteUs";
import CourseDesc from "../../assets/img/course-dec.svg";
import Target from "../../assets/img/target.svg";
import Syllabus from "../../assets/img/syllabus.svg";
import RightHand from "../../assets/img/right-hand.svg";
import Lock from "../../assets/img/lock.svg";
import Play from "../../assets/img/play.svg";
import User from "../../assets/img/user.svg";
import DetailedCourseImg from "../../assets/img/detailed-course.svg";

const DetailedCourse = () => {
  const CourseParam = [
    {
      icon: "assignment",
      label: "Course Level",
      value: "Level-2",
    },
    {
      icon: "schedule",
      label: "Duration",
      value: "40-50 Min",
    },
    {
      icon: "play_circle",
      label: "Modules",
      value: "Nine",
    },
    {
      icon: "sticky_note_2",
      label: "Category",
      value: "Food Hygeine",
    },
    {
      icon: "language",
      label: "Language",
      value: "English",
    },
  ];

  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Button className="btn-txt-primary mb-3">Food Hygeine</Button>
              <h2 className="section-title text-start mb-3">
                What is Basics of Food Hygiene <br /> in Hospitality Industry
              </h2>
              <ul className="course-detailed__ul d-flex mb-4">
                <li className="pe-4 border-end">
                  <a href="/#">
                    <img src={CourseDesc} alt="" />
                    Course Description
                  </a>
                </li>
                <li className="pe-4 border-end">
                  <a href="/#">
                    <img src={Target} alt="" />
                    Target Audience
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <img src={Syllabus} alt="" />
                    Syllabus
                  </a>
                </li>
              </ul>
              <Image className="course-img" src={DetailedCourseImg} />
              <h4 className="fw-bold mt-4">Course Description</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur autodit aut fugit sed quia consequuntur magni dolores
                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam este qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modis tempora incidunt ut labore et dolore magnam aliquam quaerat volupt atem enim
                ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commo quatur? Quis autem vel eum iure reprehenderit quin ea
                voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur
              </p>
              <h4 className="fw-bold mt-4">Target Audience</h4>
              <ul className="course-detailed__ul mb-4">
                <li className="my-3">
                  <a href="/#">
                    <img src={RightHand} alt="" />
                    Any Job Holders, Students
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/#">
                    <img src={RightHand} alt="" />
                    Corporate Trainer
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <img src={RightHand} alt="" />
                    Educators (Teachers, Lecturer, Faculty)
                  </a>
                </li>
              </ul>
              <h4 className="fw-bold mt-4">Course Curriculum in Food Hygeine</h4>
              <Table responsive className="course-table border mt-3">
                <thead>
                  <tr>
                    <th colSpan={2} className="text-primary">
                      Food Hygiene and Safety for Catering v15
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map(() => {
                    return (
                      <tr>
                        <td>Introduction to Food Hygiene and Safety</td>
                        <td>
                          <a className="video-link" href="/#">
                            <img className="video-icon" src={Play} alt="" />
                            <span className="text-nowrap"> 01:13 Min</span>
                            <img className="video-icon" src={Lock} alt="" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <h4 className="fw-bold mt-4">Student Feedback</h4>
              <div className="student-feedback__wrapper mt-3">
                <div className="student-feedback__info">
                  <div className="student-feedback__rating">
                    <h1 className="fw-bold">5.0</h1>
                    <div className="d-flex">
                      {[...Array(5)].map(() => {
                        return <i className="material-icons">star</i>;
                      })}
                    </div>
                    <small>Total 1 Rating</small>
                  </div>
                  <div className="student-feedback__data">
                    <div className="user-rating">
                      <Image src={User} roundedCircle />
                      <div className="ms-3">
                        <h6 className="fw-bold m-0">Lucius D. Thomas</h6>
                        <small className="text-primary">IT Students (Basic)</small>
                      </div>
                    </div>
                    {[...Array(5)].map(() => {
                      return (
                        <div className="d-flex align-items-center mt-3">
                          <div className="d-flex align-items-center me-2">
                            {[...Array(5)].map(() => {
                              return <i className="material-icons star">star</i>;
                            })}
                            (5)
                          </div>
                          <ProgressBar variant="primary" now={60} />
                          <small className="ms-2">123 Rating</small>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="mt-3 mt-md-0">
              <div className="course-more-info__wrapper">
                <Image className="mw-100" src={DetailedCourseImg} />
                <div className="px-3">
                  <h3 className="fw-bold my-2">
                    From <span className="text-success">$4.83</span>
                  </h3>
                  <Table className="course-para-table">
                    <tbody>
                      {CourseParam.map((item) => {
                        return (
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <i className="material-icons"> {item.icon}</i>
                                {item.label}
                              </div>
                            </td>
                            <td>{item.value}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  <small className="text-secondary">
                    The pricing of the course varies on the basis of purchase size
                  </small>
                  <div className="mt-3">
                    <Button variant="warning" className="text-white w-100">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <Card className="mt-3 p-4">
                <div className="px-2">
                  <h4 className="fw-bold">Category</h4>
                  {[...Array(5)].map(() => {
                    return (
                      <p className="d-flex align-items-center">
                        <i className="material-icons font-20 text-secondary">
                          keyboard_double_arrow_right
                        </i>
                        Food Hygeine(12)
                      </p>
                    );
                  })}
                </div>
              </Card>
              <Card className="mt-3 p-4">
                <div className="px-2">
                  <h4 className="fw-bold mb-3">Related Courses</h4>
                  {[...Array(5)].map(() => {
                    return (
                      <div className="d-flex mb-3">
                        <Image
                          className="related-course__img mw-100 me-2"
                          src={DetailedCourseImg}
                        />
                        <div className="d-flex flex-column justify-content-between">
                          <h6 className="fw-bold font-14 m-0">How to Learn Basic Web (U) Design</h6>
                          <small className="font-12">By Williams</small>
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
      <section className="section">
        <Container>
          <div className="text-center">
            <Button className="btn-txt-primary mb-3">Latest Courses</Button>
            <h4 className="section-title">Browser Latest Courses</h4>
          </div>
          <Row className="justify-content-between">
            {[...Array(3)].map(() => {
              return (
                <Col xs={12} md={4} style={{ maxWidth: "400px" }}>
                  <Card className="border-0">
                    <Card.Img src={DetailedCourseImg} />
                    <Card.Body className="position-relative px-0">
                      <span className="text-primary">Web Design</span>
                      <div className="price-tag">
                        <sup>$</sup>99
                      </div>
                      <h6 className="fw-bold mt-2">
                        How to Learn Basic Web Design by Photoshop and Figma
                      </h6>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center text-secondary me-3">
                          <i className="material-icons font-18 me-2">school</i>
                          By Bennie L.
                        </div>
                        <div className="d-flex align-items-center text-secondary me-3">
                          <i className="material-icons font-18 me-2">assignment</i>
                          12 Lessions
                        </div>
                        <div className="d-flex align-items-center text-secondary">
                          <i className="material-icons font-18 me-2">person</i>
                          Seats
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        {[...Array(5)].map(() => {
                          return <i className="material-icons text-warning font-18">star</i>;
                        })}
                        <small className="fw-bold">(40)</small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <WriteUs />
    </>
  );
};

export default DetailedCourse;
