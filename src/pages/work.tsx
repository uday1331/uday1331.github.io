import React from "react";
import {
  Text,
  Box,
  Heading,
  Grid,
  Switch,
  FormLabel,
  Flex
} from "@chakra-ui/core";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import { SEO, Layout, InternalLink } from "../components";
import { truncateText } from "../utils";
import { PRIMARY_COLOR } from "../theme";

interface ProjectData {
  title: string;
  path: string;
  description: string;
  preview_image: any;
  date: string;
  highlight: boolean;
}
const Project: React.FC<ProjectData> = ({
  title,
  path,
  description,
  preview_image,
  date
}) => (
  <InternalLink to={path}>
    <Box padding={2}>
      <Img fluid={preview_image.childImageSharp.fluid} />
      <Heading size="md" marginTop={1}>
        {title}
      </Heading>
      <Text fontSize="xs" fontWeight="light" marginBottom={1}>
        {date}
      </Text>
      <Text fontSize="sm" fontWeight="light">
        {truncateText({ text: description, maxLength: 100 })}
      </Text>
    </Box>
  </InternalLink>
);

const Projects: React.FC<any> = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const [showAll, setshowAll] = React.useState(false);

  const projects = edges.map(
    ({ node: { frontmatter } }: any) => frontmatter
  ) as ProjectData[];
  return (
    <Layout>
      <SEO title="Projects" />
      <Flex align="center" justify="flex-end" paddingRight={2}>
        <FormLabel htmlFor="show-all" fontWeight="light">
          See All
        </FormLabel>
        <Switch
          id="show-all"
          aria-label="Show All Projects"
          value={showAll}
          color={PRIMARY_COLOR}
          onChange={() => setshowAll(!showAll)}
        />
      </Flex>
      <Grid templateColumns="repeat( auto-fit, minmax(150px, 1fr) )" gap={6}>
        {projects
          .filter(({ highlight }) => showAll || highlight)
          .map((project, key) => (
            <Project key={key} {...project} />
          ))}
      </Grid>
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
            highlight
            date(formatString: "MMMM DD, YYYY")
            preview_image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 100, fit: COVER) {
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
