import React from "react";
import { ComponentsSidebar } from "./(page)/sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="bg-background-secondary flex">
      <ComponentsSidebar />
      <div className="bg-background-secondary ml-[240px] grow py-12">
        <div className="container mx-auto ">{children}</div>
      </div>
    </div>
  );
};

export default layout;
