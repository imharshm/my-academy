import React from "react";
import { Row, Card, Badge } from "react-bootstrap";
import CourseImg from "../../assets/img/course-1.svg";
import Star from "../../assets/img/star.svg";
import Clock from "../../assets/img/clock-gray.svg";
import CreditCard from "../../assets/img/CreditCard.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import { Link } from "react-router-dom";

const CourseCard = ({ footer, timing }) => {
  return (
    <Card>
      <Card.Img src={CourseImg}></Card.Img>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <Badge bg="" className="badge-warning">
            {/* other variant use className badge-success, badge-danger, or check in main.scss file*/}
            Level 1
          </Badge>
          <span className="rating">
            <img className="me-1" src={Star} alt="" />
            4.9(25)
          </span>
        </div>
        <h6 className="fw-semibold">Lorem ipsum is placeholder text commonly used in the</h6>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div>
            From{" "}
            <a href="/#" className="text-decoration-none fw-semibold">
              $4.00
            </a>
          </div>
          <span className="timing">
            <img className="me-1" src={Clock} alt="" />
            {timing}
          </span>
        </div>
      </Card.Body>
      {footer && (
        <Card.Footer className="py-0">
          <Row>
            <div className="col border-end d-flex align-items-center justify-content-center py-2">
              <img src={CreditCard} alt="" className="me-2" />
              <small>For 1 Credit</small>
            </div>
            <div className="col py-2 text-center">
              <Link
                to="/AllCourses/CourseDetails"
                variant="link"
                className="text-decoration-none view-details-a p-0"
              >
                View Details <img src={RightArrow} alt="" />
              </Link>
            </div>
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CourseCard;
