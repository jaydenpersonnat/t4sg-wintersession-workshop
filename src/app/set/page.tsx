"use client";
import { useState } from "react";
import { Box, TextField } from "@mui/material";

export default function Names() {
  const [X, setX] = useState(["Alice", "Bob", "Charlie"]);

  return (
    <Box className="flex flex-col space-y-4 items-center w-full mt-2">
      <TextField
        type="text"
        placeholder="Enter your name"
        onChange={(event) => (X[0] = event.target.value)}
      />

      <Box className="flex flex-row space-x-4">
        {X.map((x, index) => {
          return <span key={index}>{x}</span>;
        })}
      </Box>
    </Box>
  );
}
