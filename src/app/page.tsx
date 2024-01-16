"use client";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function FeedbackForm() {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleSubmit() {
    alert(`Name is ${name} and email is ${email}`);
    setOpen(false);
  }

  return (
    <div className="flex flex-col items-center">
      <Button onClick={() => setOpen(true)} variant="outlined">
        Open Form
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Feedback Form</DialogTitle>
        <DialogContent>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <TextField
              label="Name"
              onChange={(event) => setName(event?.target.value)}
            />
            <TextField
              label="Email"
              onChange={(event) => setEmail(event?.target.value)}
            />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
