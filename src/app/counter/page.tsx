"use client";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Counter() {
  // destructuring
  // useState(0) -> [number : 0, setNumber]
  // 1. state variable 
  // 2. set function - function that takes in an input and then changes state to be that input 
  // int -> void 
  // setNumber(5); 

  // "5" 
  // 5 
  // "20" -> 20 
  // parseInt("20") -> 20 

  const [number, setNumber] = useState<number>(0);
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
