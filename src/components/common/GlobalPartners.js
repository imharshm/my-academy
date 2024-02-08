import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Partner1 from "../../assets/img/partner-1.svg";
import Partner2 from "../../assets/img/partner-2.svg";
import Partner3 from "../../assets/img/partner-3.svg";
import Partner4 from "../../assets/img/partner-4.svg";
import Partner5 from "../../assets/img/partner-5.svg";
import Partner6 from "../../assets/img/partner-6.svg";
import RightArrow from "../../assets/img/right-arrow.svg";

const GlobalPartners = () => {
  const partnerImages = [Partner1, Partner2, Partner3, Partner4, Partner5, Partner6];

  return (
    <Row>
      <Col xs={12} md={6}>
        <Button variant="outline-primary" className="btn-txt-primary mb-3">
          Global Partners
        </Button>
        <h2 className="section-title text-start mb-3">
          We’ve More Then 235+ <br />
          Global <span>Partners</span>
        </h2>
        <Button variant="link" className="text-decoration-none ps-0 mb-3 mb-md-0">
          View More Partners <Image src={RightArrow} />
        </Button>
      </Col>
      <Col xs={12} md={6}>
        <Row>
          {partnerImages.map((img, i) => {
            return (
              <Col key={img} xs={4} md={4} className="text-center mb-3">
                <Image src={img} className="mw-100 p-2" />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default GlobalPartners;
