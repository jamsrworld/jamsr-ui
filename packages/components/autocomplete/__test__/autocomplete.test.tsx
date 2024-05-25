import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AutoComplete } from "../src";

describe("Autocomplete", () => {
  it("should render correctly", () => {
    const wrapper = render(<AutoComplete>hiii</AutoComplete>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
