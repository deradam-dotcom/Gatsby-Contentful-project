import * as React from "react"
import { graphql } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from 'react-bootstrap';
import Header from '../Components/Header';
import AboutUs from '../Components/AboutUs';
import ServiceCards from '../Components/ServiceCards';
import ReferencesSlider from '../Components/ReferencesSlider';
import Footer from "../Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

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

interface IndexPageProps extends PageProps {
	data: {
		page: Page;
	};
}

const IndexPage: React.FC<IndexPageProps> = ({ data }: { data: any }) => {
  //const { page } = data;
  // const headerData = page.elements[0];
  // const { elements, ...aboutUsData } = page.elements[1];
  // const servicesData = page.elements[1].elements;

  return (
    <>
      <Container fluid className="body-container">
        <Header isVideoHeader={true} />
        <AboutUs />
        <ServiceCards />
        {/* {headerData && <Header headerData={headerData} />}
    		{aboutUsData && <AboutUs aboutUsData={aboutUsData} />}
    		{servicesData && <ServiceCards servicesData={servicesData} />} */}
      </Container>
      <ReferencesSlider />
      <Container fluid className="bg-section">
        <Footer footerData={"footerData"} />
      </Container>
    </>
  );
};

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

// export const query = graphql`
//     query {
// 		page: contentfulPage(contentful_id: { eq: "1Wo3eREv0bb4Wfi8WaN0k3" }) {
// 			title
//             slug
//             description {
//                 description
//             }
//             ogImage { # type ContentfulAsset
//                 gatsbyImageData(
//                     quality: 100
//                     placeholder: DOMINANT_COLOR
//                 )
//                 publicUrl
//                 url
//                 title
//                 internal {
//                     type
//                 }
//             }
//             elements {
//                 ... on ContentfulHeader {
//                     title
//                     simpleSubtitle: subtitle
//                     backgroundVideo {
//                         publicUrl
//                         url
//                         placeholderUrl
//                     }
//                     additionalElements { # type ContentfulCallToAction
//                         text
//                         target
//                         image { # type ContentfulAsset
//                             gatsbyImageData(
//                                 quality: 100
//                                 placeholder: DOMINANT_COLOR
//                             )
//                             publicUrl
//                             url
//                             title
//                             internal {
//                                 type
//                             }
//                         }
//                     }
//                 }
//                 ... on ContentfulListOfElements {
//                     title
//                     subtitle {
//                         raw
//                     }
//                     lead {
//                         raw
//                     }
//                     elements { # type ContentfulCallToAction
//                         text
//                         target
//                         image { # type ContentfulAsset
//                             gatsbyImageData(
//                                 quality: 100
//                                 placeholder: DOMINANT_COLOR
//                             )
//                             publicUrl
//                             url
//                             title
//                             internal {
//                                 type
//                             }
//                         }
//                     }
//                 }
//             }
// 		}
// 	}
// `
