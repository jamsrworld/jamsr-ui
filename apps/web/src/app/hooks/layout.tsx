import React from "react";
import { HooksSidebar } from "./(page)/sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex bg-background-secondary">
      <HooksSidebar />
      <div
        style={{
          width: "calc(100% - 240px)",
        }}
        className="ml-[240px] grow bg-background-secondary px-12"
      >
        <div className="container mx-auto max-w-screen-lg py-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
