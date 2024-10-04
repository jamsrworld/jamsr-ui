import React from "react";

type Props = {
  children: React.ReactNode;
  heading: string;
  description?: string;
};

export const VariantWrapper = (props: Props) => {
  const { children, heading, description } = props;
  return (
    <section className="w-full rounded-2xl bg-background p-8">
      <div className="mb-4 flex flex-col gap-1">
        <h1 className="text-xl font-medium">{heading}</h1>
        {description && (
          <div className="text-foreground-secondary">{description}</div>
        )}
      </div>
      {children}
    </section>
  );
};
