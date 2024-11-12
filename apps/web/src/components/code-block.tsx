/* eslint-disable react/no-danger */
/* eslint-disable tailwindcss/no-custom-classname */

import { Card, CardContent } from "@jamsr-ui/react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { CopyToClipboard } from "./copy-to-clipboard";


hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

type Props = {
  children: string;
};

export const CodeBlock = (props: Props) => {
  const { children } = props;
  const highlightedCode = hljs.highlight(children, {
    language: "typescript",
  }).value;
  return (
    <div className="relative">
      {/* <LiveCode code={children} /> */}
      <Card className="group static w-full bg-content2 dark:bg-content1">
        <div className="absolute -top-9 right-1">
          {/* <div className="absolute right-1 top-1 hidden group-hover:block"> */}
          <CopyToClipboard text={children} />
        </div>
        <CardContent className="max-h-[700px] w-full overflow-auto">
          <pre className="language-typescript">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};
