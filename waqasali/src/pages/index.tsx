import React from "react";

import { SEO, Layout } from "../components";
import {
  Link,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
  Box,
  Heading,
  StatHelpText,
  Divider
} from "@chakra-ui/core";
import { useStaticQuery, graphql } from "gatsby";

const Attribute: React.FunctionComponent<{
  attribute: string;
  detail: string;
  additionalInfo?: string;
}> = ({ attribute, detail, additionalInfo }) => {
  return (
    <Stat>
      <StatLabel>{attribute}</StatLabel>
      <StatNumber>{detail}</StatNumber>
      {additionalInfo && <StatHelpText>{additionalInfo}</StatHelpText>}
    </Stat>
  );
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query socialHandlesQuery {
      site {
        siteMetadata {
          linkedin
          github
          email
          twitter
        }
      }
    }
  `);
  const { linkedin, github, email, twitter } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title="Home" />
      <Stack p={2} shouldWrapChildren>
        <Attribute
          attribute="Currently"
          detail="Credit Suisse"
          additionalInfo="Software Engineer"
        />
        <Divider />
        <Attribute
          attribute="Alma Mater"
          detail="University of Hong Kong"
          additionalInfo="Class of 2020"
        />
      </Stack>
      <Box borderWidth="1px" p={2} marginY={2}>
        <Heading size="sm" textAlign="center">
          Get in touch
        </Heading>
        <Stack isInline shouldWrapChildren>
          <Link padding={1} href={`https://linkedin.com/in/${linkedin}`}>
            LinkedIn
          </Link>
          <Link padding={1} href={`https://github.com/${github}`}>
            GitHub
          </Link>
          <Link padding={1} href={`mailto:${email}`}>
            Email
          </Link>
          <Link padding={1} href={`https://twitter.com/${twitter}`}>
            Twitter
          </Link>
        </Stack>
      </Box>
    </Layout>
  );
};

export default IndexPage;
