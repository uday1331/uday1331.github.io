import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

import { SEO, Layout } from "../components";
import {
  Link,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
  Box,
  StatHelpText,
  Divider,
  Text,
  Flex,
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

const SocialLink: React.FC<{
  text: string;
  url: string;
  icon: any;
}> = ({ text, url, icon }) => (
  <Link href={url} paddingRight={2}>
    <Flex align="center">
      <Box as={icon} size="15px" marginRight={1} />
      <Text>{text}</Text>
    </Flex>
  </Link>
);
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
      <Stack shouldWrapChildren>
        <Attribute
          attribute="Currently"
          detail="KM.ON"
          additionalInfo="Software Engineer Intern"
        />
        <Divider />
        <Attribute
          attribute="Alma Mater"
          detail="University of Hong Kong"
          additionalInfo="Class of 2022"
        />
      </Stack>
      <Divider />
      <Text fontSize="sm" fontWeight="medium" marginY={2}>
        Get In Touch
      </Text>
      <Flex justify="space-between" wrap="wrap">
        <SocialLink url={`mailto:${email}`} text="Email" icon={FaEnvelope} />
        <SocialLink
          url={`https://linkedin.com/in/${linkedin}`}
          text="LinkedIn"
          icon={FaLinkedin}
        />
        <SocialLink
          url={`https://github.com/${github}`}
          text="GitHub"
          icon={FaGithub}
        />
        <SocialLink
          url={`https://twitter.com/${twitter}`}
          text="Twitter"
          icon={FaTwitter}
        />
      </Flex>
    </Layout>
  );
};

export default IndexPage;
