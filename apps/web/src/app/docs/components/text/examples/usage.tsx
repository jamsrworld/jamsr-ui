import { Text } from "jamsrui/text";

export const TextUsage = () => {
  return (
    <div>
      <Text>Hola, I'm a text</Text>
      <Text render={<label />}>Hola, I'm a text</Text>
      <Text render={<p />}>Hola, I'm a text</Text>
      <Text
        render={<h1 />}
        variant="h1"
      >
        I'm a h1 <br />
        <Text render={<span />}>I'm a span inside</Text>
      </Text>
    </div>
  );
};
