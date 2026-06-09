"use client";

import { AlertDialog } from "jamsrui/alert-dialog";
import { Button } from "jamsrui/button";
import { Separator } from "jamsrui/separator";

export const AlertDialogCustomized = (props: AlertDialog.Props) => {
  return (
    <AlertDialog {...props}>
      <AlertDialog.Trigger render={<Button>Click to delete!</Button>} />
      <AlertDialog.Content className="max-w-xs items-center p-0 text-center">
        <div className="p-4 gap-4 flex flex-col">
          <AlertDialog.Title>Warning!</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this? You won&apos;t be able to
            revert this!
          </AlertDialog.Description>
        </div>
        <Separator />
        <AlertDialog.Footer className="p-0 gap-0 items-stretch">
          <AlertDialog.Cancel
            radius="none"
            className="w-full shrink focus-visible:-outline-offset-2 rounded-bl-md"
            variant="solid"
            color="default"
          >
            Cancel
          </AlertDialog.Cancel>
          <Separator orientation="vertical" />
          <AlertDialog.Action
            radius="none"
            className="w-full font-bold shrink focus-visible:-outline-offset-2 rounded-br-md"
            variant="solid"
            color="danger"
          >
            Confirm
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
