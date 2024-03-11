import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ReferenceCard from "./ReferenceCard";
import SliderController from "../../images/Icons/sliderController.inline.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReferencesSlider = () => {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="h-auto w-full bg-section mt-[59px] lg:mt-[84px] pt-[40px] lg:pt-[70px] text-center pb-[50px] lg:pb-[96px]">
      <span className="font-sharp font-normal text-black text-[18px] whitspace-nowrap">
        REFERENCIÁK
      </span>
      <Container className="pt-[25px] lg:pt-[34px] px-0">
        <Row className="relative">
          <Slider {...settings}>
            <Col className="image-container text-center mr-5 cursor-pointer transform hover:scale-90 transition-transform duration-300">
              <StaticImage
                height={662}
                src="../../images/References/renamed.jpg"
                alt="Wesselényi utca"
                placeholder="blurred"
                className="rounded-[10px]"
              />
              <ReferenceCard
                title="WESSELENYI UTCA"
                description="Homlokzat veszélytelenítés"
                id="1"
              />
            </Col>
            <Col className="image-container text-center cursor-pointer transform hover:scale-90  transition-transform duration-300">
              <StaticImage
                height={662}
                src="../../images/References/header5.jpeg"
                alt="Havanna-lktp"
                placeholder="blurred"
                className="rounded-[10px]"
              />
              <ReferenceCard
                title="HAVANNA-LKTP"
                description="Festés és szigetelés"
                id="2"
              />
            </Col>
            <Col className="image-container text-center mr-5 cursor-pointer transform hover:scale-90  transition-transform duration-300">
              <StaticImage
                height={660}
                src="../../images/References/header7.jpeg"
                alt="Váci út"
                placeholder="blurred"
                className="rounded-[10px]"
              />
              <ReferenceCard
                title="VÁCI ÚT"
                description="ÁNTSZ ép. veszélytelenítés"
                id="3"
              />
            </Col>
          </Slider>
          <SliderController className="slider-controller" />
        </Row>
      </Container>
    </div>
  );
};

export default ReferencesSlider;
