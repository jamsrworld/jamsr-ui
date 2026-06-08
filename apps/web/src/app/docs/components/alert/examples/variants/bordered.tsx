import { Alert } from "jamsrui/alert";

export const AlertVariantBordered = () => {
  return (
    <div className="grid gap-4">
      <Alert
        variant="bordered"
        status="success"
      >
        <Alert.Icon />
        <Alert.Content>This is a success Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="bordered"
        status="warning"
      >
        <Alert.Icon />
        <Alert.Content>This is an warning Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="bordered"
        status="info"
      >
        <Alert.Icon />
        <Alert.Content>This is an info Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="bordered"
        status="error"
      >
        <Alert.Icon />
        <Alert.Content>This is an error Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="bordered"
        status="neutral"
      >
        <Alert.Icon />
        <Alert.Content>This is a neutral Alert.</Alert.Content>
      </Alert>
    </div>
  );
};
