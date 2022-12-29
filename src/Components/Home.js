import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Cards } from "./Cards";
import { CreateNotes } from "./CreateNote";
import "./style.css";
import { Pagination } from "./Pagination";
import { DragHandleIcon } from "@chakra-ui/icons";
export const Home = () => {
  const [noteCard, setNoteCard] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const addNote = (notes) => {
    setNoteCard((prev) => [...prev, notes]);
  };
  const onDeleteNote = (id) => {
    console.log("id", id);
    setNoteCard((e) => e.filter((cu, ind) => ind !== id));
  };
  // data store in localstorage...
  const LOCAL_STORAGE_KEY = "Notes-list";

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (items) {
      setNoteCard(items);
    }
  }, []);

  useEffect(() => {
    if (noteCard.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(noteCard));
    }
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

  // pagination .....
  const paginationFunc = (start, end) => {
    setPagination({ start, end });
  };
  let totalLength = noteCard.length;

  return (
    <div>
      <CreateNotes addNote={addNote} />
      <Box className="box">
        {noteCard.slice(pagination.start, pagination.end).map((e, index) => (
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
      <Pagination
        showPerPage={showPerPage}
        paginationFunc={paginationFunc}
        totalLength={totalLength}
      />
    </div>
  );
};
