import Image from "next/image";
import Logo from "~/full-logo.png";

export const AppLogo = () => {
  return (
    <Image
      src={Logo}
      alt="JamsrUI"
      className="h-10 w-auto"
    />
  );
};
