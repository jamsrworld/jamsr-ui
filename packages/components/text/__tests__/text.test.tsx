import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "../src";

describe("Text", () => {
  it("should render correctly", () => {
    const wrapper = render(<Text as="p">hiii</Text>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
