import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Cards } from "./Cards";
import { CreateNotes } from "./CreateNote";
import "./style.css";
export const Home = () => {
  const [noteCard, setNoteCard] = useState([]);
  const addNote = (notes) => {
    // console.log("data",notes)
    setNoteCard((prev) => [...prev, notes]);
  };
  const onDeleteNote = (id) => {
    console.log("id", id);
    setNoteCard((e) => e.filter((cu, ind) => ind !== id));
  };
  console.log("dayta", noteCard);
  // data store in localstorage...
  const LOCAL_STORAGE_KEY = "Notes-list";

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (items) {
      setNoteCard(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(noteCard));
  }, [noteCard]);

  const getColor = () => {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  };
  return (
    <div>
      <CreateNotes addNote={addNote} />
      <Box className="box">
        {noteCard.map((e, index) => (
          <Box key={index}>
            {" "}
            <Cards
              data={e}
              id={index}
              onDeleteNote={onDeleteNote}
              color={getColor()}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};
