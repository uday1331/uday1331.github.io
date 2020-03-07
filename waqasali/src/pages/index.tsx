import React from "react";

import { SEO, Layout } from "../components";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I am Waqas</h1>
    <p>Software Engineer at Credit Suisse</p>
    <p>University of Hong Kong (Class of 2020)</p>
    <p>Lives In: Hong Kong</p>
    <p>From: Pakistan</p>
    <p>
      <a href="https://linkedin.com">LinkedIn</a>
    </p>
    <p>
      <a href="https://github.com/WaqasAliAbbasi">GitHub</a>
    </p>
    <p>
      <a href="mailto:waqas.abbasi@outlook.com">Email</a>
    </p>
  </Layout>
);

export default IndexPage;
