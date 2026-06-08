import { AlertDialog } from "jamsrui/alert-dialog";
import { Button } from "jamsrui/button";

export const AlertDialogBackdrop = () => {
  const backdrops: AlertDialog.Props["backdrop"][] = [
    "blur",
    "opaque",
    "transparent",
  ];
  return (
    <div className="flex gap-2">
      {backdrops.map((backdrop) => (
        <AlertDialog
          key={backdrop}
          backdrop={backdrop}
        >
          <AlertDialog.Trigger render={<Button>Backdrop {backdrop}</Button>} />
          <AlertDialog.Content>
            <AlertDialog.Title>Are you sure?</AlertDialog.Title>
            <AlertDialog.Description>
              You won't be able to revert this!
            </AlertDialog.Description>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
              <AlertDialog.Action>Confirm</AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      ))}
    </div>
  );
};
