"use client";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="text-center">
      <h1>{number}</h1>
      <Button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increase the number
      </Button>
    </div>
  );
}
