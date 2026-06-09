import { AppSidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex px-6 mx-auto py-12 justify-center">
      <AppSidebar />
      {children}
    </div>
  );
};

export default Layout;
