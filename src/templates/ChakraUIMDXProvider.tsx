// References:
// - https://github.com/mustaphaturhan/chakra-ui-markdown-renderer
// - https://github.com/KenzoBenzo/personal-portfolio/blob/master/src/components/docsComponents/MDXComponents.jsx

import React from "react";
import {
  Text,
  Code,
  Divider,
  Link,
  Heading,
  Image,
  useColorMode,
  Box,
  Flex
} from "@chakra-ui/core";
import { MDXProviderComponentsProp } from "@mdx-js/react";
import { getPrimaryColor } from "../theme";

export const ChakraUIMDXProvider = (): MDXProviderComponentsProp => {
  const { colorMode } = useColorMode();
  return {
    p: props => <Text marginBottom={2} {...props} />,
    h1: props => <Heading marginY={4} as={`h1`} size="2xl" {...props} />,
    h2: props => <Heading marginY={4} as={`h2`} size="xl" {...props} />,
    h3: props => <Heading marginY={4} as={`h3`} size="l" {...props} />,
    h4: props => <Heading marginY={4} as={`h4`} size="md" {...props} />,
    h5: props => <Heading marginY={4} as={`h5`} size="sm" {...props} />,
    h6: props => <Heading marginY={4} as={`h6`} size="xs" {...props} />,
    thematicBreak: Divider,
    blockquote: props => <Code padding={2} {...props} />,
    pre: props => <Text as="pre" {...props} />,
    em: props => <Text as="em" {...props} />,
    strong: props => <Text as="strong" {...props} />,
    delete: props => <Text as="del" {...props} />,
    inlineCode: Code,
    a: props => (
      <Link color={getPrimaryColor(colorMode)} {...props} isExternal />
    ),
    code: props => (
      <Flex as="pre" justifyContent="center" marginY={2}>
        <Code p={2} {...props} whiteSpace="pre-wrap" />
      </Flex>
    ),
    ul: props => <Box as="ul" marginY={2} paddingLeft={8} {...props} />,
    ol: props => <Box as="ol" marginY={2} paddingLeft={8} {...props} />,
    li: props => <Box as="li" {...props} />,
    img: Image
  };
};

export default ChakraUIMDXProvider;
