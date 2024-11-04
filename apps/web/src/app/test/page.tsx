"use client";

import { Button, Input } from "@jamsr-ui/react";

const Page = () => {
  return (
    <div>
      <Button>Add</Button>
      <Input
        label="Username"
        // className="border-2 border-red-500"
        classNames={{
          // mainWrapper: "border",
          label: "text-lg text-white",
        }}
      />
    </div>
  );
};
export default Page;
