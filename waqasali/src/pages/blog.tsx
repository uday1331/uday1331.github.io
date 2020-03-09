import React from "react";

import { SEO, Layout, InternalLink } from "../components";
import { Text, Box } from "@chakra-ui/core";
import { graphql } from "gatsby";

interface BlogData {
  title: string;
  path: string;
  excerpt: string;
}

const Blog: React.FC<BlogData> = ({ title, path, excerpt }) => (
  <Box>
    <InternalLink to={path}>
      <Text>{title}</Text>
      <Text>{excerpt}</Text>
    </InternalLink>
  </Box>
);

const Blogs: React.FC<any> = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const blogs = edges.map(
    ({ node: { frontmatter } }: any) => frontmatter
  ) as BlogData[];
  return (
    <Layout>
      <SEO title="Projects" />
      {blogs.map((blog, key) => (
        <Blog key={key} {...blog} />
      ))}
    </Layout>
  );
};

export const blogsQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/src/blogs/" } }
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

export default Blogs;
