import { FramerMotionProvider } from "./motion-provider";

type Props = { children: React.ReactNode };
export const UIProvider = (props: Props) => {
  const { children } = props;
  return <FramerMotionProvider>{children}</FramerMotionProvider>;
};
