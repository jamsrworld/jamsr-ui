import { Alert } from "jamsrui/alert";

export const AlertVariantFlat = () => {
  return (
    <div className="grid gap-4">
      <Alert
        variant="soft"
        status="success"
      >
        <Alert.Icon />
        <Alert.Content>This is a success Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="soft"
        status="warning"
      >
        <Alert.Icon />
        <Alert.Content>This is an warning Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="soft"
        status="info"
      >
        <Alert.Icon />
        <Alert.Content>This is an info Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="soft"
        status="error"
      >
        <Alert.Icon />
        <Alert.Content>This is an error Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="soft"
        status="neutral"
      >
        <Alert.Icon />
        <Alert.Content>This is a neutral Alert.</Alert.Content>
      </Alert>
    </div>
  );
};
