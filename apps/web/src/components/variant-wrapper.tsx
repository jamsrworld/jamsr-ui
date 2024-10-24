import { Card, Typography } from "@jamsr-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  heading: string;
  description?: string;
};

export const VariantWrapper = (props: Props) => {
  const { children, heading, description } = props;
  return (
    <Card as="section" className="w-full rounded-2xl bg-background p-8">
      <div className="mb-4 flex flex-col gap-1">
        <Typography variant="h6" as="h1" className="text-xl font-medium">
          {heading}
        </Typography>
        {description && (
          <Typography
            as="p"
            variant="paragraph"
            className="text-foreground-secondary"
          >
            {description}
          </Typography>
        )}
      </div>
      {children}
    </Card>
  );
};
