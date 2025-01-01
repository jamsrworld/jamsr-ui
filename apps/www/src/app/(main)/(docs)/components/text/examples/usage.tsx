import { Text } from "@jamsr-ui/react";

export const TextUsage = () => {
  return (
    <div>
      <Text as="p">Hola, I'm a text</Text>
      <Text as="h1" variant="h1">
        I'm a h1 <br />
        <Text as="span">I'm a span inside</Text>
      </Text>
    </div>
  );
};
