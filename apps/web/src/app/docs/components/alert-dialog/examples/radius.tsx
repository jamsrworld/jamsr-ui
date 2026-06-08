import { AlertDialog } from "jamsrui/alert-dialog";
import { Button } from "jamsrui/button";

export const AlertDialogRadius = () => {
  const radii: AlertDialog.Props["radius"][] = ["none", "sm", "md", "lg"];
  return (
    <div className="flex gap-2 flex-wrap">
      {radii.map((radius) => (
        <AlertDialog
          key={radius}
          radius={radius}
        >
          <AlertDialog.Trigger render={<Button>Radius {radius}</Button>} />
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
