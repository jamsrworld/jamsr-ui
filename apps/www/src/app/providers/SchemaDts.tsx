/* eslint-disable react/no-danger */
import type { WebPage, WithContext } from "schema-dts";

export const SchemaDts = () => {
  const website: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "JamsrUI",
    description:
      "A professionally crafted React component library for modern web applications.",
    url: "https://jamsr-ui.jamsrworld.com",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
    />
  );
};
