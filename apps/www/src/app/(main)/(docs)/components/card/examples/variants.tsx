import { Card, CardContent, CardHeader, Typography } from "@jamsr-ui/react";

export const CardVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader heading="Card Heading" />
        <CardContent>
          <Typography as="p">
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Typography>
        </CardContent>
      </Card>
      <Card isBordered>
        <CardHeader heading="Card Heading" />
        <CardContent>
          <Typography as="p">
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Typography>
        </CardContent>
      </Card>
      <Card isElevated>
        <CardHeader heading="Card Heading" />
        <CardContent>
          <Typography as="p">
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
