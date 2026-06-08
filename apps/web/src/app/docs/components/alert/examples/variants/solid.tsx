import { Alert } from "jamsrui/alert";

export const AlertVariantSolid = () => {
  return (
    <div className="grid gap-4">
      <Alert
        variant="solid"
        status="success"
      >
        <Alert.Icon />
        <Alert.Content>This is a success Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="solid"
        status="warning"
      >
        <Alert.Icon />
        <Alert.Content>This is an warning Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="solid"
        status="info"
      >
        <Alert.Icon />
        <Alert.Content>This is an info Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="solid"
        status="error"
      >
        <Alert.Icon />
        <Alert.Content>This is an error Alert.</Alert.Content>
      </Alert>
      <Alert
        variant="solid"
        status="neutral"
      >
        <Alert.Icon />
        <Alert.Content>This is a neutral Alert.</Alert.Content>
      </Alert>
    </div>
  );
};
