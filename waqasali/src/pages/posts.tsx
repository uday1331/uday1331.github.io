import React from "react";

import { SEO, Layout, InternalLink } from "../components";
import { Text, Box } from "@chakra-ui/core";
import { graphql } from "gatsby";

interface ProjectData {
  title: string;
  path: string;
  excerpt: string;
}
const Post: React.FC<ProjectData> = ({ title, path, excerpt }) => (
  <Box>
    <InternalLink to={path}>
      <Text>{title}</Text>
      <Text>{excerpt}</Text>
    </InternalLink>
  </Box>
);

const Posts: React.FC<any> = ({
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
      {projects.map(({ path, title, excerpt }, key) => (
        <Post key={key} title={title} path={path} excerpt={excerpt} />
      ))}
    </Layout>
  );
};

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
          }
        }
      }
    }
  }
`;

export default Posts;
