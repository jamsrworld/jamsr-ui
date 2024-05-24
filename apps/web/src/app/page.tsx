"use client";

import { Button } from "@jamsr-ui/react";

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const page = () => {
  return (
    <div className="gap-responsive bg-background  grid h-dvh place-content-center ">
      <Button className="rounded-lg border border-gray-500 p-2 text-purple-500">
        Hello
      </Button>
      <h1 className="bg-primary-500 text-3xl font-bold text-red-700 underline dark:text-orange-500">
        Hello world!
      </h1>
    </div>
  );
};

export default page;
