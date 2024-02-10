import { FC } from "react";
import { ChakraBox } from "../../customchakra";
import { Image } from "@chakra-ui/react";

const MobileView: FC<MobileViewProps> = ({ mobileImg }) => {
  const { fields } = mobileImg;

  return (
    <ChakraBox
      display={"flex"}
      w={{
        base: "76px",
        xl: "103px",
        "2xl": "130px",
        "3xl": "157px",
        "4xl": "183px",
        "5xl": "210px",
        "6xl": "103px",
        "7xl": "130px",
        "8xl": "157px",
        "9xl": "183px",
        "10xl": "210px",
        "11xl": "237px",
      }}
      h={{
        base: "138px",
        xl: "185px",
        "2xl": "231px",
        "3xl": "278px",
        "4xl": "325px",
        "5xl": "371px",
        "6xl": "185px",
        "7xl": "231px",
        "8xl": "278px",
        "9xl": "325px",
        "10xl": "371px",
        "11xl": "418px",
      }}
      p={"5px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"4.5px"}
      position={"absolute"}
      right={{
        base: "50px",
        xl: "67px",
        "2xl": "83px",
        "3xl": "100px",
        "4xl": "117px",
        "5xl": "133px",
        "6xl": "67px",
        "7xl": "83px",
        "8xl": "100px",
        "9xl": "117px",
        "10xl": "133px",
        "11xl": "150px",
      }}
      top={"80px"}
      borderRadius={{ base: "5.9px", "8xl": "23px" }}
      border={"0.5px solid #B964001A"}
      zIndex={1}
      animate={{
        background:
          "radial-gradient(100% 100% at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.02) 100%)",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty("--mouse-x", `${x + 4}%`);
        e.currentTarget.style.setProperty("--mouse-y", `${y + 5}%`);
      }}
      whileHover={{
        // @ts-expect-error - framer-motion types are not up to date
        "--mouse-x": "50%",
        "--mouse-y": "0%",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      boxShadow={"project"}
      backdropFilter={"blur(6.6666669845581055px)"}
    >
      <ChakraBox
        display={"flex"}
        flexDirection={"column"}
        gap={"5px"}
        flex={"1 0 0"}
        alignSelf={"stretch"}
      >
        <ChakraBox
          display={"flex"}
          flexDirection={"column"}
          gap={"5px"}
          flex={"1 0 0"}
          alignSelf={"stretch"}
          borderRadius={{ base: "3px", "8xl": "17px" }}
          bg={"#FFFFFF1F"}
          overflow={"hidden"}
        >
          <Image
            src={fields.file.url}
            alt={fields.title}
            h={fields.file.details.image.height}
            w={fields.file.details.image.width}
          />
        </ChakraBox>
      </ChakraBox>
    </ChakraBox>
  );
};

export default MobileView;
