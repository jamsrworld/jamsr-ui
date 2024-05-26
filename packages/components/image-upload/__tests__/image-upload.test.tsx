import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ImageUpload } from "../src";

describe("Image-upload", () => {
  it("should render correctly", () => {
    const wrapper = render(<ImageUpload>hiii</ImageUpload>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
