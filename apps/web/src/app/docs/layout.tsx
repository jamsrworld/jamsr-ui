import { Sidebar } from "ui/sidebar";
import { AppHeader } from "./header";
import { AppSidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <Sidebar.Wrapper>
      <AppSidebar />
      <Sidebar.Inset>
        <AppHeader />
        {children}
      </Sidebar.Inset>
    </Sidebar.Wrapper>
  );
};

export default Layout;
