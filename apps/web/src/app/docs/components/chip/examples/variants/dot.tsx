import { Chip } from "jamsrui/chip";

export const ChipVariantDot = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip
        color="default"
        variant="dot"
      >
        <Chip.Dot />
        default
      </Chip>
      <Chip
        color="primary"
        variant="dot"
      >
        <Chip.Dot />
        primary
      </Chip>
      <Chip
        color="secondary"
        variant="dot"
      >
        <Chip.Dot />
        secondary
      </Chip>
      <Chip
        color="success"
        variant="dot"
      >
        <Chip.Dot />
        success
      </Chip>
      <Chip
        color="warning"
        variant="dot"
      >
        <Chip.Dot />
        warning
      </Chip>
      <Chip
        color="danger"
        variant="dot"
      >
        <Chip.Dot />
        danger
      </Chip>
    </div>
  );
};
