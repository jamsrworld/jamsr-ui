import { type Route } from "next";

type Props = {
  src: Route;
};

export const IFrameExample = (props: Props) => {
  const { src } = props;
  return (
    <iframe src={src} title="Header default" className="h-[500px] w-full" />
  );
};
