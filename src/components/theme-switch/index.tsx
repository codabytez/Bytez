import { VStack, useColorMode } from "@chakra-ui/react";
import { FC, useState } from "react";
import DarkMode from "./dark";
import LightMode from "./light";

const ThemeSwitch: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const [isDarkMode, setIsDarkMode] = useState(
  //   colorMode === "dark" ? false : true
  // );
  const [isDarkModeSwitch, setIsDarkModeSwitch] = useState(true);

  const toggleTheme = () => {
    setIsDarkModeSwitch(!isDarkModeSwitch);
    toggleColorMode();
  };

  return (
    <VStack
      spacing={10}
      align="center"
      position={{ "5xl": "absolute" }}
      top={"30px"}
      zIndex={1000}
      right={"20px"}
    >
      {colorMode === "light" && (
        <LightMode
          isDarkModeSwitch={isDarkModeSwitch}
          toggleTheme={toggleTheme}
        />
      )}

      {colorMode === "dark" && (
        <DarkMode
          isDarkModeSwitch={isDarkModeSwitch}
          toggleTheme={toggleTheme}
        />
      )}
    </VStack>
  );
};

export default ThemeSwitch;
