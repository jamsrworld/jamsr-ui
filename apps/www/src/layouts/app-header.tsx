import logoImg from "@/../public/full-logo.png";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import { NextLink } from "@/components/next";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { JAMSR_UI_GITHUB_URL, JAMSR_UI_TWITTER_URL } from "@/config";
import { Header, IconButton, Link } from "@jamsr-ui/react";
import Image from "next/image";
import { type Route } from "next";
import { SearchBar } from "./search-bar";

const navLinks: { label: string; href: Route }[] = [
  {
    label: "Docs",
    href: "/guides/installation",
  },
  {
    label: "Components",
    href: "/components/accordion",
  },
  {
    label: "Theme",
    href: "/guides/theme",
  },
  {
    label: "Charts",
    href: "/components/charts/area-chart",
  },
];
export const AppHeader = () => {
  return (
    <Header isBordered>
      <div className="container mx-auto flex w-full justify-between px-4">
        <div className="flex items-center gap-8">
          <Link as={NextLink} href="/">
            <Image
              src={logoImg}
              className="grayscale invert dark:invert-0"
              alt="logo"
              height={30}
            />
          </Link>
          <nav className="max-md:hidden">
            {navLinks.map((link) => (
              <Link
                as={NextLink}
                key={link.label}
                href={link.href}
                className="text-foreground mr-4 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <SearchBar />
          <IconButton
            aria-label="Twitter"
            as="a"
            href={JAMSR_UI_TWITTER_URL}
            target="_blank"
            variant="light"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            as="a"
            href={JAMSR_UI_GITHUB_URL}
            target="_blank"
            variant="light"
            className="max-md:hidden"
          >
            <GithubIcon />
          </IconButton>
          <ThemeSwitcher />
        </div>
      </div>
    </Header>
  );
};
