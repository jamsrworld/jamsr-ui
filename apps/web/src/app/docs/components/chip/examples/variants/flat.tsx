import { Chip } from "jamsrui/chip";

export const ChipVariantFlat = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip
        color="default"
        variant="soft"
      >
        default
      </Chip>
      <Chip
        color="primary"
        variant="soft"
      >
        primary
      </Chip>
      <Chip
        color="secondary"
        variant="soft"
      >
        secondary
      </Chip>
      <Chip
        color="success"
        variant="soft"
      >
        success
      </Chip>
      <Chip
        color="warning"
        variant="soft"
      >
        warning
      </Chip>
      <Chip
        color="danger"
        variant="soft"
      >
        danger
      </Chip>
    </div>
  );
};
