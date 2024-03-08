import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Line from "../../Components/Line";

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

interface AboutPageProps extends PageProps {
  data: {
    page: Page;
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ data }: { data: any }) => {
  //const { page } = data;
  // const headerData = page.elements[0];
  // const { elements, ...aboutUsData } = page.elements[1];
  // const servicesData = page.elements[1].elements;

  return (
    <>
      <Container fluid className="body-container">
        <Header isVideoHeader={false} />
        <Container className="mt-[45px] lg:my-[65px]">
          <Row className="h-auto">
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              className="pt-[32px] lg:py-0"
            >
              <h3 className="font-sharp_bold font-normal text-text text-[28px] tracking-[0] leading-[22px] mb-[16px]">
                MI VAGYUNK A FLOWALPIN
              </h3>
              <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mt-[16px]">
                Szükséged van egy megbizható csapatra aki otthonosan mozog a
                magasban és a földön egyaránt? A FLOWALPIN a megoldásod kulcsa.
                Budapesten és vonzáskörzetében személyre szabott megoldásokkal
                várunk. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation.
              </p>
              <Line />
            </Col>
            <Col
              className="text-center "
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 1 }}
            >
              {/* <GatsbyImage
                image={getImage(image)}
                alt={about.imageAlt}
                className={c(styles.image, "image")}
              /> */}
              <StaticImage
                height={650}
                src="../../images/References/header2.jpeg"
                alt="Váci út"
                placeholder="blurred"
                className="w-full object-cover rounded-[8px] about-image"
              />
            </Col>
          </Row>
          <Row className="about-section">
            <Col md={6}>
              <h3 className="font-sharp_bold font-normal text-text text-[28px] tracking-[0] leading-[22px] mb-[16px]">
                MIKOR INDULTUNK?
              </h3>
              <p className="mb-5 font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mt-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <h3 className="font-sharp_bold font-normal text-text text-[28px] tracking-[0] leading-[22px] mb-[16px]">
                HOGYAN DOLGOZUNK?
              </h3>
              <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mt-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
            </Col>
            <Col md={5} className="pt-[32px] lg:py-0 mb-[24px] lg:my-0">
              <h3 className="font-sharp_bold font-normal text-text text-[28px] tracking-[0] leading-[22px] mb-[16px]">
                JÖVŐBENI CÉLJAINK
              </h3>
              <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mt-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Footer footerData={"footerData"} />
    </>
  );
};

export default AboutPage;
