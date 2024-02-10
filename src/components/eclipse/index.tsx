import { Box, HStack, useMediaQuery } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import SmallCircle from "./SmallCircle";
import { useLocation } from "react-router-dom";
import { ChakraBox } from "../../customchakra";

const Eclipse: FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  //   Retrive the previous animation from local storage
  let prevTransform: EclipseAnimationProps | null = null;
  const animationStr = localStorage.getItem("transform");
  if (animationStr) {
    try {
      const parsed = JSON.parse(animationStr) as EclipseAnimationProps;
      // Add some validation here to ensure parsed is actually a EclipseAnimationProps
      prevTransform = parsed;
    } catch (error) {
      console.error("Failed to parse animation from localStorage", error);
    }
  }

  //   Define the animation
  let transform: EclipseAnimationProps | undefined;

  if (path === "/")
    transform = {
      path: "/",
      transform: "translate(-50%, -50%)",
    };
  if (path === "/about")
    transform = {
      path: "/about",
      transform: !isLargerThan1000
        ? "translate(-50%, -50%)"
        : "translate(-160%, -50%)",
    };
  if (path === "/projects")
    transform = {
      path: "/projects",
      transform: !isLargerThan1000
        ? "translate(-50%, -50%)"
        : "translate(-160%, -50%)",
    };
  if (path === "/contact")
    transform = {
      path: "/contact",
      transform: !isLargerThan1000
        ? "translate(-50%, -50%)"
        : "translate(-160%, -50%)",
    };

  //   Save the animation to local storage
  useEffect(() => {
    localStorage.setItem("transform", JSON.stringify(transform));
  }, [transform]);

  return (
    <ChakraBox
      w={{ base: "309px", xl: "689px", "7xl": "856px" }}
      h={{ base: "308px", xl: "687px", "7xl": "853px" }}
      display={"flex"}
      position={"absolute"}
      alignItems={"center"}
      justifyContent={"center"}
      top={{ base: "50%" }}
      opacity={{ base: 0.4, "5xl": 1 }}
      left={{
        base: "50%",
        "5xl": path === "/" ? "50%" : "65%",
        "6xl": path === "/" ? "50%" : "60%",
        "7xl": path === "/" ? "50%" : "70%",
        "8xl": path === "/" ? "50%" : "65%",
        "9xl": path === "/" ? "50%" : "60%",
        "11xl": path === "/" ? "50%" : "55%",
        "12xl": path === "/" ? "50%" : "50%",
      }}
      initial={{ transform: prevTransform?.transform }}
      animate={{ transform: transform?.transform }}
      //@ts-expect-error - framer-motion types are not up to date
      transition={{ duration: 2 }}
    >
      <HStack
        w={"full"}
        h={"full"}
        flexShrink={"0"}
        borderRadius={"751px"}
        position={"relative"}
        border={"1px solid"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ChakraBox
          w={{ base: "309px", xl: "689px", "7xl": "856px" }}
          h={{ base: "308px", xl: "687px", "7xl": "853px" }}
          flexShrink={"0"}
          borderRadius={"751px"}
          border={"7px solid transparent"}
          borderTopColor={"gray.200"}
          position={"absolute"}
          animate={{ rotate: 360 }}
          //   @ts-expect-error nothing is wrong with the code
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <SmallCircle
          props={{
            position: "absolute",
            top: { base: "-50px", xl: "-70px" },
            left: "41px",
          }}
        />
        <SmallCircle
          props={{
            position: "absolute",
            top: { base: "0px", xl: "20px" },
            right: "-27px",
          }}
        />
        <SmallCircle
          props={{
            position: "absolute",
            bottom: { base: "-30px", "6xl": "130px" },
            right: { base: "0px", "6xl": "-76px" },
          }}
        />
        <SmallCircle
          props={{
            position: "absolute",
            bottom: { base: "-10px", "6xl": "33px" },
            left: { base: "0px", "6xl": "-70px" },
          }}
        />
        <Box
          w={{ base: "154.96px", xl: "320px", "6xl": "428px" }}
          h={{ base: "154.96px", xl: "320px", "6xl": "428px" }}
          flexShrink={"0"}
          borderRadius={"428px"}
          bg={"eclipse"}
        />
      </HStack>
    </ChakraBox>
  );
};

export default Eclipse;
