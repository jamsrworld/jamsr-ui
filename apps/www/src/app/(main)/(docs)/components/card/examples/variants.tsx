import { Card, CardContent, CardHeader, Text } from "@jamsr-ui/react";

export const CardVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader heading="Card Heading" />
        <CardContent>
          <Text as="p">
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Text>
        </CardContent>
      </Card>
      <Card isBordered>
        <CardHeader heading="Card Heading" />
        <CardContent>
          <Text as="p">
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Text>
        </CardContent>
      </Card>
      <Card isElevated>
        <CardHeader heading="Card Heading" />
        <CardContent>
          <Text as="p">
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Text>
        </CardContent>
      </Card>
    </div>
  );
};
