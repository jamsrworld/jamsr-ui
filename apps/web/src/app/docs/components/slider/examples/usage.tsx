"use client";

import { Slider } from "ui/slider";
import React from "react";

export const SliderUsage = (props: Slider.Props) => {
  const isVertical = props.orientation === "vertical";
  return (
    <div className="flex items-center justify-center p-4 w-72 h-64">
      <Slider
        defaultValue={30}
        {...props}
        className={isVertical ? "h-52" : "w-full"}
      >
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Control>
      </Slider>
    </div>
  );
};
