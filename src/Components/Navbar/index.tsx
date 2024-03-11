import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import NavMenu from "./NavMenu";
import CloseIcon from "../../images/Icons/closeIcon.inline.svg";

const CustomNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const showCloseIcon = () => setIsClicked(!isClicked);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="none"
      variant="light"
      className="text-right text-lg-left align-items-start pt-4"
    >
      <Navbar.Brand className="d-none d-md-block pl-[30px] m-0">
        <Link to="/">
          <StaticImage
            height={150}
            src="../../images/Brand/logo.png"
            alt="flowalpin_logo"
            placeholder="blurred"
            className="ml-5 mt-3"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ border: "none", outline: "none", boxShadow: "none" }}
        onClick={showCloseIcon}
      >
        {isClicked && <CloseIcon />}
      </Navbar.Toggle>
      <Navbar.Collapse
        className="mobile-nav justify-content-end mw-100"
        id="responsive-navbar-nav"
      >
        <NavMenu />
      </Navbar.Collapse>
      <div
        className="custom-mobileNav rounded-[8px] h-150 z-10"
        style={{ left: isClicked ? "0" : "-100%" }}
      >
        <NavMenu />
      </div>
      {/* Brand for mobile view */}
      <div className="ml-auto d-lg-none mr-14">
        <Navbar.Brand href="/">
          <StaticImage
            height={150}
            src="../../images/Brand/logo.png"
            alt="flowalpin_logo"
            placeholder="blurred"
          />
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
