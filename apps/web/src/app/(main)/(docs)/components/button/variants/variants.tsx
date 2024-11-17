import { Button } from "@jamsr-ui/react";

export const ButtonVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* text */}
      <div className="flex gap-10">
        <Button variant="text" color="default">
          Text
        </Button>
        <Button variant="text" color="primary">
          Text
        </Button>
        <Button variant="text" color="secondary">
          Text
        </Button>
        <Button variant="text" color="success">
          Text
        </Button>
        <Button variant="text" color="warning">
          Text
        </Button>
        <Button variant="text" color="danger">
          Text
        </Button>
      </div>
      {/* Light */}
      <div className="flex gap-4">
        <Button variant="light" color="default">
          Light
        </Button>
        <Button variant="light" color="primary">
          Light
        </Button>
        <Button variant="light" color="secondary">
          Light
        </Button>
        <Button variant="light" color="success">
          Light
        </Button>
        <Button variant="light" color="warning">
          Light
        </Button>
        <Button variant="light" color="danger">
          Light
        </Button>
      </div>
      {/* outlined */}
      <div className="flex gap-4">
        <Button variant="outlined" color="default">
          Outlined
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
        <Button variant="outlined" color="success">
          Outlined
        </Button>
        <Button variant="outlined" color="warning">
          Outlined
        </Button>
        <Button variant="outlined" color="danger">
          Outlined
        </Button>
      </div>
      {/* solid */}
      <div className="flex gap-4">
        <Button variant="solid" color="default">
          Solid
        </Button>
        <Button variant="solid" color="primary">
          Solid
        </Button>
        <Button variant="solid" color="secondary">
          Solid
        </Button>
        <Button variant="solid" color="success">
          Solid
        </Button>
        <Button variant="solid" color="warning">
          Solid
        </Button>
        <Button variant="solid" color="danger">
          Solid
        </Button>
      </div>
    </div>
  );
};
