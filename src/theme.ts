import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: theme.colors.purple
  }
};

export const PRIMARY_COLOR = "purple";

export const getPrimaryColor = (colorMode: "dark" | "light") =>
  colorMode === "dark"
    ? customTheme.colors.primary[300]
    : customTheme.colors.primary[500];

export default customTheme;
