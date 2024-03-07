import React from "react";
import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import FacebookCircleIcon from "../../images/Icons/facebookCircle.inline.svg";
import InstagramCircleIcon from "../../images/Icons/instagramCircle.inline.svg";
import LinkedinCircleIcon from "../../images/Icons/linkedinCircle.inline.svg";
import LogoIcon from "../../images/Icons/logo.inline.svg";

interface FooterProps {
  footerData: any;
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  return (
    <Container
      fluid
      className="footer-container bg-footer footer p-3 rounded-t-[50px]"
    >
      <Row className="py-3 font-sharp font-normal text-[14px]">
        <Col md={4} className="flex justify-content-center align-items-center">
          <LogoIcon />
        </Col>
        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center"
        >
          <h6 className="text-white mb-3">Kapcsolat</h6>
          <a href="#" className="no-underline">
            flowalpin@gmail.com
          </a>
          <a href="#" className="no-underline hover:no-underline mt-1">
            Tel.: +36204116443
          </a>
          <div className="flex mt-3">
            <a title="facebook" href="#" className="mr-3">
              <FacebookCircleIcon />
            </a>
            <a title="instagram" href="#" className="mr-3">
              <InstagramCircleIcon />
            </a>
            <a title="linkedin" href="#">
              <LinkedinCircleIcon />
            </a>
          </div>
        </Col>
        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center pt-[16px] lg:pt-[0px]"
        >
          <Link to="/impressum" className="no-underline mb-3">
            Impresszum
          </Link>

          <Link to="/terms" className="no-underline mb-3">
            ÁSZF
          </Link>

          <Link to="/privacy" className="no-underline">
            Adatvédelem
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
