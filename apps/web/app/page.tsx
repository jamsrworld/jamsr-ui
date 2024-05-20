import { Button } from "@jamsrworld/ui";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black underline">Hello world!</h1>
      <Button className="bg-black text-white" appName="docs">
        Click Me!
      </Button>
      Hii <code>web</code> app
    </div>
  );
};

export default page;
