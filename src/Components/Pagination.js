import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

export const Pagination = ({ showPerPage, paginationFunc, totalLength }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPage * counter;
    console.log("showPerPage", value - showPerPage, value);
    paginationFunc(value - showPerPage, value);
  }, [counter]);

  let lastPage = Math.ceil(totalLength / showPerPage);
  return (
    <Box  display='flex' justifyContent="space-between">
      <Button
        disabled={counter === 1 ? true : false}
        onClick={() => setCounter(counter - 1)}
      >
        Prev
      </Button>
      <Button
        disabled={counter === lastPage ? true : false}
        onClick={() => setCounter(counter + 1)}
      >
        Next
      </Button>
    </Box>
  );
};
