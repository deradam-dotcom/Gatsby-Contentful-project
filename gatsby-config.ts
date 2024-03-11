import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: '/Gatsby-Contentful-project',
  siteMetadata: {
    title: `flowalpin`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "OnZaAZsZxt2Ar9OXsjDUutTElfWl1DbZcmiGdrcjhfc",
      "spaceId": "l4j8xiyen6rb"
    }
  }, "gatsby-plugin-image",  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      breakpoints: [480, 750, 1080, 1366, 1920],
      placeholder: 'blurred',
      quality: 80,
      formats: ['auto', 'webp', 'avif']
    }
  },{
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
        omitKeys: ['xmlnsSerif']
      }
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: `${__dirname}/src/pages`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`
    }
  },
 "gatsby-transformer-sharp", "gatsby-plugin-postcss"]
};

export default config;
