"use client";

import { Card, CardContent } from "@jamsr-ui/react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.css";
import { useEffect } from "react";

hljs.registerLanguage("javascript", javascript);

type Props = {
  children: React.ReactNode;
};

export const CodeSnippet = (props: Props) => {
  const { children } = props;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Card className="w-full bg-black dark:bg-content1">
      <CardContent>
        <pre>
          <code className="language-javascript">{children}</code>
        </pre>
      </CardContent>
    </Card>
  );
};
