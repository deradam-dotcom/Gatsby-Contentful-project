import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Line from "../../components/Line";

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

interface AlpintechnicPageProps extends PageProps {
  data: {
    page: Page;
  };
}

const AlpintechnicPage: React.FC<AlpintechnicPageProps> = ({
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
      <Container className="mt-[45px] lg:my-[65px]">
        <Row className="h-auto">
          <Col className="pt-[32px] lg:py-0">
            <h3 className="font-sharp_bold font-normal text-text text-[28px] tracking-[0] leading-[22px] mb-[16px]">
              ALPINTECHNIKA
            </h3>
            <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mt-[16px]">
              <span className="font-bold underline">
                Ipari alpintechnikai tevékenység (alpintechnika):
              </span>
              a munkafeladat elvégzésének érdekében, nem állandóan és
              megszakításokkal folytatott olyan munkavégzés, ahol a 2 méter
              szintkülönbséget meghaladó ideiglenes munkahely megközelítése, az
              ott-tartózkodás, a munkafeladat végrehajtása és a munkahely
              elhagyása egyéni védőeszközök és meghatározott felszerelések
              összehangolt és egyidejű igénybevételével (alpintechnikai
              módszerrel) történik.
              <br />
            </p>
            <p className="mt-2 font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px]">
              Kollektív munkavédelmi módszerekkel, eszközökkel (állványzat,
              kosaras személyemelő, függesztett munkaállvány stb.)
              megközelíthetetlen, elérhetetlen munkaterületeken végzett,
              szakmunkát elősegítő módszer.
            </p>

            <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mt-[16px]">
              Az alpintechnika ma már nem csak az épületek külső felületére
              korlátozódik. A magasabb elemek bontása, a veszélyes fák kivágása,
              reklámtáblák kihelyezése és leszerelése, valamint sok más feladat
              is az alpintechnika területéhez kapcsolódik. Alkalmazásával
              jelentős mennyiségű időt, energiát és pénzt spórolhat meg. Az
              alpintechnika megoldásaival képesek vagyunk bármilyen magas
              építményen, toronyépületeken, mélyépítésű létesítményekben
              elvégezni bármilyen szerelési, felújítási, veszélyelhárítási
              munkát.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 mb-0">
          <Col md={4} className="text-center mb-4 lg:mb-0">
            <StaticImage
              height={400}
              src="../../images/References/header8.png"
              alt="Wesselényi utca"
              placeholder="blurred"
              className="rounded-[10px]"
            />
            {/* <GatsbyImage
              image={getImage(image1)}
              alt={"product one"}
              className="image"
            /> */}
          </Col>
          <Col md={4} className="text-center mb-4 lg:mb-0">
            <StaticImage
              height={430}
              src="../../images/References/header2.jpeg"
              alt="Wesselényi utca"
              placeholder="blurred"
              className="rounded-[10px]"
            />
            {/* <GatsbyImage
              image={getImage(image2)}
              alt={"product two"}
              className="image"
            /> */}
          </Col>
          <Col md={4} className="text-center mb-4 lg:mb-0">
            <StaticImage
              height={280}
              src="../../images/References/header6.jpeg"
              alt="Wesselényi utca"
              placeholder="blurred"
              className="rounded-[10px]"
            />
            {/* <GatsbyImage
              image={getImage(image3)}
              alt={"product three"}
              className="image"
            /> */}
          </Col>
        </Row>
        <Line />
        <Row>
          <Col className="text-center my-5">
            <p>
              Ipari alpinista egyedül nem dolgozhat, a minimum létszám 2 fő,
              megfelelő képesítéssel. Az ipari alpinista munkáját Magyarországon
              az alábbi rendelet szabályozza: „11/2003. (IX.12) FMM rendelet az
              ipari alpintechnikai tevékenység biztonsági szabályzatáról”
            </p>
          </Col>
          <Line />
        </Row>
      </Container>
      <Footer footerData={"footerData"} />
    </>
  );
};

export default AlpintechnicPage;
