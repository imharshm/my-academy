import { Button, Col, Container, Row } from "react-bootstrap";
import Banner from "./Common/Banner";
import WhyImg from "../assets/img/why-students.svg";

const Pricing = () => {
  return (
    <>
      <Banner title="Pricing" breadcrumb={["Home", "Pricing"]} className="pricing-bg" />
      <section className="section">
        <Container>
          <div className="text-center">
            <Button variant="outline-primary" className="btn-txt-primary mb-3">
              Course Credit Pricing
            </Button>
          </div>
          <h3 className="section-title">
            We offer affordable, flexible pricing options <br />
            for individuals and <span>businesses</span>.
          </h3>
          <div className="border rounded p-4">
            <p>SELECT PACKAGE</p>
            <div className="d-flex align-items-center">
              <Col>
                <Row>
                  {[...Array(6)].map((_, i) => {
                    return (
                      <Col className="pricing-card mb-4" xs={12} md={4} lg={4} key={i}>
                        <div className="text-center">
                          <span className="bg-primary rounded-top text-white small p-1 px-3">
                            10 Credits
                          </span>
                          <div className="border rounded p-3">
                            <div className="border-bottom">
                              <small>Cost per Credit</small>
                              <h6 className="text-primary">$9.29</h6>
                            </div>
                            <div className="d-flex flex-column align-items-center mt-2">
                              <b>Save £0.2 on Purchase</b>
                              <small className="text-muted">No expiry dates</small>
                              <div className="d-flex align-items-center mt-3">
                                <h4 className="text-warning m-0 me-2">$9.29</h4> <del>$9.49</del>
                              </div>
                            </div>
                            <Button className="px-4 mt-3 fs-6" variant="outline-primary" size="sm">
                              CLICK TO BUY 1 CREDIT
                            </Button>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <h4 className="fw-bold mx-3">OR</h4>
              <Col xs={4}>
                <div className="d-flex flex-column align-items-center text-center bg-primary rounded-2 p-4">
                  <p className="text-white">
                    Enter No of Credit you want <br />
                    to purchase
                  </p>
                  <div className="bg-white rounded my-4 p-5 py-3">25</div>
                  <p className="text-white mb-0"> Buy 25 Credit at £ 207.25</p>
                  <p className="text-warning">Save £ 30 On Purchase</p>
                  <Button variant="success" className="w-100">
                    Purchase 25 Credits
                  </Button>
                </div>
              </Col>
            </div>
          </div>
        </Container>
        <Container className="mt-4">
          <h3 className="section-title">
            More Than 5000 Credit contact Support <br />
            Team to give you <span>best Offer</span>
          </h3>
          <Row>
            <Col md={6}>
              <div className="p-5">
                <img className="mw-100" src={WhyImg} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex flex-column justify-content-center align-items-baseline h-100">
                <h4 className="mb-3">Monthly payment option available</h4>
                <p className="m-0">For more payment option</p>
                <p className="m-0">
                  call us on :{" "}
                  <a className="text-decoration-none" href="tel:+44 2039292013">
                    +44 2039292013
                  </a>
                </p>
                <p>
                  email us on:{" "}
                  <a className="text-decoration-none" href="mailto:info@MyAcademy.com">
                    info@myacademy.com
                  </a>
                </p>
                <Button className="text-white px-4" variant="warning">
                  Enquire Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Pricing;
