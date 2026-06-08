"use client";

import { AlertDialog } from "jamsrui/alert-dialog";
import { Button } from "jamsrui/button";
import { useState } from "react";

export const AlertDialogControlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click to delete!</Button>
      <AlertDialog
        open={open}
        onOpenChange={setOpen}
      >
        <AlertDialog.Content>
          <AlertDialog.Title>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description>
            You won't be able to revert this!
          </AlertDialog.Description>
          <AlertDialog.Footer>
            <AlertDialog.Cancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialog.Cancel>
            <AlertDialog.Action onClick={() => setOpen(false)}>
              Confirm
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </div>
  );
};
