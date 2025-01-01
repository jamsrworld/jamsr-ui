import { Card, CardContent, Text } from "@jamsr-ui/react";

export const CardUsage = () => {
  return (
    <Card>
      <CardContent>
        <Text as="p">This is a card. Pretty cool right?</Text>
        <Text as="p">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </CardContent>
    </Card>
  );
};
