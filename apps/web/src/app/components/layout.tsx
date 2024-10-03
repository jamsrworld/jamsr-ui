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
      <div className="bg-background-secondary container mx-auto grow py-12">
        {children}
      </div>
    </div>
  );
};

export default layout;
