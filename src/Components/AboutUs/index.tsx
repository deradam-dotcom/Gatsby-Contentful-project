import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContentfulRichText from "../ContentfulRichText";
import ArrowIcon from "../../images/Icons/rightArrow.inline.svg";
import { ContentfulListOfElements } from "../../pages";
import { StaticImage } from "gatsby-plugin-image";

interface AboutUsProps {
  aboutUsData?: ContentfulListOfElements;
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutUsData }) => {
  //const leadData = aboutUsData.lead.raw;
  //const subtitleData = aboutUsData.subtitle.raw;

  return (
    <Container
      fluid
      className="h-auto flex items-start lg:items-center lg:mt-[53px]  xs:mt-6"
    >
      <Row className="w-full h-full align-items-start mt-5">
        <Col md={{ span: 2, offset: 2 }} className="flex mb-9 lg:mb-0 mt-[6px]">
          <div className="mr-2 mt-[6px]">
            <ArrowIcon />
          </div>
          <div className="flex flex-col font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mt-[6px]">
            {/* <span className="mb-4">{aboutUsData.title}</span> */}
            <span className="mb-4 font-bold">
              Hol lehet szükség az ipari alpinistákra?
            </span>
            A nevével ellentétben nem csak az iparban…. Társasházak, családi
            házak, irodaházak, aknák, légudvarok, tornyok, ipari kémények, nagy
            méretű gépek (daruk, bányagépek, ipari kazánok, stb.) karbantartási,
            tisztítási, ellenőrzési vagy egyéb más munkálatai alkalmával lehet
            szükségünk rájuk.
            {/* <ContentfulRichText json={subtitleData} /> */}
            <StaticImage
              height={400}
              src="../../images/alpin2.png"
              alt="flowalpin_alpin"
              placeholder="blurred"
              className="ml-5 mt-5"
            />
          </div>
        </Col>
        <Col
          md={{ span: 4, offset: 2 }}
          className="font-tanker font-normal text-text text-[36px] lg:text-[50px] tracking-[0] leading-[42px] lg:leading-[52px] ml-5 lg:ml-0 mt-1"
        >
          <p
            style={{
              background: "#edc524",
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
              display: "inline",
              lineHeight: "1.4",
              marginBottom: "10px",
              padding: "0 12px",
            }}
          >
            Szükséged van egy megbizható csapatra aki otthonosan mozog a
            magasban és a földön egyaránt?
            <br /> A FLOWALPIN a megoldásod kulcsa. Budapesten és
            vonzáskörzetében személyre szabott megoldásokkal várunk.
          </p>
          {/* <ContentfulRichText
            json={leadData}
            style={{
              background: "#fff",
              boxDecorationBreak: "clone",
              WebkitBoxDecorationBreak: "clone",
              display: "inline",
              lineHeight: "1.4",
              marginBottom: "10px",
              padding: "0 12px",
            }}
          /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
