import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: theme.colors.purple
  }
};

export default customTheme;
