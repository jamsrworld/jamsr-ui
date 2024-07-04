"use client";

import dynamic from "next/dynamic";

// import { Editor as EditorUI } from "@jamsr-ui/react";
const EditorUI = dynamic(
  async () => (await import("@jamsr-ui/editor")).Editor,
  {
    ssr: false,
  },
);

export const Editor = () => {
  return (
    <div className="h-[800px]">
      <EditorUI />
    </div>
  );
};
