"use client";

import { JAMSR_UI_GITHUB_URL } from "@/config";
import { Divider, Link, Text } from "@jamsr-ui/react";

export const AppFooter = () => {
  return (
    <>
      <Divider className="pt-4" />
      <footer className="z-10 flex items-center justify-center gap-1 py-4">
        <Text as="p">
          Built by{" "}
          <Link
            underline="always"
            target="_blank"
            href="https://jamsrworld.com"
          >
            Jamsrworld
          </Link>
          .
        </Text>
        <Text as="p">
          Source Code is on{" "}
          <Link
            underline="always"
            target="_blank"
            className="underline"
            href={JAMSR_UI_GITHUB_URL}
          >
            Github
          </Link>
        </Text>
      </footer>
    </>
  );
};
