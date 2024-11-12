"use client";

import { JAMSR_UI_GITHUB_URL } from "@/config";
import { Divider, Link, Typography } from "@jamsr-ui/react";

export const AppFooter = () => {
  return (
    <>
      <Divider className="pt-4" />
      <footer className="z-10 flex items-center justify-center gap-1 py-4">
        <Typography as="p">
          Built by{" "}
          <Link
            underline="always"
            target="_blank"
            href="https://jamsrworld.com"
          >
            Jamsrworld
          </Link>
          .
        </Typography>
        <Typography as="p">
          Source Code is on{" "}
          <Link
            underline="always"
            target="_blank"
            className="underline"
            href={JAMSR_UI_GITHUB_URL}
          >
            Github
          </Link>
        </Typography>
      </footer>
    </>
  );
};
