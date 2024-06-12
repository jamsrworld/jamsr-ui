import { Typography } from "@jamsr-ui/typography";

type Props = {
  children: React.ReactNode;
};

export const AlertTitle = (props: Props) => {
  const { children } = props;
  return (
    <Typography
      as="h6"
      variant="body"
      className="flex font-medium"
      data-slot="title"
    >
      {children}
    </Typography>
  );
};
