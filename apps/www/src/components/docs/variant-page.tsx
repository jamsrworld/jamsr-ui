import { Text } from "@jamsr-ui/react";
import { Children, isValidElement } from "react";
import { OnThisPage } from "./on-this-page";
import { type VariantWrapperProps } from "./variant-wrapper";

type Props = {
  children: React.ReactNode;
  heading: string;
  description?: string;
};

export const VariantPage = (props: Props) => {
  const { children, heading, description } = props;
  const headings = Children.map(children, (child) => {
    if (isValidElement<VariantWrapperProps>(child)) {
      return child.props.heading;
    }
    return null;
  });
  const headingsList = Array.isArray(headings) ? headings : [];

  return (
    <main className="flex">
      <article className="container mx-auto flex w-full max-w-screen-md flex-col gap-8 pb-6 pt-12">
        <div className="flex flex-col gap-2">
          <Text variant="h4" as="h1">
            {heading}
          </Text>
          <Text
            variant="paragraph"
            as="h1"
            className="text-foreground-secondary"
          >
            {description}
          </Text>
        </div>
        <div className="flex grow flex-col gap-4">{children}</div>
      </article>
      <OnThisPage headings={headingsList} />
    </main>
  );
};
