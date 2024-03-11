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
  //const { page } = data;
  // const headerData = page.elements[0];
  // const { elements, ...aboutUsData } = page.elements[1];
  // const servicesData = page.elements[1].elements;

  return (
    <>
      <Container fluid className="body-container">
        <Header isVideoHeader={false} />
      </Container>
      <Container>
        <Row className="">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}></Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="text-center"
          >
            {/* <GatsbyImage
              image={getImage(image1)}
              alt={service.image1Alt}
              className="image"
            /> */}
          </Col>
        </Row>

        <Row className="">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}></Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="text-center"
          >
            {/* <GatsbyImage
              image={getImage(image2)}
              alt={service.image2Alt}
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
