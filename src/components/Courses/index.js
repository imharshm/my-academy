import React from "react";
import { Button, Container } from "react-bootstrap";
import CoursesTab from "../Common/CoursesTab";
import "./allCourses.scss";

const index = () => {
  return (
    <>
      <section className="section">
        <Container>
          <div className="text-center">
            <Button className="btn-txt-primary mb-3">All Courses</Button>
            <h2 className="section-title">
              Discover World's Best <span>Courses</span>
            </h2>
          </div>
          <CoursesTab />
        </Container>
      </section>
    </>
  );
};

export default index;
