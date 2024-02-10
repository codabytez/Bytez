import { HStack, Link, Icon } from "@chakra-ui/react";
import { FC } from "react";
import {
  FaGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { SiBento } from "react-icons/si";

const Socials: FC = () => {
  return (
    <HStack
      w={"full"}
      justifyContent={"space-between"}
      alignItems={{ base: "flex-start", "5xl": "center" }}
      // border={"1px solid red"}
      spacing={6}
      px={{ "5xl": "40px" }}
      position={{ "5xl": "absolute" }}
      top={"30px"}
      zIndex={"2"}
    >
      <HStack spacing={6}>
        <Link href={"https://github.com/codabytez"} isExternal>
          <Icon
            w={8}
            h={8}
            color={"orange"}
            _hover={{ color: "gray.200" }}
            cursor={"pointer"}
            transition={"color 0.3s"}
            as={FaGithub}
          />
        </Link>
        <Link href={"https://x.com/codabytez"} isExternal>
          <Icon
            w={8}
            h={8}
            color={"orange"}
            _hover={{ color: "gray.200" }}
            cursor={"pointer"}
            transition={"color 0.3s"}
            as={FaSquareXTwitter}
          />
        </Link>

        <Link href={"https://linkedin.com/in/codabytez"} isExternal>
          <Icon
            w={8}
            h={8}
            color={"orange"}
            _hover={{ color: "gray.200" }}
            cursor={"pointer"}
            transition={"color 0.3s"}
            as={FaLinkedin}
          />
        </Link>
        <Link href={"https://instagram.com/codabytez"} isExternal>
          <Icon
            w={8}
            h={8}
            color={"orange"}
            _hover={{ color: "gray.200" }}
            cursor={"pointer"}
            transition={"color 0.3s"}
            as={FaInstagram}
          />
        </Link>

        <Link href={"https://bento.me/codabytez"} isExternal>
          <Icon
            w={8}
            h={8}
            color={"orange"}
            _hover={{ color: "gray.200" }}
            cursor={"pointer"}
            transition={"color 0.3s"}
            as={SiBento}
          />
        </Link>
      </HStack>
    </HStack>
  );
};

export default Socials;
