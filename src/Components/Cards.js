import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, DragHandleIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
export const Cards = (prop) => {
  const [show, setShow] = useState(false);
  // console.log("prop", prop.id);
  const deleteNote = (id) => {
    // console.log("id",prop.id);
    prop.onDeleteNote(prop.id);
  };
  const showIcons = () => {
    setShow(!show);
  };
  // console.log("show", show);
  return (
    <Box
      margin={"auto"}
      borderRadius="md"
      bg={prop.color}
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
        <Box
          position={"reletive"}
          w="50px"
          // background={"white"}
          marginLeft="100%"
          // marginLeft={"92%"}
          marginTop="10px"
        >
          <Button w="25px" borderRadius="50%">
            <EditIcon />
          </Button>
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
