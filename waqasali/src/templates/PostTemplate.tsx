import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO } from "../components";
import { Heading, Text } from "@chakra-ui/core";

const PostTemplate: React.FunctionComponent<any> = ({ data }) => {
  const { markdownRemark } = data;
  const {
    frontmatter: { title, date, excerpt },
    html
  } = markdownRemark;
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Heading size="md">{title}</Heading>
      <Text>{date}</Text>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
