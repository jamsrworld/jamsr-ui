/* eslint-disable react/no-danger */
/* eslint-disable tailwindcss/no-custom-classname */

import { Card, CardContent } from "@jamsr-ui/react";
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
};

export const CodeBlock = (props: Props) => {
  const { children, copyPosition = "top", language = "typescript" } = props;
  const highlightedCode = hljs.highlight(children, {
    language,
  }).value;
  return (
    <div className="relative">
      {/* <LiveCode code={children} /> */}
      <Card className="group static w-full bg-content2 dark:bg-content1">
        {copyPosition === "top" && (
          <div className="absolute -top-9 right-1">
            <CopyToClipboard text={children} />
          </div>
        )}
        <CardContent className="flex max-h-[700px] w-full items-center gap-2 overflow-auto p-3 text-sm">
          <pre className="language-typescript">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
          {copyPosition === "right" && (
            <div className="absolute right-1 hidden group-hover:block">
              <CopyToClipboard text={children} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
