import { FC, useEffect } from "react";
import Strap from "./Strap";
import { useLocation } from "react-router-dom";
import { ChakraBox } from "../../customchakra";

const BlackStrap: FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Retrieve the previous BlackStrapAnimation from local storage
  let prevBlackStrapAnimation: StrapAnimationProps | null = null;
  const BlackStrapAnimationStr = localStorage.getItem("BlackStrapAnimation");
  if (BlackStrapAnimationStr) {
    try {
      const parsed = JSON.parse(BlackStrapAnimationStr) as StrapAnimationProps;
      // Add some validation here to ensure parsed is actually a StrapAnimationProps
      prevBlackStrapAnimation = parsed;
    } catch (error) {
      console.error(
        "Failed to parse BlackStrapAnimation from localStorage",
        error
      );
    }
  }

  let BlackStrapAnimation: StrapAnimationProps | undefined;

  if (path === "/")
    BlackStrapAnimation = {
      path: "/",
      top: "300px",
      left: "1000px",
      transform: "rotate(-23.412deg)",
    };
  if (path === "/about")
    BlackStrapAnimation = {
      path: "/about",
      top: "250px",
      left: "-550px",
      transform: "rotate(400.389deg)",
    };
  if (path === "/projects")
    BlackStrapAnimation = {
      path: "/projects",
      top: "-550px",
      left: "-200px",
      transform: "rotate(-430.76deg)",
    };
  if (path === "/contact")
    BlackStrapAnimation = {
      path: "/contact",
      top: "-300px",
      left: "-200px",
      transform: "rotate(-420.114deg)",
    };

  useEffect(() => {
    // Save the current BlackStrapAnimation to local storage
    localStorage.setItem(
      "BlackStrapAnimation",
      JSON.stringify(BlackStrapAnimation)
    );
  }, [BlackStrapAnimation]);

  return (
    <ChakraBox
      initial={{
        transform: prevBlackStrapAnimation?.transform,
        left: prevBlackStrapAnimation?.left,
        top: prevBlackStrapAnimation?.top,
      }}
      animate={{
        transform: BlackStrapAnimation?.transform,
        left: BlackStrapAnimation?.left,
        top: BlackStrapAnimation?.top,
      }}
      //@ts-expect-error - framer-motion types are not up to date
      transition={{ duration: 5, type: "linear" }}
      h={"full"}
      position={"relative"}
    >
      <Strap theme="dark" />
    </ChakraBox>
  );
};

export default BlackStrap;
