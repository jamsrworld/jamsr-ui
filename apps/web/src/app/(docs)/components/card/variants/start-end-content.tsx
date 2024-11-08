import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography
} from "@jamsr-ui/react";
import { AvatarDefault } from "../../avatar/variants/default";

export const CardStartEndContent = () => {
  return (
    <Card>
      <CardHeader
        heading="Card Header"
        startContent={<AvatarDefault />}
        endContent={<Button isIconOnly />}
        subHeading="20 Minutes Ago"
      />
      <CardContent>
        <Typography as="p">This is a card. Pretty cool right?</Typography>
      </CardContent>
    </Card>
  );
};
