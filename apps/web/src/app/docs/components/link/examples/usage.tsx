"use client";

import { Link } from "jamsrui/link";

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
