import React from "react";
import { Button, Container } from "react-bootstrap";

const WriteUs = () => {
  return (
    <section className="last-section d-flex justify-content-center">
      <div className="write-us__wrapper">
        <div className="write-us__info">
          <h4 className="fw-bold me-2 me-md-5 mb-0">
            If you cannot find a training session that <br /> you require, please get in touch with
            us
          </h4>
          <Button variant="light" className="text-nowrap">
            Write Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WriteUs;
