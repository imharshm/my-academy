import React from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import CourseCard from "./CourseCard";

const CoursesTab = () => {
  return (
    <Tabs defaultActiveKey="all" className="featured-course__tab mb-3">
      <Tab eventKey="all" title="All Categories">
        <Row>
          {[...Array(8)].map((_, i) => {
            return (
              <Col className="courses-card" xs={12} md={4} lg={3} key={i}>
                <CourseCard footer timing="45-60 Min" />
              </Col>
            );
          })}
        </Row>
      </Tab>
      <Tab eventKey="hygiene" title="Hygiene">
        Tab content for Profile
      </Tab>
      <Tab eventKey="mental-health" title="Mental Health">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>
  );
};

export default CoursesTab;
