import React from "react";
import { Button, Card, Container, ProgressBar, Table } from "react-bootstrap";
import Banner from "../Common/Banner";
import CertiImg from "../../assets/img/Certificate.svg";

const MyCoursesDetails = () => {
  return (
    <>
      <Banner
        title="Food Hygiene and Safety for Catering "
        breadcrumb={["Home", "My Courses", "Courses Details"]}
      />
      <section className="section">
        <Container>
          <div className="mb-3">
            <p className="fw-medium mb-1">Food Hygiene and Safety for Catering</p>
            <ProgressBar variant="warning" now={25} className="course-progress mb-1" />
            <span className="text-secondary font-14">
              You have currently completed 25% of this course.
            </span>
          </div>
          <div className="d-flex align-content-center mb-4">
            <Button variant="warning" className="text-white d-flex align-items-center me-3 px-4">
              <img src={CertiImg} alt="" className="me-2" />
              Download Certificate
            </Button>
            <Button className="px-4">External Resources (Optional)</Button>
          </div>
          <div className="border rounded overflow-auto d-none d-md-block">
            <Table className="module-table">
              <thead>
                <tr>
                  <th>Module Name</th>
                  <th>Status</th>
                  <th>Duration</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className="material-icons text-success font-18 me-2">check_circle</i>
                          <p className="fw-medium m-0">Introduction to Food Hygiene and Safety</p>
                        </div>
                      </td>
                      <td>
                        <p className="text-secondary m-0">Complete</p>
                      </td>
                      <td>
                        <p className="text-secondary m-0">03:12 Min</p>
                      </td>
                      <td>
                        <Button variant="success" className="px-4">
                          Review
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="d-md-none">
            {[...Array(10)].map(() => {
              return (
                <Card className="module-card">
                  <Card.Header className="bg-white">
                    <h6 className="text-primary m-0">Module Name</h6>
                    <div className="d-flex align-items-center">
                      <i className="material-icons text-success font-18 me-1">check_circle</i>
                      <p className="fw-medium m-0">Introduction to Food Hygiene and Safety</p>
                    </div>
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-between flex-row">
                    <div>
                      <h6 className="text-primary m-0">Status</h6>
                      <p className="text-secondary m-0">Complete</p>
                    </div>
                    <div>
                      <h6 className="text-primary m-0">Duration</h6>
                      <p className="text-secondary m-0">03:12 Min</p>
                    </div>
                    <div>
                      <h6 className="text-primary m-0">Duration</h6>
                      <Button size="sm" className="py-0">
                        Review
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default MyCoursesDetails;
