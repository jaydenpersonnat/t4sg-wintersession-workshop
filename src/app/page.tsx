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
  const [data, setData] = useState<{ [key: string]: any }>({});
  const [visible, setVisible] = useState<boolean>(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setVisible(true);
    setOpen(false);
  }

  return (
    <div className="flex flex-col mt-4 items-center">
      <Button
        type="button"
        variant="outlined"
        onClick={() => {
          setOpen(true);
          setVisible(false);
        }}
      >
        Open Form
      </Button>{" "}
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setVisible(true);
        }}
        className=""
      >
        <DialogTitle className="">Feedback Form</DialogTitle>
        <DialogContent className="mt-4 w-[400px]">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <TextField
              label="Name"
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
            />
            <TextField
              label="Email"
              onChange={(event) =>
                setData({ ...data, email: event.target.value })
              }
            />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {visible && (
        <div className="flex flex-col mt-10 space-y-4">
          <span>Name: {data?.name}</span>
          <span>Email: {data?.email}</span>
        </div>
      )}
    </div>
  );
}
