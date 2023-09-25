import {  Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import {SunIcon } from "@chakra-ui/icons";

export const Header = (props) => {
  const [isNoteSmallScreen] = useMediaQuery("(min-width:750px)");
  const Bg = useColorModeValue('#ffc008', '#1a202c')
  const BoxShadow=useColorModeValue("20px 20px 50px 10px orange inset","20px 20px 20px 10px black  inset" )
  return (
    <Flex
      direction="row"
      h="80px"
      p="10px 50px"
      bg={Bg}
      justifyContent={"space-between"}
  alignItems={"center"}
      boxShadow={BoxShadow}
    >
      <Image
        w={isNoteSmallScreen ? "11%" : "11%"}
        h="100%"
        src={"https://yanado.com/blog/wp-content/uploads/2015/01/google-keep-logo.png"}
        alt="logo_image"
      />
      <Text
        fontWeight={"700"}
        fontSize={isNoteSmallScreen ? "35px" : "20px"}
        lineHeight={isNoteSmallScreen ? "35px" : "25px"}
        textAlign={"center"}
        
        letterSpacing="10px"
        color={"white"}
      >
        Keep Notes
      </Text>
      <SunIcon fontSize={"30px"}   onClick={props.onClick}/>
    </Flex>
  );
};
