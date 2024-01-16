"use client";
import { useState } from "react";
import { Box, TextField } from "@mui/material";

export default function Names() {
  const [data, setData] = useState({
    name: "Alice",
    age: 20,
  });

  return (
    <Box className="flex flex-col space-y-4 items-center w-full mt-2">
      <TextField
        type="text"
        placeholder="Enter your name"
        onChange={(event) => (data.name = event.target.value)}
      />

      <Box className="flex flex-row space-x-4">
        <span>Name: {data.name}</span>
        <span>Age: {data.age}</span>
      </Box>
    </Box>
  );
}
