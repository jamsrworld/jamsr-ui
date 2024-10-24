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
            className="line-clamp-2"
          >
            I am {item} Typography Variant Create content to help spread the
            word about Framer and earn 50% of. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati sequi repellendus iste
            recusandae nesciunt! Asperiores officiis dolorum quia maxime harum
            accusantium ab eos dolorem, nihil, at sed magni minima tenetur!
          </Typography>
        );
      })}
    </div>
  );
};
