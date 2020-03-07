import React from "react";
import { Flex, Text, Divider } from "@chakra-ui/core";

export const Footer: React.FunctionComponent<{ lastUpdated: string }> = ({
  lastUpdated
}) => {
  return (
    <Flex as="footer" justify="center">
      <Text mt="1px" fontSize="xs">
        Last Updated: {lastUpdated}
      </Text>
      <Divider orientation="vertical" />
      <Text mt="1px" fontSize="xs">
        © {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};
