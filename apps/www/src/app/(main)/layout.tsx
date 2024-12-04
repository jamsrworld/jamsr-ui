import { AppHeader } from "@/layouts/app-header";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default Layout;
