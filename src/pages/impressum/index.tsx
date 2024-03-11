import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

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

interface ImpressumPageProps extends PageProps {
  data: {
    page: Page;
  };
}

const ImpressumPage: React.FC<ImpressumPageProps> = ({
  data,
}: {
  data: any;
}) => {
  //const { page } = data;
  // const headerData = page.elements[0];
  // const { elements, ...aboutUsData } = page.elements[1];
  // const servicesData = page.elements[1].elements;

  return (
    <>
      <Container fluid className="body-container">
        <Header isVideoHeader={false} />
        <Container className="h-full flex items-center justify-center text-center my-[50px] lg:my-[100px]">
          <Row className="h-full w-full flex items-center justify-center lg:py-[100px]">
            <Col className="h-full lg:py-[65px]">
              <h3 className="font-sharp_bold font-normal text-text text-[25px] tracking-[0] leading-[22px] mb-[26px] text-center">
                IMPRESSUM
              </h3>
              <p
                className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mb-3 text-center"
                style={{
                  background: "#edc524",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  display: "inline",
                  padding: "5px 12px",
                }}
              >
                Flow Alpin
              </p>
              <div className="font-sharp font-normal text-text text-[15px] tracking-[0] leading-[22px] w-full h-full flex flex-col lg:flex-row items-start lg:items-center justify-between mt-5">
                <p className="mb-3">
                  <u> Cím:</u> 1118 Budapest Ménesi út 80.
                </p>
                <p className="mb-3">
                  <u> Adószám:</u> 88555452
                </p>
                <p className="mb-3">
                  <u> Telsz:</u> +36204116443
                </p>
                <p className="mb-3">
                  <u>Email:</u> flowalpin@gmail.com
                </p>
                <p className="mb-3">
                  <u>Hosting:</u>&nbsp;
                  <a
                    href="https://www.mhosting.hu/kapcsolat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Magyar Hosting Kft.
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer footerData={"footerData"} />
    </>
  );
};

export default ImpressumPage;
