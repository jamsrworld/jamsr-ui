import React from "react";
import { HooksSidebar } from "./(page)/sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="bg-background-secondary flex">
      <HooksSidebar />
      <div
        style={{
          width: "calc(100% - 240px)",
        }}
        className="bg-background-secondary ml-[240px] grow px-12"
      >
        <div className="container mx-auto max-w-screen-lg py-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
