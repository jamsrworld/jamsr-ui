import { Alert } from "@jamsr-ui/react";

export const AlertVariants = () => {
  return (
    <div className="grid gap-4">
      {/* solid variants */}
      <Alert status="warning" variant="solid">
        This is a solid warning Alert.
      </Alert>
      <Alert status="info" variant="solid">
        This is a solid info Alert.
      </Alert>
      <Alert status="success" variant="solid">
        This is a solid success Alert.
      </Alert>
      <Alert status="danger" variant="solid">
        This is a solid danger Alert.
      </Alert>
      <Alert status="default" variant="solid">
        This is a solid default Alert.
      </Alert>

      {/* outlined variants */}
      <Alert status="warning">This is an outlined warning Alert.</Alert>
      <Alert status="info" variant="outlined">
        This is an outlined info Alert.
      </Alert>
      <Alert status="success" variant="outlined">
        This is an outlined success Alert.
      </Alert>
      <Alert status="danger" variant="outlined">
        This is an outlined danger Alert.
      </Alert>
      <Alert status="default" variant="outlined">
        This is an outlined default Alert.
      </Alert>
    </div>
  );
};
