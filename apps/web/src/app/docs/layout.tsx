import { AppSidebar } from "./app-sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex px-0 lg:px-6 mx-auto py-12 justify-center">
      <AppSidebar />
      {/* <AppHeader /> */}
      {children}
    </div>
  );
};

export default Layout;
