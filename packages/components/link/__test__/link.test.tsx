import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Link } from "../src";

describe("Link", () => {
  it("should render correctly", () => {
    const wrapper = render(<Link>hiii</Link>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
