import { Chip } from "jamsrui/chip";

export const ChipVariantSolid = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip
        color="default"
        variant="solid"
      >
        default
      </Chip>
      <Chip
        color="primary"
        variant="solid"
      >
        primary
      </Chip>
      <Chip
        color="secondary"
        variant="solid"
      >
        secondary
      </Chip>
      <Chip
        color="success"
        variant="solid"
      >
        success
      </Chip>
      <Chip
        color="warning"
        variant="solid"
      >
        warning
      </Chip>
      <Chip
        color="danger"
        variant="solid"
      >
        danger
      </Chip>
    </div>
  );
};
