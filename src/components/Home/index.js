import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Card,
  Tabs,
  Tab,
  Image,
} from "react-bootstrap";
import Search from "../../assets/img/banner/search.svg";
import PhoneCall from "../../assets/img/banner/phonecall.svg";
import Note from "../../assets/img/banner/notes.svg";
import Action from "../../assets/img/banner/banner-action.svg";
import Category1 from "../../assets/img/category-1.svg";
import Category2 from "../../assets/img/category-2.svg";
import Category3 from "../../assets/img/category-3.svg";
import Category4 from "../../assets/img/category-4.svg";
import Category5 from "../../assets/img/category-5.svg";
import Category6 from "../../assets/img/category-6.svg";
import RightArrow from "../../assets/img/right-arrow.svg";
import Feature1 from "../../assets/img/feature-1.svg";
import Feature2 from "../../assets/img/feature-2.svg";
import Feature3 from "../../assets/img/feature-3.svg";
import User from "../../assets/img/user.svg";
import Rating from "../../assets/img/5-star.svg";
import Partner1 from "../../assets/img/partner-1.svg";
import Partner2 from "../../assets/img/partner-2.svg";
import Partner3 from "../../assets/img/partner-3.svg";
import Partner4 from "../../assets/img/partner-4.svg";
import Partner5 from "../../assets/img/partner-5.svg";
import Partner6 from "../../assets/img/partner-6.svg";
import SingUpOffer from "../../assets/img/sing-up-offer.svg";
import "./home.scss";
import CourseCard from "../common/CourseCard";

