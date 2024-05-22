import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "..";

describe("Header", () => {
  it("should render correctly", () => {
    const wrapper = render(<Header>hiii</Header>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
