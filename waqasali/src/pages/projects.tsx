import React from "react";

import { SEO, Layout, InternalLink } from "../components";
import { Text, Box } from "@chakra-ui/core";
import { graphql } from "gatsby";
import Img from "gatsby-image";

interface ProjectData {
  title: string;
  path: string;
  description: string;
  preview_image: any;
}
const Project: React.FC<ProjectData> = ({
  title,
  path,
  description,
  preview_image
}) => (
  <Box>
    <InternalLink to={path}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Img fluid={preview_image.childImageSharp.fluid} style={{ width: 100 }} />
    </InternalLink>
  </Box>
);

const Projects: React.FC<any> = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const projects = edges.map(
    ({ node: { frontmatter } }: any) => frontmatter
  ) as ProjectData[];
  return (
    <Layout>
      <SEO title="Projects" />
      {projects.map(({ path, title, description, preview_image }, key) => (
        <Project
          key={key}
          title={title}
          path={path}
          description={description}
          preview_image={preview_image}
        />
      ))}
    </Layout>
  );
};

export const projectsQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/src/projects/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            description
            preview_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Projects;
