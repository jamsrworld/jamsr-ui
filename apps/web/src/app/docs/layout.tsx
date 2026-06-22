import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./header";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      <div className="flex px-0 lg:px-6 mx-auto py-12 justify-center">
        <AppSidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
