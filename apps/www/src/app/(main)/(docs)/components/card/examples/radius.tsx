import { Card, CardContent, type CardProps, Text } from "@jamsr-ui/react";

export const CardRadius = () => {
  const radii: CardProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ];
  return (
    <div className="grid gap-4">
      {radii.map((radius) => (
        <Card key={radius} radius={radius}>
          <CardContent>
            <Text as="p">Radius: {radius}</Text>
            <Text as="p">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Text>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
