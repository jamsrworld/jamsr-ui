import { Link, UINextConfigProvider } from "@jamsr-ui/next";

export const LinkGlobalConfig = () => {
  return (
    <UINextConfigProvider
      link={{
        className: "text-red-500",
        variant: "body4",
        underline: "always",
        prefetch: true,
      }}
    >
      <Link href="/">Go to homepage </Link>
    </UINextConfigProvider>
  );
};
