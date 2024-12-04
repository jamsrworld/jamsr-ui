import { Typography } from "@jamsr-ui/react";

export const TypographyUsage = () => {
  return (
    <div>
      <Typography as="p">I'm a typography</Typography>
      <Typography as="h1" variant="h1">
        I'm a h1 <br />
        <Typography as="span">I'm a span inside</Typography>
      </Typography>
    </div>
  );
};
