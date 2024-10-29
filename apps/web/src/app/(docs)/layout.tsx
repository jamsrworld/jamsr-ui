import { AppFooter } from "@/components/footer";
import React from "react";
import { ComponentsSidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex">
      <ComponentsSidebar />
      <div
        style={{
          width: "calc(100% - 240px)",
        }}
        className="grow px-2 max-md:!w-full md:ml-[240px] md:px-12"
      >
        <div className="container mx-auto max-w-screen-lg pt-12 pb-6">
          {children}
          <AppFooter />
        </div>
      </div>
    </div>
  );
};

export default layout;
