import { Card, CardContent, type CardProps, Typography } from "@jamsr-ui/react";

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
            <Typography as="p">Radius: {radius}</Typography>
            <Typography as="p">
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
