import { DotMenuIcon } from "@/components/icons";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@jamsr-ui/react";
import Image from "next/image";
import FruitImg from "~/fruit-1.jpeg";
import { AvatarDefault } from "../../avatar/variants/default";

export const CardStartEndContent = () => {
  return (
    <Card>
      <CardHeader
        heading="Card Header"
        startContent={<AvatarDefault />}
        endContent={
          <Button isIconOnly isRounded variant="light">
            <DotMenuIcon />
          </Button>
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
