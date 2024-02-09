import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import VideoImg from "../../assets/img/banner/banner-bg.svg";
import CurveArrow from "../../assets/img/curve-arrow.svg";

const GetHelpVideo = () => {
  return (
    <Row className="mt-4 pb-5 pb-md-0">
      <Col md={7} className="mx-auto position-relative">
        <div className="d-flex flex-md-column align-items-end get-help">
          <Image src={CurveArrow} width={50} />
          <span className="text-secondary text-nowrap">
            Get <b className="text-dark">help</b> from <br /> this video
          </span>
        </div>
        <Card className="border-0 shadow">
          <Card.Body>
            <Image src={VideoImg} className="mw-100" />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default GetHelpVideo;
