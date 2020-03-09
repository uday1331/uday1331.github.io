import React from "react";
import { graphql } from "gatsby";
import { Heading, Text, Divider } from "@chakra-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout, SEO } from "../components";

const PostTemplate: React.FunctionComponent<any> = ({ data }) => {
  const { mdx } = data;
  const {
    frontmatter: { title, date, excerpt },
    body
  } = mdx;
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Heading size="xl">{title}</Heading>
      <Text>{date}</Text>
      <Divider />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
      }
    }
  }
`;

export default PostTemplate;
