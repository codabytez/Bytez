// Sidebar.tsx
import { Link } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { ChakraBox } from "../customchakra";

const Sidebar: FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Retrieve the previous eclipse animation from local storage
  let prevEclipseAnimation: EclipseAnimationProps | null = null;
  const eclipseAnimationStr = localStorage.getItem("eclipseAnimation");
  if (eclipseAnimationStr) {
    try {
      const parsed = JSON.parse(eclipseAnimationStr) as EclipseAnimationProps;
      // Add some validation here to ensure parsed is actually a EclipseAnimationProps
      prevEclipseAnimation = parsed;
    } catch (error) {
      console.error(
        "Failed to parse eclipseAnimation from localStorage",
        error
      );
    }
  }

  let eclipseAnimation: EclipseAnimationProps | undefined;

  if (path === "/")
    eclipseAnimation = {
      path: "/",
      transform: "translateX(720%)",
    };
  if (path === "/about")
    eclipseAnimation = {
      path: "/about",
      transform: "translateX(-620%)",
    };
  if (path === "/projects")
    eclipseAnimation = {
      path: "/projects",
      transform: "translateX(-620%)",
    };
  if (path === "/contact")
    eclipseAnimation = {
      path: "/contact",
      transform: "translateX(-620%)",
    };

  // Save the eclipse animation to local storage
  useEffect(() => {
    localStorage.setItem("eclipseAnimation", JSON.stringify(eclipseAnimation));
  }, [eclipseAnimation]);

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/about",
      name: "About",
    },
  ];

  return (
    <ChakraBox
      display={{ base: "none", "5xl": "flex" }}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"60px"}
      position={"absolute"}
      // zIndex={"99999"}
      top={"33%"}
      right={{
        "5xl": path !== "/" ? "23%" : "75%",
        "6xl": path !== "/" ? "27%" : "70%",
        "7xl": path !== "/" ? "30%" : "65%",
        "8xl": path !== "/" ? "35%" : "60%",
        "10xl": path !== "/" ? "40%" : "55%",
        "11xl": path !== "/" ? "45%" : "55%",
        "12xl": path !== "/" ? "50%" : "50%",
      }}
      initial={{
        transform: prevEclipseAnimation?.transform,
      }}
      animate={{
        transform: eclipseAnimation?.transform,
      }}
      //@ts-expect-error - framer-motion types are not up to date
      transition={{ duration: 3 }}
      zIndex={999}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          fontSize={24}
          fontWeight={500}
          as={ReactRouterLink}
          to={link.path}
          textDecoration={"none"}
          color={path === link.path ? "orange" : ""}
          borderBottom={
            path === link.path ? "solid 2px #FF7E21" : "solid 2px transparent"
          }
          transition={"all 0.5s ease-in-out"}
          _hover={{
            textDecoration: "none",
            borderBottom: "solid 2px #FF7E21",
          }}
        >
          {link.name}
        </Link>
      ))}
    </ChakraBox>
  );
};

export default Sidebar;
