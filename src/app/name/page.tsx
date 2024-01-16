"use client";
import { useState } from "react";
import { Box, TextField } from "@mui/material";

export default function NameForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <Box className="flex flex-col space-y-4 items-center w-full mt-2">
      <TextField
        type="text"
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        type="number"
        placeholder="Enter your age"
        onChange={(event) => setAge(parseInt(event.target.value))}
      />
      <span>
        Your name is {name} and your age is {age}.{" "}
      </span>
    </Box>
  );
}
