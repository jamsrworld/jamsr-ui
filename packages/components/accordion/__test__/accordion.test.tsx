import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Accordion } from "../src";

describe("Accordion", () => {
  it("should render correctly", () => {
    const wrapper = render(<Accordion>hiii Accordion</Accordion>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
