import React from "react";
import { graphql } from "gatsby";
import { Heading, Text, Divider } from "@chakra-ui/core";
import ReactMarkdown from "react-markdown";

import { Layout, SEO } from "../components";
import ChakraUIRenderer from "../components/ChakraUIRenderer";

const ProjectTemplate: React.FunctionComponent<any> = ({ data }) => {
  const { markdownRemark } = data;
  const {
    frontmatter: { title, date, description },
    rawMarkdownBody
  } = markdownRemark;
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Heading size="xl">{title}</Heading>
      <Text>{date}</Text>
      <Divider />
      <ReactMarkdown
        renderers={ChakraUIRenderer()}
        source={rawMarkdownBody}
        escapeHtml={false}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      rawMarkdownBody
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
