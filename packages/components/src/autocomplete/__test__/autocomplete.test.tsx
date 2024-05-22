import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Autocomplete } from "..";

describe("Autocomplete", () => {
  it("should render correctly", () => {
    const wrapper = render(<Autocomplete>hiii</Autocomplete>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
