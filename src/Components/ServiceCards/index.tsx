import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContentfulHeader } from "../../pages";
import { Fade } from "react-awesome-reveal";
import BubbleIcon from "../../images/Icons/bubble.inline.svg";
import MapIcon from "../../images/Icons/map.inline.svg";
import RollerIcon from "../../images/Icons/roller.inline.svg";
import SettingsIcon from "../../images/Icons/settings.inline.svg";
import CleanIcon from "../../images/Icons/clean.inline.svg";
import CleaningIcon from "../../images/Icons/cleaning.inline.svg";
import ToolsIcon from "../../images/Icons/tools.inline.svg";

interface ServiceCardsProps {
  servicesData?: ContentfulHeader["additionalElements"];
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ servicesData }) => {
  return (
    <Container>
      <Row className="mt-5 mb-[64px]">
        <Col className="text-center">
          <h3 className="font-sharp font-bold text-black text-[20px] whitspace-nowrap underline">
            SZOLGÁLTATÁSAINK
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center font-sharp font-normal text-text text-[12px] lg:text-[14px]">
        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center"
        >
          <BubbleIcon className="mb-3" />
          <p className="font-sharp_bold underline">Veszélytelenítés</p>
          <span className="text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </span>
        </Col>
        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center pt-[20px] lg:pt-[0px]"
        >
          <RollerIcon className="mb-3" />
          <p className="font-sharp_bold underline">Homlokzati festés</p>
          <span className="text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </span>
        </Col>
        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center pt-[20px] lg:pt-[0px]"
        >
          <MapIcon className="mb-3" />
          <p className="font-sharp_bold underline">Karbantartási munkák</p>
          <span className="text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </span>
        </Col>

        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center  pt-[20px]"
        >
          <CleanIcon className="mb-3" />
          <p className="font-sharp_bold underline">Homlokzat mosás</p>
          <span className="text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </span>
        </Col>
        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center pt-[20px]"
        >
          <SettingsIcon className="mb-3" />
          <p className="font-sharp_bold underline">Szerelési feladatok</p>
          <span className="text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </span>
        </Col>
        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center pt-[20px]"
        >
          <CleaningIcon className="mb-3" />
          <p className="font-sharp_bold underline">Tisztítási munkák</p>
          <span className="text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </span>
        </Col>
        <Col
          md={4}
          className="flex flex-column justify-content-center align-items-center pt-[20px] lg:pt-[20px]"
        >
          <ToolsIcon className="mb-3" />
          <p className="font-sharp_bold underline">Bontási munkák</p>
          <span className="text-center">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceCards;
