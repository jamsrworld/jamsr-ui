import logoImg from "@/../public/full-logo.png";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { JAMSR_UI_GITHUB_URL, JAMSR_UI_TWITTER_URL } from "@/config";
import { Header, IconButton } from "@jamsr-ui/react";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./search-bar";

export const AppHeader = () => {
  return (
    <Header
      isBordered={false}
      className="mx-auto flex w-full justify-between px-4"
    >
      <Link href="/">
        <Image
          src={logoImg}
          className="grayscale invert dark:invert-0"
          alt="logo"
          height={40}
        />
      </Link>
      <div className="flex items-center gap-2">
        <SearchBar />
        <IconButton
          aria-label="Twitter"
          as="a"
          href={JAMSR_UI_TWITTER_URL}
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          as="a"
          href={JAMSR_UI_GITHUB_URL}
          target="_blank"
        >
          <GithubIcon />
        </IconButton>
        <ThemeSwitcher />
      </div>
    </Header>
  );
};
