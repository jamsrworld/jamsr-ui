import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Image } from "../src";

describe("Image", () => {
  it("should render correctly", () => {
    const wrapper = render(<Image>hiii</Image>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
