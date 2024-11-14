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
      <div className="grow px-2 max-md:!w-full md:ml-[240px] xl:mr-[300px]">
        {children}
        <AppFooter />
      </div>
    </div>
  );
};

export default layout;
