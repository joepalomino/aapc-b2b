/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  return graphql(
    `
    {
      allContentfulPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `
  ).then(result => {
    if(result.errors) {
      console.log("Error retrieving contentful page data", result.errors);
    }

    const pageTemplate = path.resolve("./src/components/page.js");

    result.data.allContentfulPage.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.slug}`,
        component: pageTemplate,
        context: {
          slug: edge.node.slug
        }
      })
    })


  })


}


exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
      fs: 'empty'
  };
};