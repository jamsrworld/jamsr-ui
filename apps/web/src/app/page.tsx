import { Button } from "@jamsr-ui/react";

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
