import React from "react";
import { ComponentsSidebar } from "./(page)/sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex bg-background-secondary">
      <ComponentsSidebar />
      <div
        style={{
          width: "calc(100% - 240px)",
        }}
        className="grow bg-background-secondary px-2 max-md:!w-full md:ml-[240px] md:px-12"
      >
        <div className="container mx-auto max-w-screen-lg py-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
