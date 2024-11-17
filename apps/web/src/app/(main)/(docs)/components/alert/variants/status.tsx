import { Alert } from "@jamsr-ui/react";

export const AlertStatus = () => {
  return (
    <div className="grid gap-4">
      <Alert status="warning">This is a warning message.</Alert>
      <Alert status="info">This is a info message.</Alert>
      <Alert status="success">This is a success message.</Alert>
      <Alert status="danger">This is a danger message.</Alert>
      <Alert status="default">This is a default message.</Alert>
    </div>
  );
};
