import { DotMenuIcon } from "@/components/icons";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@jamsr-ui/react";
import Image from "next/image";
import { useId } from "react";
import FruitImg from "~/fruit-1.jpeg";

const AvatarItem = () => {
  const id = useId();
  return (
    <Avatar
      alt="image"
      className="flex"
      src={`https://i.pravatar.cc/300?u=${id}`}
      width={100}
      height={100}
    />
  );
};

export const CardStartEndContent = () => {
  return (
    <Card>
      <CardHeader
        heading="Card Header"
        startContent={<AvatarItem />}
        endContent={
          <IconButton aria-label="More" radius="full" variant="light">
            <DotMenuIcon />
          </IconButton>
        }
        subHeading="22 December 2024"
      />
      <CardContent className="flex flex-col gap-2">
        <Image
          src={FruitImg}
          alt="Fruit"
          className="aspect-video w-full rounded-md object-cover"
        />
        <Typography as="p">
          A react card component is a content container. It incorporates options
          for images, headers, and footers, a wide variety of content,
          contextual background colors, and excellent display options.
        </Typography>
        <div className="flex items-end gap-1">
          <Typography as="h6" variant="h6">
            $256
          </Typography>
          <Typography
            as="h6"
            className="text-foreground-secondary line-through"
          >
            $999
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
