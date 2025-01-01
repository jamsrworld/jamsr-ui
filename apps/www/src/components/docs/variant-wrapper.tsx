import { toSlug } from "@/utils/fns";
import { Tab, Tabs, Text } from "@jamsr-ui/react";
import React from "react";
import { CodeBlock } from "../code-block";

export type VariantWrapperProps = {
  children: React.ReactNode;
  heading: string;
  description?: React.ReactNode;
  code?: string | string[];
  bg?: "primary" | "secondary";
};

export const VariantWrapper = (props: VariantWrapperProps) => {
  const { children, heading, description, code, bg = "primary" } = props;
  const id = toSlug(heading);
  return (
    <section className="scroll-mt-20" id={id}>
      <div className="mb-2">
        <Text variant="h6" as="h1" className="text-xl font-medium">
          {heading}
        </Text>
        {description && (
          <Text
            as="div"
            variant="paragraph"
            className="text-foreground-secondary"
          >
            {description}
          </Text>
        )}
      </div>
      <div>
        {code ? (
          <Tabs defaultValue="preview" variant="underlined">
            <Tab heading="Preview" value="preview">
              <div
                className={`rounded-xl border border-divider p-4 ${bg === "secondary" ? "bg-content2 dark:bg-transparent" : ""}`}
              >
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
        ) : (
          <div
            className={`rounded-xl border border-divider p-4 ${bg === "secondary" ? "bg-content2 dark:bg-transparent" : ""}`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
