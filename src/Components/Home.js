import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Cards } from "./Cards";
import { CreateNotes } from "./CreateNote";
import "./style.css";
import { Pagination } from "./Pagination";
export const Home = () => {
  const [noteCard, setNoteCard] = useState([{ "title": "Meeting Prep", "color": "#3399FF", "description": "Review Agenda, Prepare Slides, Collect Reports, Charge Laptop, Bring Notepad, Confirm Conference Room Booking, Water Bottle.", "date": "2023-09-12" }, 
    { "title": "Weekend Getaway - Beach Trip", "color": "#05F6E4","description": "Pack Sunscreen, Swimsuit, Towels, Snacks, Beach Chairs, Umbrella, Sunglasses, Camera, Bluetooth Speaker. Departure at 9 AM.", "date": "2023-09-28" },
    { "title": " Weekly Team Meeting", "color": "#05F659",  "description": "Discussed project updates, assigned action items, reviewed deadlines, and planned next week's tasks. Attendees: John, Sarah, Alice, Bob", "date": "2023-08-30",  }]);
  console.log(noteCard)
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
    setNoteCard((e) => e.filter((cu, ind) => (
      ind !== id
    )));
  };

  // update functions .........
  const onEdite = () => {

  }

  console.log(noteCard)
  // data store in localstorage...
  const LOCAL_STORAGE_KEY = "Notes-list";

  localStorage.setItem("Notes-list", JSON.stringify(noteCard))

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (items) {
      setNoteCard(items);
    }
  }, []);

  useEffect(() => {
    if (noteCard.length >= 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(noteCard));
    }
  }, [noteCard]);


  // pagination .....
  const paginationFunc = (start, end) => {
    setPagination({ start, end });
  };
  let totalLength = noteCard.length;

  return (
    <div>
      <div style={{ height: "5vh" }}></div>
      <CreateNotes addNote={addNote} />
      <Box className="box">
        {noteCard.slice(pagination.start, pagination.end).map((e, index) => (
          <Box key={index}>
            {" "}
            <Cards
              data={e}
              id={index}
              onDeleteNote={onDeleteNote}
              onEdite={onEdite}
            // color={getColor()}
            // color={ThemeColor}
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
