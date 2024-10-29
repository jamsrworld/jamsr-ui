import { Typography } from "@jamsr-ui/react";

type Props = {
  children: React.ReactNode;
  heading: string;
  description?: string;
};

export const VariantPage = (props: Props) => {
  const { children, heading, description } = props;
  return (
    <main data-heading={heading} className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <Typography variant="h4" as="h1">
          {heading}
        </Typography>
        <Typography
          variant="paragraph"
          as="h1"
          className="text-foreground-secondary"
        >
          {description}
        </Typography>
      </div>
      {children}
    </main>
  );
};
