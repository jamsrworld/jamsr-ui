/* eslint-disable react/no-danger */
/* eslint-disable tailwindcss/no-custom-classname */

import { Card, CardContent, CardProps } from "@jamsr-ui/react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import shell from "highlight.js/lib/languages/shell";
import xml from "highlight.js/lib/languages/xml";
import { CopyToClipboard } from "./copy-to-clipboard";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("shell", shell);

type Props = {
  children: string;
  copyPosition?: "top" | "right";
  language?: "typescript" | "shell";
  radius?: CardProps["radius"];
};

export const CodeBlock = (props: Props) => {
  const {
    children,
    copyPosition = "top",
    language = "typescript",
    radius,
  } = props;

  // return typeof
  const highlightedCode = hljs.highlight(children, {
    language,
  }).value;
  return (
    <div className="relative">
      <Card
        className="group static w-full bg-content2 dark:bg-content1"
        radius={radius}
      >
        {copyPosition === "top" && (
          <div className="absolute -top-9 right-1">
            <CopyToClipboard text={children} />
          </div>
        )}
        <CardContent className="flex max-h-[700px] w-full flex-col items-center gap-2 overflow-auto p-3 text-sm">
          <pre className="language-typescript w-full">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
          {copyPosition === "right" && (
            <div className="absolute right-1 top-1/2 hidden -translate-y-1/2 group-hover:block">
              <CopyToClipboard radius={radius} text={children} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
