import React from "react";
import { Button, Container } from "react-bootstrap";

const WriteUs = () => {
  return (
    <section className="last-section">
      <Container>
        <div className="write-us__wrapper">
          <div className="write-us__info">
            <h4 className="fw-bold me-2 me-md-5">
              If you cannot find a training session that you require, please get in touch with us
            </h4>
            <Button variant="light" className="text-nowrap">
              Write Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WriteUs;
