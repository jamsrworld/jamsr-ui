import { Button } from "@jamsrworld/ui";

const page = () => {
  return (
    <div className="bg-black h-dvh grid place-content-center">
      <Button className="bg-black text-white" appName="docs">
        Hello
      </Button>
      <h1 className="text-3xl text-red-300 font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default page;
