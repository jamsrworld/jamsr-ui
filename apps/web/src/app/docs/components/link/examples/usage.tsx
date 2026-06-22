"use client";

import { Link } from "ui/link";

export const LinkUsage = (props: Link.Props) => {
  return (
    <Link
      href="/"
      {...props}
    >
      Go to homepage
    </Link>
  );
};
