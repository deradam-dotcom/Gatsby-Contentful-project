import React from "react";
import { Nav } from "react-bootstrap";
import CtaButton from "../Buttons/CtaButton";
import { Link } from "gatsby";

const NavMenu = () => {
  return (
    <Nav className="ml-auto">
      <Nav.Item className="lg:flex lg:items-center p-[27px] text-left font-sharp font-normal text-lead text-[14px] tracking-[0.20px] leading-[normal] whitespace-nowrap">
        <Nav.Link eventKey="link-1" className="mr-7">
          <Link to="/about" className="no-underline">
            Rólunk
          </Link>
        </Nav.Link>
        <Nav.Link eventKey="link-2" className="mr-7">
          <Link to="/alpintechnic" className="no-underline">
            Alpintechnika
          </Link>
        </Nav.Link>
        <Nav.Link eventKey="link-3" className="mr-7">
          <Link to="/references" className="no-underline">
            Referenciák
          </Link>
        </Nav.Link>
        <Nav.Link eventKey="link-4" className="mr-7">
          <Link to="/contact" className="no-underline">
            Kapcsolat
          </Link>
        </Nav.Link>
        <Nav.Item className="ml-auto flex">
          <CtaButton
            title="Azonnali ajánlat"
            hasIcon={false}
            path="/contact"
            isSmallFont={true}
          />
        </Nav.Item>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
