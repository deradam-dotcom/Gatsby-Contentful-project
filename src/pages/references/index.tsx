import React, { useEffect } from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Line from "../../components/Line";
import { useLocation } from "@reach/router";

export interface AdditionalElements {
  text: string;
  target: string;
  image: {
    gatsbyImageData: typeof GatsbyImage;
    publicUrl: string;
    url: string;
    title: string;
    internal: {
      type: string;
    };
  };
}

export interface ContentfulCallToAction {
  text: string;
  target: string;
  image: {
    gatsbyImageData: typeof GatsbyImage;
    publicUrl: string;
    url: string;
    title: string;
    internal: {
      type: string;
    };
  };
}

export interface ContentfulHeader {
  title: string;
  simpleSubtitle?: string;
  backgroundVideo: {
    publicUrl: string;
    url: string;
    placeholderUrl: string;
  };
  additionalElements: AdditionalElements[];
}

export interface ContentfulListOfElements {
  title: string;
  subtitle: {
    raw: string;
  };
  lead: {
    raw: string;
  };
  elements: ContentfulCallToAction[];
}

interface Page {
  title: string;
  slug: string;
  description: {
    description: string;
  };
  ogImage: {
    gatsbyImageData: typeof GatsbyImage;
    publicUrl: string;
    url: string;
    title: string;
    internal: {
      type: string;
    };
  };
  elements: (ContentfulHeader | ContentfulListOfElements)[];
}

interface ReferencesPageProps extends PageProps {
  data: {
    page: Page;
  };
}

const ReferencesPage: React.FC<ReferencesPageProps> = ({
  data,
}: {
  data: any;
}) => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.substring(1);
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  //const { page } = data;
  // const headerData = page.elements[0];
  // const { elements, ...aboutUsData } = page.elements[1];
  // const servicesData = page.elements[1].elements;

  return (
    <>
      <Container fluid className="body-container">
        <Header isVideoHeader={false} />
      </Container>
      <Container className="my-[45px] lg:my-[65px]">
        <Row className="h-auto mb-4 lg:mb-0">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} id="3">
            <h3
              id="3"
              className="font-sharp_bold font-normal text-text text-[25px] tracking-[0] leading-[22px] mb-[16px]"
            >
              ÁNTSZ ép. veszélytelenítés - VÁCI ÚT
            </h3>
            <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="text-center mb-5"
          >
            <StaticImage
              height={430}
              src="../../images/References/header1.jpeg"
              alt="Wesselényi utca"
              placeholder="blurred"
              className="rounded-[10px] image"
            />
            {/* <GatsbyImage
              image={getImage(image1)}
              alt={service.image1Alt}
              className="image"
            /> */}
          </Col>
        </Row>
        <Row className="mb-4 lg:mb-0">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} id="2">
            <h3
              id="2"
              className="font-sharp_bold font-normal text-text text-[25px] tracking-[0] leading-[22px] mb-[16px]"
            >
              Festés és szigetelés - HAVANNA-LKTP
            </h3>
            <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="text-center mb-5"
          >
            <StaticImage
              height={430}
              src="../../images/References/header5.jpeg"
              alt="Wesselényi utca"
              placeholder="blurred"
              className="rounded-[10px]"
            />
            {/* <GatsbyImage
              image={getImage(image2)}
              alt={service.image2Alt}
              className="image"
            /> */}
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            className="mt-5 lg:mt-0"
          >
            <h3
              id="1"
              className="font-sharp_bold font-normal text-text text-[25px] tracking-[0] leading-[22px] mb-[16px]"
            >
              Homlokzat veszélytelenítés - WESSELÉNYI U.
            </h3>
            <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="text-center"
          >
            <StaticImage
              height={430}
              src="../../images/References/header7.jpeg"
              alt="Wesselényi utca"
              placeholder="blurred"
              className="rounded-[10px]"
            />
            {/* <GatsbyImage
            image={getImage(image)}
            alt={tematic.imageAlt}
            className="image"
          /> */}
          </Col>
        </Row>
      </Container>
      <Footer footerData={"footerData"} />
    </>
  );
};

export default ReferencesPage;
