"use client";

import { themes } from "prism-react-renderer";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { Alert } from "@jamsr-ui/react";

type Props = {
  code: string;
};

export const LiveCode = (props: Props) => {
  const { code } = props;
  return (
    <LiveProvider theme={themes.github} scope={{ Alert }} code={code}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};
