import React from "react";

import { SEO, Layout, InternalLink } from "../components";
import { Text, Box } from "@chakra-ui/core";
import { graphql } from "gatsby";

interface ProjectData {
  title: string;
  path: string;
}
const Project: React.FC<ProjectData> = ({ title, path }) => (
  <Box>
    <InternalLink to={path}>
      <Text>{title}</Text>
    </InternalLink>
  </Box>
);

const Projects: React.FC<any> = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const projects = edges.map(
    ({ node: { frontmatter } }: any) => frontmatter
  ) as ProjectData[];
  return (
    <Layout>
      <SEO title="Projects" />
      {projects.map(({ path, title }, key) => (
        <Project key={key} title={title} path={path} />
      ))}
    </Layout>
  );
};

export const projectsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;

export default Projects;
