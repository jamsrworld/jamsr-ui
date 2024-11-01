"use client";

import { Button, Input } from "@jamsr-ui/react";
import { useState } from "react";

const Page = () => {
  const [values, setValues] = useState<string[]>([]);
  console.log("values:->", values);
  return (
    <div>
      <Button
        onClick={() => {
          setValues((prev) => [Math.random().toString(32), ...prev]);
        }}
      >
        Add
      </Button>
      {values.map((value, idx) => (
        <Input key={value} defaultValue={value} />
      ))}
    </div>
  );
};
export default Page;
