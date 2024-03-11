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

interface TermsPageProps extends PageProps {
  data: {
    page: Page;
  };
}

const TermsPage: React.FC<TermsPageProps> = ({ data }: { data: any }) => {
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
                ÁSZF
              </h3>
              <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mb-4">
                Általános Szerződési Feltételek
              </p>
              <p className="font-sharp font-normal text-text text-[16px] tracking-[0] leading-[22px] mb-4">
                <u>Hatályba lépés időpontja: 2024. xx. xx.</u>
              </p>
              <div className="w-full h-full flex flex-col font-sharp font-normal text-text text-[15px] tracking-[0] leading-[22px]">
                <p>
                  Jelen Általános Szerződési Feltétel (a továbbiakban: ÁSZF)
                  tartalmazza a szolgáltatást nyújtó Flow Alpin (Dér Ádám e.v.,
                  székhely: 1118 Budapest, Ménesi u. 80., nyilvántartási szám:
                  51761332, adószám: 68448284-1-43, email: flowalpin@gmail.com,
                  telefonszám: +36204116443) a továbbiakban: Kivitelező) és a
                  szolgáltatást igénybe vevő, természetes vagy jogi személy
                  (továbbiakban: Megrendelő) közötti szerződés általános
                  feltételeit, a Kivitelező és a Megrendelő jogait és
                  kötelezettségeit.
                </p>
                <p className="mt-3">
                  A Kivitelező fenntartja a jogát annak, hogy az ÁSZF-et
                  egyoldalúan módosítja. A módosításról rövid felhívásban
                  tájékoztatja a Megrendelőket, amelyet a megrendelés során
                  megadott email címre vagy Messengeren kiküld, továbbá
                  közzéteszi a módosított változatot egységes szerkezetbe
                  foglalva a weboldalán.
                </p>
                <span className="my-3">
                  <u>A Kivitelező felelősségi köre</u>
                </span>
                <p>
                  Kivitelező mentesül a felelősség alól, amennyiben bizonyítja,
                  hogy a szerződésszegést az ellenőrzési körén kívül eső, a
                  szerződéskötés időpontjában előre nem látható körülmény
                  okozta, és nem volt elvárható, hogy a körülményt elkerülje
                  vagy a kárt elhárítsa.
                </p>
                <p className="my-2">
                  <u>Hibás teljesítés:</u> a Kivitelező hibásan teljesít, ha a
                  kivitelezés a teljesítés időpontjában nem felel meg a
                  szerződésben vagy jogszabályban megállapított minőségi
                  követelményeknek. Nem teljesít hibásan, ha a Megrendelő a
                  hibát a szerződéskötés időpontjában ismerte, vagy a hibát a
                  szerződéskötés időpontjában ismernie kellett.
                </p>
                <p>
                  <u>Szavatosság:</u> Olyan szerződés alapján, amelyben a felek
                  kölcsönös szolgáltatásokkal tartoznak, a Kivitelező a hibás
                  teljesítésért szavatossággal tartozik. Szavatossági igénye
                  alapján a Megrendelő választása szerint.
                </p>
                <span className="my-3">
                  <u>Adatkezelés</u>
                </span>
                <p>
                  A www.flowalpin.hu internetes weboldalon és a megrendelések
                  során kezelt személyes adatokra vonatkozó tájékoztatót a
                  Honlapon elérhető Adatkezelési Tájékoztató tartalmazza.
                </p>
                <span className="my-3">
                  <u>Együttműködési és tájékoztatási kötelezettség</u>
                </span>
                <p>
                  Kivitelező és Megrendelő köteles a szerződéskötési tárgyalások
                  alatt, a szerződés megkötésénél, fennállása alatt és
                  megszüntetése során együttműködni és tájékoztatni egymást a
                  szerződés lényeges körülményeiről.
                </p>
                <span className="my-3">
                  <u>Panaszok intézése</u>
                </span>
                <p>
                  A Kivitelező panaszról jegyzőkönyvet köteles felvenni és azt a
                  panaszfelvételre adott válasszal együtt a panaszfelvétel
                  napjától számított öt évig megőrizni.
                </p>
                <p className="my-3">
                  Kivitelező köteles a hozzá beérkezett panaszt 30 napon belül
                  megvizsgálni és arra érdemi választ adni. Elutasító válasz
                  esetén Szolgáltató köteles írásban megindokolni az elutasítás
                  okát.
                </p>
                <p>
                  A Kivitelezővel kötött szerződésből eredő jogviták elsősorban
                  békés úton, a felek közti megállapodással, vagy a Megrendelő,
                  mint fogyasztó lakóhelye szerinti fogyasztóvédelmi hatóság
                  előtt rendezhetők. Amennyiben a fenti lehetőségek nem vezetnek
                  eredményre, felek választásuk szerint a Kivitelező székhelye
                  szerinti békéltető testülethez vagy a bírósághoz fordulhatnak.
                  A lakcím szerint illetékes kereskedelmi és iparkamarák:
                </p>
                <p className="mt-3 italic">
                  Budapesti Békéltető Testület Címe: 1016 Budapest, Krisztina
                  krt. 99.Telefonszáma: (1) 488-2131 Fax száma: (1) 488-2186
                  Elnök: Dr. Baranovszky György E-mail
                  cím:bekelteto.testulet@bkik.hu
                </p>
                <span className="my-3">
                  <u>Az ÁSZF módosítása</u>
                </span>
                <ol>
                  <li className="mb-2">
                    1. Kivitelező a jelen ÁSZF-et jogosult saját döntése és
                    belátása szerint egyoldalúan módosítani. A módosítás indoka
                    lehet:
                    <br /> - A Szolgáltató körülményeiben bekövetkezett lényeges
                    változás;
                    <br /> - Jogszabályváltozás;
                    <br /> - a Kivitelező működésével, gazdasági érdekeivel,
                    műszaki vagy technikai lehetőségeivel, gazdálkodásával,
                    szolgáltatást befolyásoló körülményeivel kapcsolatos ok.
                  </li>
                  <li className="mb-2">
                    2. Kivitelező az ÁSZF-et, továbbá annak módosítását és a
                    módosítással egységes szerkezetbe foglalt ÁSZF-et köteles a
                    weboldalon jól látható helyen, annak nyitóoldalán, onnan
                    közvetlenül elérhető módon, tárolható, megjeleníthető és
                    nyomtatható módon ingyenesen közzétenni. Az ÁSZF módosítás a
                    közzétételt követő 8. napon lép hatályba és az ÁSZF
                    módosítás minden, módosítás hatályba lépése után kötött és
                    azt megelőzően kötött szerződésre is alkalmazandó.
                    Szolgáltató elektronikus úton értesíti a Megrendelőket az
                    ÁSZF módosulásáról (email).
                  </li>
                  <li>
                    3. Amennyiben a Megrendelő az ÁSZF módosítás ellen a
                    közzétételtől, illetve az értesítéstől (amelyik későbbi)
                    számított 8 napon belül a Szolgáltatónál írásban nem
                    tiltakozik, azt ráutaló magatartásnak kell tekinteni,
                    amellyel a Megrendelő a módosítást kifejezetten elfogadta.
                    Amennyiben a Megrendelő kifejezetten tiltakozik az ÁSZF
                    módosítás ellen és azt kifejezetten nem fogadja el, a
                    Kivitelező jogosult a Megrendelővel fennálló szerződését 15
                    napos felmondási idővel írásban felmondani.
                  </li>
                </ol>
                <span className="my-3">
                  <u>Vegyes rendelkezések</u>
                </span>
                <ol>
                  <li className="mb-2">
                    1.Amennyiben jelen ÁSZF valamely rendelkezése érvénytelen
                    vagy érvénytelenné válik, úgy ez a rendelkezés az ÁSZF többi
                    rendelkezését nem érinti.
                  </li>
                  <li className="mb-2">
                    2.Jelen ÁFSZ-ben nem részletezett kérdésekre a Ptk.
                    szabályai az irányadók.
                  </li>
                  <li>3.Jelen ÁSZF határozatlan időtartamra szól.</li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer footerData={"footerData"} />
    </>
  );
};

export default TermsPage;
