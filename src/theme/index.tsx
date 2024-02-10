// theme/index.js
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/roboto";

// Global style overrides
// import styles from "./styles";

// Foundational style overrides
import typography from "./foundations/typography";
import shadows from "./foundations/shadows";
import colors from "./foundations/colors";

// Component style overrides
import Button from "./components/button";
import Inputs from "./components/input";
import breakpoints from "./foundations/breakpoints";

interface customTheme {
  breakpoints: Record<string, string>;
  colors: Record<string, string>;
  shadows: Record<string, string>;
  typography: Record<string, string>;
  styles: Record<string, string>;
  config: ThemeConfig;
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  fonts: {
    body: `'poppins', sans-serif`,
    heading: `'poppins', sans-serif`,
    mono: `'poppins', sans-serif`,
  },
  // styles,
  colors,
  typography,
  breakpoints,
  shadows,

  components: {
    Button,
    Inputs,
    // Other components go here
  },
}) as customTheme;

export default customTheme;
