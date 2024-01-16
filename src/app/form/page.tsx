"use client";
import { Button } from "@mui/material";
export default function Form() {
  function handleSubmit() {
    alert("The form was submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => console.log(event.target.value)}
      />
      <Button type="submit">Submit Form</Button>
    </form>
  );
}