const Home = () => {
  const topCategories = [
    {
      title: "Hygiene",
      desc: "Take your journey with this course",
      icon: Category1,
    },
    {
      title: "Physical Health",
      desc: "Take your journey with this course",
      icon: Category2,
    },
    {
      title: "Planning",
      desc: "Take your journey with this course",
      icon: Category3,
    },
    {
      title: "Hospitality",
      desc: "Take your journey with this course",
      icon: Category4,
    },
    {
      title: "Personal Care",
      desc: "Take your journey with this course",
      icon: Category5,
    },
    {
      title: "Mental Health",
      desc: "Take your journey with this course",
      icon: Category6,
    },
  ];

  const partnerImages = [Partner1, Partner2, Partner3, Partner4, Partner5, Partner6];

  return (
    <>
      <section className="home-banner">
        <div className="banner-top">CPD Provider of the Year Winner!</div>
        <Container>
          <Row>
            <Col xs={12} md={6} className="px-4">
              <div className="banner-info">
                <h3>
                  Online <span className="highlight">health</span> and social care training that
                  fits around you
                </h3>
                <p className="banner-desc">
                  Innovative, flexible and affordable e-learning for health and social care
                  providers. Learn any time, any place.
                </p>
                <InputGroup className="d-none d-md-flex mb-3">
                  <Form.Control
                    placeholder="What do you want to learn ?"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button>
                    <img src={Search} alt="" />
                  </Button>
                </InputGroup>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column flex-md-row">
                    <Button variant="warning" className="text-white me-md-3">
                      FInd Out More
                    </Button>
                    <div className="d-flex mt-3 mt-md-0">
                      <img className="call-img me-1" src={PhoneCall} alt="" />
                      <div>
                        <span className="text-secondary">Have any Question?</span>
                        <h6>0203 9292013</h6>
                      </div>
                    </div>
                  </div>
                  <div className="total-courses">
                    <img src={Note} alt="" />
                    <span className="">Total Courses</span>
                    <h2 className="m-0">35+</h2>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="banner-img"></div>
            </Col>
          </Row>
        </Container>
        <Button className="banner-action" variant="link">
          <img src={Action} alt="" />
        </Button>
      </section>
      <section className="section">
        <Container>
          <h2 className="section-title">
            Explore <br /> Our Top <span>Categories</span>
          </h2>
          <Row>
            {topCategories.map((category) => {
              return (
                <Col className="category-card" xs={12} md={4} key={category.title}>
                  <Card>
                    <img src={category.icon} alt="" />
                    <div>
                      <h6 className="fw-semibold m-0">{category.title}</h6>
                      <p className="m-0 desc">{category.desc}</p>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="section even">
        <Container>
          <h2 className="section-title">
            Featured <span>Courses</span>
          </h2>
          <Tabs defaultActiveKey="home" className="mb-3" justify>
            <Tab eventKey="home" title="Home">
              <Row>
                {[...Array(8)].map((_, i) => {
                  return (
                    <Col className="courses-card" xs={12} md={3} key={i}>
                      <CourseCard footer timing="45-60 Min" />
                    </Col>
                  );
                })}
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
            <Tab eventKey="longer-tab" title="Loooonger Tab">
              Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              Tab content for Contact
            </Tab>
          </Tabs>
          <div className="text-center mt-3">
            <Button variant="warning" className="text-white">
              Browse all Courses
            </Button>
          </div>
        </Container>
      </section>
      <section className="feature-section">
        <Container>
          <Row>
            <Col xs={12} md={4} className="mb-5 m-md-0">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img src={Feature1} alt="" />
                <h6 className="fw-bold text-center text-md-start m-0">
                  Learn over <br /> 35 + Courses{" "}
                </h6>
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-5 m-md-0">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img src={Feature2} alt="" />
                <h6 className="fw-bold text-center text-md-start m-0">
                  Earn certificates <br /> After Completeion{" "}
                </h6>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img src={Feature3} alt="" />
                <h6 className="fw-bold text-center text-md-start m-0">
                  Learn from anywhere. <br /> any time
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section">
        <Container className="mb-4">
          <Row>
            <Col xs={12} md={6}>
              <div className="why-choose-us__info">
                <Button variant="primary" className="btn-txt-primary mb-3">
                  Why Choose Us
                </Button>
                <h2 className="section-title text-start mb-3">
                  Why Students <span>Choose</span> Us for Gain Their Knowledge
                </h2>
                <p>
                  Helping employees gain skills and providing career development often take a back
                  seat to business priorities but workplace better right now. Seventy percent of
                  workers think that
                </p>
                <ul className="why-choose__ul">
                  <li>Subtitle available for all courses</li>
                  <li>Easy to enroll courses</li>
                  <li>Course certificate for particular course</li>
                </ul>
                <Button variant="outline-primary" className="mt-3">
                  More About Us
                </Button>
              </div>
            </Col>
            <Col xs={12} md={6}></Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <div className="text-center">
            <Button variant="outline-primary" className="btn-txt-primary mb-3">
              Testimonials
            </Button>
          </div>
          <h2 className="section-title">
            What People Think and <span>Say</span>
            <br />
            About My Academy
          </h2>
          <Row className="testimonials-wrapper">
            {[...Array(3)].map((_, i) => {
              return (
                <Col xs={12} md={4} className="testimonials-card mb-3">
                  <Card>
                    <Card.Header className="d-flex align-items-center px-1">
                      <Image src={User} roundedCircle className="user-img me-2" />
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="m-0">Brandon Tylor</h6>
                        <small className="text-secondary">Food Hygiene</small>
                      </div>
                    </Card.Header>
                    <Card.Body className="px-0">
                      <Image src={Rating} className="mb-3" />
                      <h5 className="text-primary">Best Experience !</h5>
                      <p className="m-0">
                        In every software-as-a-service solution, user billing and payments are key
                        aspects in the sale of services rendered. Let's Learn about Stripe the metal
                        mates
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Container>
          <div className="text-center">
            <Button variant="outline-primary" className="btn-txt-primary mb-3">
              New Blog
            </Button>
          </div>
          <h2 className="section-title">
            News &amp; <span>Blogs</span>
          </h2>
          <Row>
            {[...Array(4)].map((_, i) => {
              return (
                <Col className="courses-card" xs={12} md={3} key={i}>
                  <CourseCard timing="Jan 24, 2024" />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="section even">
        <Container>
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
                    <Col xs={4} md={4} className="text-center mb-3">
                      <Image src={img} className="mw-100 p-2" />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section even last-section">
        <Container className="sign-up-offer__wrapper">
          <Row>
            <Col xs={12} md={6} className="p-0">
              <Image src={SingUpOffer} />
            </Col>
            <Col xs={12} md={6} className="p-0">
              <div className="sign-up-offer__info h-100">
                <h2 className="section-title mb-3">
                  Sign up for <span>Offers</span>
                </h2>
                <p className="text-center">
                  Join our mailing list and receive information on <br />
                  special offers and free courses.
                </p>
                <form>
                  <Form.Control type="text" placeholder="First Name" className="mb-3" />
                  <Form.Control type="text" placeholder="Last Name" className="mb-3" />
                  <Form.Control type="text" placeholder="Email" className="mb-3" />
                  <div className="text-end mt-3">
                    <Button>Sign Up</Button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
