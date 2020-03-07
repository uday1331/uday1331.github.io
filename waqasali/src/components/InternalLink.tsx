import React from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import { Link as UILink, LinkProps as UILinkProps } from "@chakra-ui/core";

type InternalLinkProps = GatsbyLinkProps<{}> & UILinkProps;

export const InternalLink: React.FC<InternalLinkProps> = (
  props: InternalLinkProps
) => {
  return <UILink as={GatsbyLink as any} {...props} />;
};
