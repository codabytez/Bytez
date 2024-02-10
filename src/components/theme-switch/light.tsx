import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import { ChakraBox } from "../../customchakra";
import { LightModeMoon } from "./moon";
import { TransparentCloud, WhiteCloud } from "./cloud";

const LightMode: FC<ThemeProps> = ({ isDarkModeSwitch, toggleTheme }) => {
  return (
    <VStack spacing={10} align="center">
      <ChakraBox
        display={"flex"}
        w={"80px"}
        h={"35px"}
        p={"4px"}
        gap={3}
        flexShrink={"0"}
        borderRadius={30}
        bg={"#A2D1FD"}
        position={"relative"}
        overflow={"hidden"}
      >
        <ChakraBox
          position={"absolute"}
          top={"0px"}
          left={"0px"}
          zIndex={1}
          cursor={"pointer"}
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.2s ease-in-out",
          }}
          animate={{ left: isDarkModeSwitch ? "0px" : "40px" }}
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
          <LightModeMoon />
        </ChakraBox>
        {Array.from({ length: 20 }, (_, i) => (
          <ChakraBox
            key={i}
            position={"absolute"}
            left={i * 20 + "px"}
            bottom={-30 + i + "px"}
            initial={{ x: 20 }}
            animate={{ x: -300, opacity: [1, 1, 1, 0.5] }}
            //   @ts-expect-error - framer-motion types are not up to date
            transition={{
              duration: 40 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <WhiteCloud />
          </ChakraBox>
        ))}

        {Array.from({ length: 20 }, (_, i) => (
          <ChakraBox
            key={i}
            position={"absolute"}
            left={i * 20 + "px"}
            bottom={-20 + i + "px"}
            initial={{ x: 200 }}
            animate={{ x: -300, opacity: [1, 1, 1, 0.5] }}
            //   @ts-expect-error - framer-motion types are not up to date
            transition={{
              duration: 40 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            <TransparentCloud />
          </ChakraBox>
        ))}
      </ChakraBox>
    </VStack>
  );
};

export default LightMode;
