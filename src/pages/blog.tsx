import React from "react";
import { Text, Box, Heading, Stack, PseudoBox } from "@chakra-ui/core";
import { graphql } from "gatsby";

import { SEO, Layout, InternalLink } from "../components";

interface BlogData {
  title: string;
  date: string;
  path: string;
  excerpt: string;
}

const Blog: React.FC<BlogData> = ({ title, path, excerpt, date }) => (
  <Box>
    <InternalLink to={path}>
      <Heading size="md" marginBottom={1}>
        {title}
      </Heading>
    </InternalLink>
    <Text fontSize="xs" fontWeight="light">
      {date}
    </Text>
    <Text fontSize="sm" fontWeight="light">
      {excerpt}
    </Text>
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
      <Stack spacing={3}>
        {blogs.map((blog, key) => (
          <PseudoBox marginBottom={4}>
            <Blog key={key} {...blog} />
          </PseudoBox>
        ))}
      </Stack>
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default Blogs;
