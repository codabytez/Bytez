import { Stack } from "@chakra-ui/react";
import { FC } from "react";

import WhiteStrap from "./WhiteStrap";
import BlackStrap from "./BlackStrap";

const Straps: FC = () => {
  return (
    <Stack
      spacing={4}
      align={"center"}
      justify={"center"}
      direction={"column"}
      h={"full"}
      position={"absolute"}
      display={{ base: "none", "9xl": "flex" }}
    >
      <WhiteStrap />
      <BlackStrap />
    </Stack>
  );
};

export default Straps;
