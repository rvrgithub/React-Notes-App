import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, DragHandleIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { ColorTheme } from "./ColorTheme";
export const Cards = (prop) => {
  const [show, setShow] = useState(false);
  // const [addcolor, setAddColor] = useState({});

  const deleteNote = (id) => {
    prop.onDeleteNote(prop.id);
  };
  const showIcons = () => {
    setShow(!show);
  };
  // const colorTheme = (color) => {
  //   // console.log("colorbyCard", color);
  //   setAddColor(color);
  //   localStorage.setItem("colorTheme" ,JSON.stringify(color));
  // };
  // console.log("update color", addcolor);
  // const ThemeColor = JSON.parse(localStorage.getItem("colorTheme"));

  return (
    <Box
      margin={"auto"}
      borderRadius="md"
      // bg={prop.color}
      bg={prop.data.color}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      px={4}
      h="autoFit"
      textAlign={"left"}
    >
      <Text fontWeight={"bold"}>{prop.data.title}</Text>
      <Text>{prop.data.description}</Text>
      <Text>{prop.data.date}</Text>
      <DragHandleIcon
        marginLeft={"92%"}
        marginTop="-10px"
        w="25px"
        borderRadius="50%"
        onClick={showIcons}
      />
      {show ? (
        <Box position={"reletive"} w="50px" marginLeft="100%" marginTop="10px">
          {/* <ColorTheme colorTheme={colorTheme} /> */}
          {/* <Button w="25px" borderRadius="50%">
            <EditIcon />
          </Button> */}
          <Button w="25px" borderRadius="50%" onClick={deleteNote}>
            <DeleteIcon fontSize={"20px"} />
          </Button>
        </Box>
      ) : (
        <> </>
      )}
    </Box>
  );
};
