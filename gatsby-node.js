/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(`src/templates/ProjectTemplate.tsx`);

  const projectsResult = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/projects/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (projectsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  projectsResult.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: {}
    });
  });

  const blogTemplate = path.resolve(`src/templates/BlogTemplate.tsx`);

  const blogsResult = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/blogs/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (blogsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  blogsResult.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {}
    });
  });
};
