"use client";

import { Button } from "@jamsr-ui/react";
import { useState } from "react";

const Page = () => {
  const [secret, setSecret] = useState<string | null>(null);

  const getConfig = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fetch("/").then(() => {
      console.log({ secret });
    });
  };

  const handleClick = async () => {
    setSecret("secret");
    await getConfig();
  };
  return (
    <div>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
};

export default Page;
