import React from "react";

import { Layout, SEO } from "../components";
import { Text, Heading } from "@chakra-ui/core";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>Not Found</Heading>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
);

export default NotFoundPage;
