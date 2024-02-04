import React from "react";
import { Row, Button, Card, Badge } from "react-bootstrap";
import CourseImg from "../../assets/img/course-1.svg";
import Star from "../../assets/img/star.svg";
import Clock from "../../assets/img/clock-gray.svg";
import Books from "../../assets/img/books.svg";
import RightArrow from "../../assets/img/right-arrow.svg";

const CourseCard = ({ footer, timing }) => {
  return (
    <Card>
      <Card.Img src={CourseImg}></Card.Img>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <Badge bg="">Hygiene</Badge>
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
              <img src={Books} alt="" className="me-2" />
              <small>9 Modules</small>
            </div>
            <div className="col py-2 text-center">
              <Button variant="link" className="text-decoration-none p-0">
                View Details <img src={RightArrow} alt="" />
              </Button>
            </div>
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CourseCard;
