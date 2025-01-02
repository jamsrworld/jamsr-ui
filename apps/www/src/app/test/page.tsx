"use client";

import { useId } from "react";

const Page = () => {
  const id = useId();
  return (
    <div className="container mx-auto max-w-screen-sm py-24">
      <div className="flex flex-col">
        {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label onMouseDown={(e) => e.preventDefault()} htmlFor={id}>
          Hii
        </label>
        <input id={id} />
      </div>
    </div>
  );
};

export default Page;
