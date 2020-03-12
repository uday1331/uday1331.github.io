import React from "react";
import { Flex, Text, Divider } from "@chakra-ui/core";

export const Footer: React.FunctionComponent<{ lastUpdated: string, shortHash: string }> = ({
  lastUpdated,
  shortHash
}) => {
  return (
    <Flex marginTop="1px" as="footer" justify="center">
      <Text fontSize="xs">#{shortHash}</Text>
      <Divider orientation="vertical" />
      <Text fontSize="xs">Last Updated: {lastUpdated}</Text>
      <Divider orientation="vertical" />
      <Text fontSize="xs">© {new Date().getFullYear()}</Text>
    </Flex>
  );
};
