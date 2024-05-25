import { useScroll } from "framer-motion";
import { useState } from "react";
import { Divider } from "@jamsr-ui/divider";

type Props = {
  show?: boolean;
};

export const HeaderDivider = (props: Props) => {
  const { show = false } = props;
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  scrollY.on("change", (val) => {
    if (val > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  if (!show && !hasScrolled) return null;
  return <Divider className="absolute bottom-0 left-0 w-full" />;
};
