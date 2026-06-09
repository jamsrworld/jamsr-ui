"use client";

import { Toolbar } from "jamsrui/toolbar";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Link,
  Underline,
} from "lucide-react";
import React from "react";

export const ToolbarUsage = (props: React.ComponentProps<typeof Toolbar>) => {
  const isVertical = props.orientation === "vertical";
  const groupClass = isVertical ? "flex-col" : "";

  return (
    <Toolbar {...props}>
      <Toolbar.Group
        aria-label="Text formatting"
        className={groupClass}
      >
        <Toolbar.Button aria-label="Bold">
          <Bold className="size-4" />
        </Toolbar.Button>
        <Toolbar.Button aria-label="Italic">
          <Italic className="size-4" />
        </Toolbar.Button>
        <Toolbar.Button aria-label="Underline">
          <Underline className="size-4" />
        </Toolbar.Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group
        aria-label="Alignment"
        className={groupClass}
      >
        <Toolbar.Button aria-label="Align left">
          <AlignLeft className="size-4" />
        </Toolbar.Button>
        <Toolbar.Button aria-label="Align center">
          <AlignCenter className="size-4" />
        </Toolbar.Button>
        <Toolbar.Button aria-label="Align right">
          <AlignRight className="size-4" />
        </Toolbar.Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Link href="#">
        <Link className="mr-1.5 size-4" />
        Insert Link
      </Toolbar.Link>
    </Toolbar>
  );
};
