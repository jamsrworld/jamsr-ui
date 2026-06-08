"use client";

import { Text } from "jamsrui/text";

export const TextVariants = () => {
  const textVariants = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
  return (
    <div className="flex flex-col items-center gap-8">
      {textVariants.map((item) => {
        return (
          <Text
            key={item}
            variant={item}
            className="line-clamp-2"
          >
            I am {item} Text Variant Create content to help spread the word
            about Framer and earn 50% of. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati sequi repellendus iste recusandae
            nesciunt! Asperiores officiis dolorum quia maxime harum accusantium
            ab eos dolorem, nihil, at sed magni minima tenetur!
          </Text>
        );
      })}
    </div>
  );
};
