import { Link } from "@jamsr-ui/next";
import { UIConfigProvider } from "@jamsr-ui/config";

export const LinkGlobalConfig = () => {
  return (
    <UIConfigProvider
      next={{
        link: {
          className: "text-red-500",
          variant: "body4",
          underline: "always",
        },
      }}
    >
      <Link href="/">Go to homepage </Link>
    </UIConfigProvider>
  );
};
