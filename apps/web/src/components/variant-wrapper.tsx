import { Tab, Tabs, Typography } from "@jamsr-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  heading: string;
  description?: React.ReactNode;
};

export const VariantWrapper = (props: Props) => {
  const { children, heading, description } = props;
  return (
    <section>
      <div className="mb-6">
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
            <div className="border bg-background-secondary border-divider rounded-xl p-4">
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
