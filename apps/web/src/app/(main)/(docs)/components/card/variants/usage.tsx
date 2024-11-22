import { Card, CardContent, Typography } from "@jamsr-ui/react";

export const CardUsage = () => {
  return (
    <Card>
      <CardContent>
        <Typography as="p">This is a card. Pretty cool right?</Typography>
        <Typography as="p">
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Typography>
      </CardContent>
    </Card>
  );
};
