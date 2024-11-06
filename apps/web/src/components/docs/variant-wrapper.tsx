import { toSlug } from "@/utils/fns";
import { Tab, Tabs, Typography } from "@jamsr-ui/react";
import React from "react";

export type VariantWrapperProps = {
  children: React.ReactNode;
  heading: string;
  description?: React.ReactNode;
};

export const VariantWrapper = (props: VariantWrapperProps) => {
  const { children, heading, description } = props;
  const id = toSlug(heading);
  return (
    <section id={id}>
      <div className="mb-2">
        <Typography variant="h6" as="h1" className="text-xl font-medium">
          {heading}
        </Typography>
        {description && (
          <Typography
            as="div"
            variant="paragraph"
            className="text-foreground-secondary"
          >
            {description}
          </Typography>
        )}
      </div>
      <div>
        <Tabs defaultValue="preview" variant="underlined">
          <Tab heading="Preview" value="preview">
            <div className="rounded-xl border border-divider bg-background-secondary p-4">
              {children}
            </div>
          </Tab>
          <Tab heading="Code" value="code">
            <Typography as="p">Coming soon</Typography>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};
