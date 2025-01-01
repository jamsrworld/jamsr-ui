"use client";

import { Text, textVariants } from "@jamsr-ui/react";

export const TextAll = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      {Object.keys(textVariants.variants.variant).map((item) => {
        return (
          <Text
            key={item}
            // @ts-expect-error TypeError
            variant={item}
            className="line-clamp-2"
          >
            I am {item} Text Variant Create content to help spread the
            word about Framer and earn 50% of. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati sequi repellendus iste
            recusandae nesciunt! Asperiores officiis dolorum quia maxime harum
            accusantium ab eos dolorem, nihil, at sed magni minima tenetur!
          </Text>
        );
      })}
    </div>
  );
};
