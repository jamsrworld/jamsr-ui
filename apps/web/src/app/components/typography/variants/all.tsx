"use client";

import { Typography, typographyVariants } from "@jamsr-ui/react";

export const TypographyAll = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      {Object.keys(typographyVariants.variants.variant).map((item) => {
        return (
          <Typography
            key={item}
            // @ts-expect-error TypeError 
            variant={item}
            className="max-w-screen-md text-balance text-center"
          >
            I am {item} Typography Variant Create content to help spread the
            word about Framer and earn 50% of
          </Typography>
        );
      })}
    </div>
  );
};
