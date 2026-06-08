"use client";

import { useState } from "react";
import { Slider } from "./components/slider";

const Page = () => {
  const [range, setRange] = useState<number[]>([20, 49, 70]);
  return (
    <div className="grid h-screen place-content-center">
      <div className="p-4">
        <h1 className="text-2xl mb-4">Price Range Slider</h1>
        <Slider
          min={0}
          max={100}
          step={1}
          values={range}
          onChange={setRange}
        />
        <p>
          Range: {range[0]} - {range[1]}
        </p>
      </div>
    </div>
  );
};

export default Page;
