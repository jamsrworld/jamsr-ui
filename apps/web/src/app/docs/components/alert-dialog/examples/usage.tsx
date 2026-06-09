"use client";

import { AlertDialog } from "jamsrui/alert-dialog";
import { Button } from "jamsrui/button";

export const AlertDialogUsage = (props: AlertDialog.Props) => {
  return (
    <AlertDialog {...props}>
      <AlertDialog.Trigger render={<Button>Click to delete!</Button>} />
      <AlertDialog.Content>
        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description>
          You won&apos;t be able to revert this!
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Confirm</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
