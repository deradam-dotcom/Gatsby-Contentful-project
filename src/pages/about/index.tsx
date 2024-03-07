import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Container>
          <Row className="">
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <h3 className="">Title</h3>
              <p className="">Text</p>
            </Col>
            <Col
              className="text-center"
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 1 }}
            >
              {/* <GatsbyImage
                image={getImage(image)}
                alt={about.imageAlt}
                className={c(styles.image, "image")}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>

      <Footer footerData={"footerData"} />
    </>
  );
};

export default AboutPage;
