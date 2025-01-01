import {
  type CollapsibleContextType,
  useCollapsibleContext,
} from "./collapsible-context";

type CollapsibleStateProps = {
  children: (state: CollapsibleContextType) => React.ReactNode;
};

export const CollapsibleState = (props: CollapsibleStateProps) => {
  const { children } = props;
  const state = useCollapsibleContext();
  return children(state);
};
