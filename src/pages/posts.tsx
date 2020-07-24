import React from "react";
import { Text, Box, Heading, Stack, PseudoBox } from "@chakra-ui/core";

import { SEO, Layout, InternalLink } from "../components";

interface PostData {
  title: string;
  date: string;
  path: string;
  excerpt: string;
}

const Post: React.FC<PostData> = ({ title, path, excerpt, date }) => (
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

const Posts: React.FC<any> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const posts = edges.map(
    ({ node: { frontmatter } }: any) => frontmatter
  ) as PostData[];
  return (
    <Layout>
      <SEO title="Posts" />
      <Stack spacing={3}>
        {posts.map((post, key) => (
          <PseudoBox marginBottom={4}>
            <Post key={key} {...post} />
          </PseudoBox>
        ))}
      </Stack>
    </Layout>
  );
};

// export const postsQuery = graphql`
//   query {
//     allMdx(
//       filter: { fileAbsolutePath: { regex: "/src/posts/" } }
//       sort: { order: DESC, fields: [frontmatter___date] }
//       limit: 1000
//     ) {
//       edges {
//         node {
//           frontmatter {
//             path
//             title
//             excerpt
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `;
