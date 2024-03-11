import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContentfulHeader } from "../../pages";
import { Fade } from "react-awesome-reveal";
import Video from "../Video";
import Navbar from "../Navbar";
import CtaButton from "../Buttons/CtaButton";
import { StaticImage } from "gatsby-plugin-image";

interface HeaderProps {
  headerData: any;
  isVideoHeader: boolean;
}

const Header: React.FC<any> = ({ headerData, isVideoHeader }) => {
  return (
    <Container fluid className="h-auto mt-3 p-0 rounded-[8px] relative">
      {isVideoHeader && <Video />}
      {!isVideoHeader && (
        <StaticImage
          height={400}
          width={1300}
          src="../../images/References/header8.png"
          alt="Váci út"
          placeholder="blurred"
          className="w-full object-cover rounded-[8px]"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-overlay rounded-[8px]"></div>
      <Fade triggerOnce>
        <Row className="absolute top-0 left-0 w-full h-full">
          <Navbar />
          {isVideoHeader && <Col className="hidden md:block"></Col>}
          {isVideoHeader && (
            <Col
              md={{ span: 3, offset: 2 }}
              className="flex flex-col items-center h-auto gap-[32px] mx-3"
            >
              <span className="font-tanker font-normal text-white text-[38px] lg:text-[70px] text-center tracking-[0] leading-[42px] lg:leading-[72px]">
                A magasban végzett munkák specialistája
              </span>
              <span className="relative font-sharp font-medium text-lead text-[14px] lg:text-[16px] text-center tracking-[0] leading-[14px] lg:leading-[22px]">
                Egy megbízható, profi és rugalmas partner az alpintechnikai
                munkákhoz több éves tapasztalattal.
                <br />
                Ismerd meg referenciáinkat és bízd ránk a magaslati kihívásokat!
              </span>
              <CtaButton
                title="Azonnali ajánlatot szeretne?"
                hasIcon={true}
                path="/contact"
              />
            </Col>
          )}
          {isVideoHeader && <Col></Col>}
        </Row>
      </Fade>
    </Container>
  );
};

export default Header;
