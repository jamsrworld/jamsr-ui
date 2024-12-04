import { Card, CardContent, type CardProps, Typography } from "@jamsr-ui/react";

export const CardVariants = () => {
  const variants: CardProps["variant"][] = ["solid", "outlined", "elevated"];
  return (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <Card key={variant} variant={variant}>
          <CardContent>
            <Typography as="p">Variant: {variant}</Typography>
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
