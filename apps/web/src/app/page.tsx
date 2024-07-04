"use client";

import { Button, Menu, MenuItem } from "@jamsr-ui/react";
import { Editor } from "./components/editor";

const page = () => {
  return (
    <div className="gap-responsive bg-background grid  min-h-dvh text-white ">
      <Editor />
      <Menu trigger={<Button>Click Me</Button>}>
        <MenuItem>hii</MenuItem>
        <MenuItem>Hii2</MenuItem>
      </Menu>
      {/* <Dialog
        isOpen
        onOpenChange={() => {}}
      >
        <DialogContent>
          <DialogBody>HIii</DialogBody>
        </DialogContent>
      </Dialog> */}

      <Button className="rounded-lg border border-gray-500 p-2 text-purple-500">
        Hello
      </Button>
      <h1 className="bg-primary-500 text-3xl font-bold text-red-700 underline dark:text-orange-500">
        Hello world!
      </h1>

      <p>Typography</p>
      <p className="text-xs">text-xs</p>
      <p className="text-sm">text-sm</p>
      <p className="text-base">text-base</p>
      <p className="text-md">text-md</p>
      <p className="text-lg">text-lg</p>
      <p className="text-xl">text-xl</p>
      <p className="text-2xl">text-2xl</p>
      <p className="text-3xl">text-3xl</p>
      <p className="text-4xl">text-4xl</p>
      <p className="text-5xl">text-5xl</p>
      <p className="text-6xl">text-6xl</p>
      <p className="text-7xl">text-7xl</p>
      <p className="text-8xl">text-8xl</p>
      <p className="text-9xl">text-9xl</p>
    </div>
  );
};

export default page;
