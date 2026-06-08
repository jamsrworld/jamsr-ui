import { Chip } from "jamsrui/chip";

export const ChipVariantBordered = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip
        color="default"
        variant="bordered"
      >
        default
      </Chip>
      <Chip
        color="primary"
        variant="bordered"
      >
        primary
      </Chip>
      <Chip
        color="secondary"
        variant="bordered"
      >
        secondary
      </Chip>
      <Chip
        color="success"
        variant="bordered"
      >
        success
      </Chip>
      <Chip
        color="warning"
        variant="bordered"
      >
        warning
      </Chip>
      <Chip
        color="danger"
        variant="bordered"
      >
        danger
      </Chip>
    </div>
  );
};
