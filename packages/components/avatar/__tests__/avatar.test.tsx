import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "../src";

describe("Avatar", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <Avatar
        src=""
        alt="user"
      />,
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
