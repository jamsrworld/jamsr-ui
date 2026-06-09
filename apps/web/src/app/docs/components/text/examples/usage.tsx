"use client";

import { Text } from "ui/text";
import React from "react";

export const TextUsage = (props: React.ComponentProps<typeof Text>) => {
  return <Text {...props}>Hola, I&apos;m a text</Text>;
};
