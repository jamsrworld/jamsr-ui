import { toSlug } from "@/utils/fns";
import { Tab, Tabs, Typography } from "@jamsr-ui/react";
import React from "react";
import { CodeBlock } from "../code-block";

export type VariantWrapperProps = {
  children: React.ReactNode;
  heading: string;
  description?: React.ReactNode;
  code?: string | string[];
};

export const VariantWrapper = (props: VariantWrapperProps) => {
  const { children, heading, description, code } = props;
  const id = toSlug(heading);
  return (
    <section className="scroll-mt-20" id={id}>
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
            <div className="rounded-xl border border-divider bg-content2 p-4 dark:bg-background-secondary">
              {children}
            </div>
          </Tab>
          <Tab heading="Code" value="code">
            {typeof code === "string" && <CodeBlock>{code}</CodeBlock>}
            {Array.isArray(code) && (
              <div className="flex flex-col gap-2">
                {code.map((c, idx) => (
                  <CodeBlock key={idx}>{c}</CodeBlock>
                ))}
              </div>
            )}
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};
