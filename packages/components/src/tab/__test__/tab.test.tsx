import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tab } from "..";

describe("Tab", () => {
  it("should render correctly", () => {
    const wrapper = render(<Tab>hiii</Tab>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
