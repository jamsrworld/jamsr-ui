"use client";

import { Button, Menu, MenuItem } from "@jamsr-ui/react";

const page = () => {
  return (
    <div className="gap-responsive bg-background grid  h-dvh place-content-center text-white ">
      <Menu label={<Button>Click Me</Button>}>
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
    </div>
  );
};

export default page;
