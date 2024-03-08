import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/ContactForm/index";
import FacebookCircleIcon from "../../images/Icons/facebookCircle.inline.svg";
import InstagramCircleIcon from "../../images/Icons/instagramCircle.inline.svg";
import LinkedinCircleIcon from "../../images/Icons/linkedinCircle.inline.svg";
import EnvelopeIcon from "../../images/Icons/envelope.inline.svg";
import PhoneIcon from "../../images/Icons/phone.inline.svg";
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

interface ContactPageProps extends PageProps {
  data: {
    page: Page;
  };
}

const ContactPage: React.FC<ContactPageProps> = ({ data }: { data: any }) => {
  //const { page } = data;
  // const headerData = page.elements[0];
  // const { elements, ...aboutUsData } = page.elements[1];
  // const servicesData = page.elements[1].elements;

  return (
    <>
      <Container fluid className="body-container">
        <Header isVideoHeader={false} />
        <Container className=" mt-[45px] lg:my-[65px]">
          <Row>
            <Col md={6}>
              <h3 className="font-sharp_bold font-normal text-text text-[28px] tracking-[0] leading-[22px] mb-[16px]">
                KAPCSOLAT
              </h3>
              <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mt-[16px]">
                Szeretne azonnali árajánlatot kérni alpinista munkához? Küldje
                el email címét és írja meg nekünk pár mondatban milyen típusú
                munkárol lenne szó, ezután felvesszük önnel a kapcsolatot és egy
                ingyenes felmérést követően tudunk árajánlatot adni.
              </p>
              <div className="flex align-items-center mt-[14px]">
                <EnvelopeIcon />
                <span className="font-sharp font-normal text-text text-[13px] ml-2">
                  flowalpin@gmail.com
                </span>
              </div>
              <div className="flex align-items-center mt-[10px] mb-[24px]">
                <PhoneIcon />
                <span className="font-sharp font-normal text-text text-[13px]">
                  +36204116443
                </span>
              </div>
              <Form />
              <h3 className="font-sharp_bold font-normal text-text text-[20px] tracking-[0] leading-[22px] mt-[60px] mb-[16px]">
                KÖZÖSSÉGI
              </h3>
              <div className="flex align-items-center justify-content-start mt-[14px] mb-[24px]">
                <a title="facebook" href="#">
                  <FacebookCircleIcon className="" />
                </a>
                <a title="instagram" href="#">
                  <InstagramCircleIcon className="mx-4" />
                </a>
                <a title="linkedin" href="#">
                  <LinkedinCircleIcon className="" />
                </a>
              </div>
            </Col>
            <Col
              md={5}
              className="text-center mb-[40px] lg:mb-[0px] ml-0 lg:ml-5"
            >
              {/* <GatsbyImage
                image={getImage(image)}
                alt={contact.imageAlt}
                className="image"
              /> */}
              <StaticImage
                height={650}
                src="../../images/References/header1.jpeg"
                alt="Váci út"
                placeholder="blurred"
                className="w-full object-cover rounded-[8px]"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer footerData={"footerData"} />
    </>
  );
};

export default ContactPage;
