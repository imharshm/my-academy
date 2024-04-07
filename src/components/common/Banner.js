import classNames from "classnames";
import { Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ title, desc, breadcrumb, className }) => {
  const pathname = useLocation().pathname;

  return (
    <Container fluid className={`header-bg position-relative text-center ${className}`}>
      <div className="banner-strip">
        <Container className="p-0">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Link
                to="/MyCourses"
                className={classNames("text-decoration-none", {
                  active: pathname.includes("/MyCourses"),
                })}
              >
                My Course
              </Link>
              <a className="text-decoration-none" href="/#">
                Credit &amp; Billing
              </a>
            </div>
            <Button variant="dark" className="px-4 py-1">
              Buy Credits
            </Button>
          </div>
        </Container>
      </div>

      <h1 className="fw-bold text-white">{title}</h1>
      {desc && <p className="desc d-none d-md-block"></p>}
      <ul className="d-flex align-items-center justify-content-center list-unstyled m-0 p-0">
        {breadcrumb?.map((item, i) => {
          return (
            <>
              <li className={`me-3 ${breadcrumb.length !== i + 1 ? "text-white" : "text-warning"}`}>
                {item}
              </li>
              {breadcrumb.length !== i + 1 && (
                <i className="material-icons text-white me-3">keyboard_double_arrow_right</i>
              )}
            </>
          );
        })}
      </ul>
    </Container>
  );
};
export default Banner;
