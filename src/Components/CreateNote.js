import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useMediaQuery } from '@chakra-ui/react'
export const CreateNotes = (prop) => {
  const [display, setDisplay] = useState("none");
const [isLessThenValue] = useMediaQuery("(min-width:750px)")
  const [notes, setNotes] = useState({
    title: "",
    description: "",
    date: "",
    color:""
  });
  const handleAddNotes = (e) => {
    const { name, value } = e.target;
    // console.log();
    setNotes({
      ...notes,
      [name]: value,
    });
  };
  const addNotes = (e) => {
    e.preventDefault();
    prop.addNote(notes);
    setNotes({
      title: "",
      description: "",
      date: "",
      color:""
    });
    setDisplay("none");
  };
  // console.log("data",notes)
  return (
    <Box w={isLessThenValue ? "30%" : "80%"}  margin={"auto"} marginBottom="0">
      <form>
        <Input
          type={"text"}
          name="title"
          placeholder="Take a note..."
          value={notes.title}
          onChange={handleAddNotes}
          onClick={() => {
            setDisplay("block");
          }}
        />
        <Box display={display}>
          <Textarea
            type="text"
            name="description"
            value={notes.description}
            onChange={handleAddNotes}
            placeholder="write a Notes"
          ></Textarea>
          <Input
            type={"date"}
            value={notes.date}
            name="date"
            onChange={handleAddNotes}
          />
             <Input type="color" w={"19%"} h="35px" name={"color"}
            ml="63%"
            value={notes.color}
            //  placeholder="Pic a color"
             onChange={handleAddNotes}
    />
          <Button
            marginLeft={"90%"}
            marginTop="-60px"
            borderRadius="20%"
            type="submit"
            onClick={addNotes}
          >
            <AddIcon />
          </Button>
       
        </Box>
      </form>
    </Box>
  );
};
