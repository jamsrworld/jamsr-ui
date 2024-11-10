/* eslint-disable react/no-danger */
/* eslint-disable tailwindcss/no-custom-classname */

import { Card, CardContent } from "@jamsr-ui/react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

type Props = {
  children: string;
};

export const CodeBlock = (props: Props) => {
  const { children } = props;
  const highlightedCode = hljs.highlight(children, {
    language: "javascript",
  }).value;
  return (
    <Card className="w-full bg-black dark:bg-content1">
      <CardContent>
        <pre className="language-typescript">
          {/* <code>{children}</code> */}
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </CardContent>
    </Card>
  );
};
