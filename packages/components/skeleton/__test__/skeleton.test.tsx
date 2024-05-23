import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "../src";

describe("Skeleton", () => {
  it("should render correctly", () => {
    const wrapper = render(<Skeleton>hiii</Skeleton>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
