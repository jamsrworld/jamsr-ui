import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@jamsr-ui/react";

export const CardStartEndContent = () => {
  return (
    <Card>
      <CardHeader
        heading="Card Header"
        startContent={
          <Avatar
            alt="avatar"
            src=""
          />
        }
        endContent={<Button isIconOnly />}
        subHeading="20 Minutes Ago"
      />
      <CardContent>
        <Typography as="p">This is a card. Pretty cool right?</Typography>
      </CardContent>
    </Card>
  );
};
