import React from "react";
import { Button, Card, Col, Container, Image, Row, Table } from "react-bootstrap";
import CourseDesc from "../../assets/img/course-dec.svg";
import Target from "../../assets/img/target.svg";
import Syllabus from "../../assets/img/syllabus.svg";
import RightHand from "../../assets/img/right-hand.svg";
import UserImg from "../../assets/img/user-feedback.svg";
import DetailedCourseImg from "../../assets/img/detailed-course.svg";
import Banner from "../Common/Banner";
import CourseCard from "../Common/CourseCard";

const CourseDetails = () => {
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
      icon: "credit_card",
      label: "Credit Requires",
      value: "Two",
    },
  ];

  return (
    <>
      <Banner title="Course Details" breadcrumb={["Home", "All Courses", "Course Details"]} />
      <section className="section pb-0">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Button className="btn-txt-success mb-3">Level 2</Button>
              <h2 className="section-title text-start mb-3">
                What is Basics of Food Hygiene <br /> in Hospitality Industry
              </h2>
              <ul className="course-detailed__ul d-flex mb-4">
                <li className="pe-2 pe-lg-4 border-end">
                  <a href="/#">
                    <img src={CourseDesc} alt="" />
                    Aim of Courses
                  </a>
                </li>
                <li className="pe-2 pe-lg-4 border-end">
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
              <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                <h4 className="fw-bold m-0">Aim Of Course</h4>
                <Button variant="success">Download Syllabus</Button>
              </div>
              <p>
                This short course is aimed at those working in Health or social care settings. The
                objectives introduce Signs and symptoms of abuse, gives an overview of allegations
                and how to deal with these, support awareness of national and local policies and how
                to record and report
              </p>
              <h4 className="fw-bold mt-4">Intent</h4>
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
              <h4 className="fw-bold mt-4">Impact</h4>
              <p>
                Once completed you will have the necessary skills, knowledge, and awareness to
                support individuals’ awareness of safeguarding. You will gain a certificate to
                certify your skills. You can add your certificate to your resume to help you stand
                out from the crowd and share this with potential employers to show off your skills
                and capability
              </p>
              <h4 className="fw-bold mt-4">Implementation</h4>
              <p>
                You will work through the course material, answering questions after each module
                before moving on.
              </p>
              <h4 className="fw-bold mt-4">Category</h4>
              <ul className="ps-3">
                <li> Roles and responsibilities of a care worker </li>
                <li> Health and Safety </li>
                <li> Safe practice</li>
              </ul>
              <h4 className="fw-bold mt-4">Assessment Criteria</h4>
              {[...Array(4)].map(() => {
                return (
                  <>
                    <p className="mb-1">
                      Module 1. Know how to recognise signs and symptoms of abuse
                    </p>
                    <ul className="ps-3">
                      <li>What abuse is</li>
                      <li>Different types of abuse</li>
                      <li>Symptoms of abuse </li>
                    </ul>
                  </>
                );
              })}
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
      <section>
        <Container>
          <div className="trainee-feedback__wrapper mt-3">
            <h4 className="fw-bold mt-4">Trainee Feedback</h4>
            <p className="mb-0">Principles Of Safeguarding</p>
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center my-2">
                {[...Array(5)].map(() => {
                  return <i className="material-icons star">star</i>;
                })}
                <span className="ms-2"> 4.6 out of 5</span>
              </div>
              <small className="text-muted">202 global ratings</small>
            </div>
            <div className="trainee-feedback__card border-bottom pb-3 mt-3">
              <div className="feedback-user__info">
                <img src={UserImg} alt="" />
                <div>
                  <h6 className="fw-bold mb-0">Vaibhav</h6>
                  <small className="text-muted">12 December 2023</small>
                </div>
              </div>
              <div className="feedback-comment">
                <div className="d-flex align-items-center">
                  {[...Array(5)].map(() => {
                    return <i className="material-icons star">star</i>;
                  })}
                  <h6 className="border-start ms-2 ps-2 fw-bold mb-0">Verified Trainee</h6>
                </div>
              </div>
            </div>
            <div className="trainee-feedback__card mt-3">
              <div className="feedback-user__info">
                <img src={UserImg} alt="" />
                <div>
                  <h6 className="fw-bold mb-0">Vaibhav</h6>
                  <small className="text-muted">12 December 2023</small>
                </div>
              </div>
              <div className="feedback-comment">
                <div className="d-flex align-items-center">
                  {[...Array(5)].map(() => {
                    return <i className="material-icons star">star</i>;
                  })}
                  <h6 className="border-start ms-2 ps-2 fw-bold mb-0">Verified Trainee</h6>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="text-center">
            <Button className="btn-txt-primary mb-3">Latest Courses</Button>
            <h4 className="section-title">
              Browser Latest <span>Courses</span>
            </h4>
          </div>
          <Row className="justify-content-center justify-content-xl-between">
            {[...Array(4)].map(() => {
              return (
                <Col xs={12} md={3}>
                  <CourseCard footer timing="45-60 Min" />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CourseDetails;
