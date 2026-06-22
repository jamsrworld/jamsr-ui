import { DocsOnThisPage } from "./docs-on-this-page";
import { DocsPageInner } from "./docs-page-inner";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export const DocsPage = (props: Props) => {
  const { children, description, title } = props;
  return (
    <DocsPageInner
      title={title}
      description={description}
      onThisPage={<DocsOnThisPage>{children}</DocsOnThisPage>}
    >
      {children}
    </DocsPageInner>
  );
};
