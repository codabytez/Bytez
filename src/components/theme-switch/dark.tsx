import { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { ChakraBox } from "../../customchakra";
import DarkModeStars from "./DarkModeStars";
import { DarkModeMoon } from "./moon";

const DarkMode: FC<ThemeProps> = ({ isDarkModeSwitch, toggleTheme }) => {
  return (
    <VStack spacing={10} align="center">
      <ChakraBox
        display={"flex"}
        //   border={"2px solid red"}
        w={"80px"}
        h={"35px"}
        p={"4px"}
        gap={3}
        flexShrink={"0"}
        borderRadius={30}
        bg={"#1F2533"}
        position={"relative"}
        overflow={"hidden"}
      >
        <DarkModeStars />

        <ChakraBox
          position={"absolute"}
          top={"5px"}
          right={"10px"}
          zIndex={1}
          cursor={"pointer"}
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
          }}
          animate={{ right: isDarkModeSwitch ? "45px" : "10px" }}
          //   @ts-expect-error - framer-motion types are not up to date
          transition={{
            duration: 0.1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            damping: 5,
          }}
          onClick={toggleTheme}
        >
          <DarkModeMoon />
        </ChakraBox>
      </ChakraBox>
    </VStack>
  );
};

export default DarkMode;
