"use client";

import { Divider, Link, Typography } from "@jamsr-ui/react";

export const AppFooter = () => {
  return (
    <>
      <Divider className="py-4" />
      <footer className="z-10 flex items-center gap-1 justify-center">
        <Typography as="p">
          Built by{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://jamsrworld.com"
          >
            Jamsrworld
          </Link>
          .
        </Typography>
        <Typography as="p">
          Source Code is on{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://github.com/jamsrworld/jamsr-ui"
          >
            Github
          </Link>
        </Typography>
      </footer>
    </>
  );
};
