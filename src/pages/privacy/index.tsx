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

interface PrivacyPageProps extends PageProps {
  data: {
    page: Page;
  };
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ data }: { data: any }) => {
  //const { page } = data;
  // const headerData = page.elements[0];
  // const { elements, ...aboutUsData } = page.elements[1];
  // const servicesData = page.elements[1].elements;

  return (
    <>
      <Container fluid className="body-container">
        <Header isVideoHeader={false} />
        <Container className="mt-[45px] lg:my-[65px]">
          <Row>
            <Col>
              <h3 className="font-sharp_bold font-normal text-text text-[25px] tracking-[0] leading-[22px] mb-[26px] ">
                ADATVÉDELEM
              </h3>
              <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mb-4 underline">
                www.flowalpin.hu
              </p>
              <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mb-4 underline">
                Hatályba lépés időpontja: 2024. xx. xx.
              </p>
              <div className="w-full h-full flex flex-col font-sharp font-normal text-text text-[15px] tracking-[0] leading-[22px]">
                <p>
                  A Flow Alpin (székhely: 1118 Budapest, Ménesi u. 80. adószám:
                  68448284-1-43) a jelen adatkezelési tájékoztató keretei közt
                  tesz eleget az adatkezeléssel kapcsolatos kötelezettségének.
                </p>
                <span className="my-3 underline">
                  Bevezető rendelkezések, a tájékoztató célja
                </span>
                <p>
                  Az Adatkezelő a jelen Adatkezelési Tájékoztatóban rögzíti az
                  Európai Parlament és a Tanács (EU) 2016/679 rendelete (2016.
                  április 27.) a természetes személyeknek a személyes adatok
                  kezelése tekintetében történő védelméről és az ilyen adatok
                  szabad áramlásáról, valamint a 95/46/EK rendelet hatályon
                  kívül helyezéséről (a továbbiakban: GDPR) és az információs
                  önrendelkezési jogról és az információszabadságról szóló 2011.
                  évi CXII. törvény (a továbbiakban: Infotv.) rendelkezéseinek
                  végrehajtása érdekében az adatvédelemmel kapcsolatos irányadó
                  szabályokat, az ezzel kapcsolatos eljárási rendet, kifejezésre
                  juttatva a rendeletben meghatározott alapelvek tiszteletét és
                  védelmét.
                </p>
                <p className="mt-3">
                  Az adatkezelő magára nézve kötelezőnek ismeri el jelen
                  tájékoztató tartalmát. Az Adatkezelési Tájékoztató célja az
                  Adatkezelő ügyfelei, partnerei, megbízói tájékoztatása
                  személyes adataik kezelését illetően. Az adatkezelő csak a
                  mindenkor hatályos jogszabályi rendelkezésekkel összhangban,
                  azok előírásait szigorúan betartva végzi a személyes adatok
                  kezelését, figyelembe véve a GDPR 5. cikkében foglalt
                  alapelveket is:
                </p>
                <ul className="my-3">
                  <li>
                    * jogszerűség, tisztességes eljárás és átláthatóság elve,
                  </li>
                  <li>* a célhoz kötöttség elve,</li>
                  <li>* az adattakarékosság elve,</li>
                  <li>* a pontosság elve,</li>
                  <li>* a korlátozott tárolhatóság elve.</li>
                </ul>
                <p className="my-2">
                  Az Adakezelő elkötelezett az érintettek személyes adatainak
                  védelmében, kiemelten fontosnak tartja az érintettek
                  önrendelkezési jogának tiszteletben tartását. A rögzített
                  személyes adatokat bizalmasan, az adatvédelmi jogszabályokkal
                  összhangban kezeli. Mindezeken túl megtesz minden olyan
                  technikai és szervezési intézkedést, amely az adatok
                  biztonságos megőrzését garantálja. Az adatokat megfelelő
                  intézkedésekkel védi a jogosulatlan hozzáférés,
                  megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés
                  vagy megsemmisítés, valamint a véletlen megsemmisülés és
                  sérülés, továbbá az alkalmazott technika megváltozásából
                  fakadó hozzáférhetetlenné válás ellen. Az Adatkezelési
                  Tájékoztató személyi, tárgyi és időbeli hatálya: A jelen
                  Adatkezelési Tájékoztató személyi hatálya kiterjed az
                  Adatkezelőre, valamint azon természetes személyekre, akik
                  adatait a jelen Tájékoztató hatálya alá tartozó adatkezelések
                  tartalmazzák, továbbá azon személyekre, akik jogait vagy jogos
                  érdekeit az adatkezelés érinti.
                </p>
                TO BE CONTINUED....
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer footerData={"footerData"} />
    </>
  );
};

export default PrivacyPage;
