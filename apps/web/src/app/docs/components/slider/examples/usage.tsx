"use client";

import { Slider } from "jamsrui/slider";

export default function SliderUsage() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Single Slider</h3>
        <Slider.Root
          defaultValue={30}
          className="w-full"
        >
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Range Slider</h3>
        <Slider.Root
          defaultValue={[25, 75]}
          className="w-full"
        >
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb index={0} />
              <Slider.Thumb index={1} />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Vertical Slider</h3>
        <Slider.Root
          defaultValue={50}
          orientation="vertical"
          className="h-52"
        >
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>
    </div>
  );
}
