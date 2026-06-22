"use client";

import { Card } from "ui/card";

export const CardUsage = (props: Card.Props) => {
  return (
    <Card {...props}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>Hey there I&apos;m content</Card.Content>
    </Card>
  );
};
