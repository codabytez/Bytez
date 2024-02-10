import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

export const ChakraSvg = chakra(motion.svg, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || isValidMotionProp(prop);
  },
});

export const ChakraHeading = chakra(motion.h3, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || isValidMotionProp(prop);
  },
});

export const ChakraText = chakra(motion.p, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || isValidMotionProp(prop);
  },
});

export const ChakraSpan = chakra(motion.span, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || isValidMotionProp(prop);
  },
});

export const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || isValidMotionProp(prop);
  },
});
