import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
export const CreateNotes = (prop) => {
  const [display,setDisplay] =useState("none");
  const [notes, setNotes] = useState({
    title: "",
    description: "",
    date: "",
  });
  const handleAddNotes = (e) => {
    const { name, value } = e.target;
    // console.log();
    setNotes({
      ...notes,
      [name]: value,
    });
    // console.log("notes", notes);
  };
  const addNotes = (e) => {
    e.preventDefault();
    console.log(notes);
    prop.addNote(notes);
    setNotes({
      title: "",
      description: "",
      date: "",
    });
    setDisplay("none");
  };
  return (
    <Box w="25%" margin={"auto"} marginBottom="0">
      <form>
        <Input
          type={"text"}
          name="title"
          placeholder="Text..."
          value={notes.title}
          onChange={handleAddNotes}
          onClick={()=>{
            setDisplay("block")
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
        <Button
          marginLeft={"90%"}
          marginTop="0"
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
