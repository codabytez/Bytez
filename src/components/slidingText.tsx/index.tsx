import { FC } from "react";
import { chakra, shouldForwardProp, useColorMode } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const SlidingText: FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const { colorMode } = useColorMode();

  const ChakraText = chakra(motion.h3, {
    shouldForwardProp: (prop) => {
      return shouldForwardProp(prop) || isValidMotionProp(prop);
    },
  });

  return (
    <ChakraText
      fontSize={{ base: "204px", xl: "270px", "5xl": "454px" }}
      whiteSpace={"nowrap"}
      textTransform={"lowercase"}
      style={{
        WebkitTextStrokeWidth: "2px",
        WebkitTextStrokeColor: colorMode === "light" ? "#E0E0E0" : "#363636",
      }}
      // opacity={colorMode === "light" && 0.3}
      color={"transparent"}
      position={"absolute"}
      top={{ "5xl": "10%" }}
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      //   @ts-expect-error - framer-motion types are not up to date
      transition={{
        duration: 30,
        delay: 5,
        repeat: Infinity,
        // repeatType: "mirror",
        ease: "linear",
      }}
    >
      {path === "/about"
        ? "codabytez"
        : path === "/projects"
        ? "Projects"
        : path === "/contact"
        ? "Contact"
        : "Web Dev"}
    </ChakraText>
  );
};

export default SlidingText;
