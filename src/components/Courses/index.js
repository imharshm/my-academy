import React from "react";
import { Button, Container } from "react-bootstrap";
import CoursesTab from "../Common/CoursesTab";
import Banner from "../Common/Banner";
import "./allCourses.scss";

const index = () => {
  return (
    <>
      <Banner
        title="All Courses"
        desc="Below is a list of all available courses"
        breadcrumb={["Home", "All Courses"]}
      />
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
