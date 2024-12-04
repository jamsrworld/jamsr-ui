import { Button } from "@jamsr-ui/react";
import {
  InfoIcon,
  CloseIcon,
  ImageAddIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@jamsr-ui/shared-icons";

export const ButtonIconButton = () => {
  return (
    <div className="flex items-center gap-4">
      <Button isIconOnly variant="light">
        <InfoIcon />
      </Button>
      <Button isIconOnly variant="solid" color="danger">
        <CloseIcon />
      </Button>
      <Button isIconOnly variant="outlined" color="success">
        <ImageAddIcon />
      </Button>
      <Button isIconOnly isDisabled>
        <ChevronDoubleLeftIcon />
      </Button>
      <Button isIconOnly isDisabled>
        <ChevronDoubleRightIcon />
      </Button>
    </div>
  );
};
