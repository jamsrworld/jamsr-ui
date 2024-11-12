import logoImg from "@/../public/full-logo.png";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { JAMSR_UI_GITHUB_URL } from "@/config";
import { Button, Header } from "@jamsr-ui/react";
import Image from "next/image";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="currentColor"
    fill="none"
    {...props}
  >
    <path
      d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AppHeader = () => {
  return (
    <Header className="flex justify-between px-4">
      <Image
        src={logoImg}
        className="grayscale dark:invert"
        alt="logo"
        height={40}
      />
      <div className="flex items-center gap-2">
        <Button isIconOnly as="a" href={JAMSR_UI_GITHUB_URL} target="_blank">
          <GithubIcon />
        </Button>
        <ThemeSwitcher />
      </div>
    </Header>
  );
};
