import { FC, useEffect } from "react";
import Strap from "./Strap";
import { useLocation } from "react-router-dom";
import { ChakraBox } from "../../customchakra";
import { useMediaQuery } from "@chakra-ui/react";

const WhiteStrap: FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isLargerThan1700] = useMediaQuery("(min-width: 1700px)");
  const [isLargerThan1600] = useMediaQuery("(min-width: 1600px)");
  const [isLargerThan1500] = useMediaQuery("(min-width: 1500px)");
  const [isLargerThan1400] = useMediaQuery("(min-width: 1400px)");

  // Retrieve the previous whiteStrapAnimation from local storage
  let prevWhiteStrapAnimation: StrapAnimationProps | null = null;
  const whiteStrapAnimationStr = localStorage.getItem("whiteStrapAnimation");
  if (whiteStrapAnimationStr) {
    try {
      const parsed = JSON.parse(whiteStrapAnimationStr) as StrapAnimationProps;
      // Add some validation here to ensure parsed is actually a StrapAnimationProps
      prevWhiteStrapAnimation = parsed;
    } catch (error) {
      console.error(
        "Failed to parse whiteStrapAnimation from localStorage",
        error
      );
    }
  }

  let whiteStrapAnimation: StrapAnimationProps | undefined;

  if (path === "/")
    whiteStrapAnimation = {
      path: "/",
      top: isLargerThan1700
        ? "200px"
        : isLargerThan1600
        ? "200px"
        : isLargerThan1500
        ? "200px"
        : isLargerThan1400
        ? "200px"
        : "200px",
      left: isLargerThan1700
        ? "950px"
        : isLargerThan1600
        ? "750px"
        : isLargerThan1500
        ? "700px"
        : isLargerThan1400
        ? "600px"
        : "450px",
      transform: "rotate(60deg)",
    };
  if (path === "/about")
    whiteStrapAnimation = {
      path: "/about",
      top: "-100px",
      left: "-680px",
      transform: "rotate(467.27deg)",
    };
  if (path === "/projects")
    whiteStrapAnimation = {
      path: "/projects",
      top: "500px",
      left: "-200px",
      transform: "rotate(-500.198deg)",
    };
  if (path === "/contact")
    whiteStrapAnimation = {
      path: "/contact",
      top: "400px",
      left: "-150px",
      transform: "rotate(-503.948deg)",
    };

  useEffect(() => {
    // Save the current whiteStrapAnimation to local storage
    localStorage.setItem(
      "whiteStrapAnimation",
      JSON.stringify(whiteStrapAnimation)
    );
  }, [whiteStrapAnimation]);

  return (
    <ChakraBox
      initial={{
        transform: prevWhiteStrapAnimation?.transform,
        left: prevWhiteStrapAnimation?.left,
        top: prevWhiteStrapAnimation?.top,
      }}
      animate={{
        transform: whiteStrapAnimation?.transform,
        left: whiteStrapAnimation?.left,
        top: whiteStrapAnimation?.top,
      }}
      //@ts-expect-error - framer-motion types are not up to date
      transition={{ duration: 5, type: "linear" }}
      h={"full"}
      position={"relative"}
      zIndex={1}
    >
      <Strap />
    </ChakraBox>
  );
};

export default WhiteStrap;
