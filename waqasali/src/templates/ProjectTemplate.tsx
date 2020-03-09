import React from "react";
import { graphql } from "gatsby";
import { Heading, Text, Divider } from "@chakra-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { Layout, SEO } from "../components";
import ChakraUIMDXProvider from "./ChakraUIMDXProvider";

const ProjectTemplate: React.FunctionComponent<any> = ({ data }) => {
  const { mdx } = data;
  const {
    frontmatter: { title, date, description },
    body
  } = mdx;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Heading size="xl">{title}</Heading>
      <Text>{date}</Text>
      <Divider />
      <MDXProvider components={ChakraUIMDXProvider()}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
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
        description
      }
    }
  }
`;

export default ProjectTemplate;
