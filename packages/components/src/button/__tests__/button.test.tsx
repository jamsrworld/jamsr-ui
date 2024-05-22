import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import { Button } from "..";

const sum = (a: number, b: number) => {
  return a + b;
};

describe("Button", () => {
  it("test", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("test2", () => {
    expect(sum(1, 2)).not.toBe(4);
  });
  test("test3", () => {
    expect(sum(0, 0)).toBe(0);
  });
  test("test4", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("check button render correctly", () => {
    render(<Button>hiii</Button>);
    expect(screen.getByRole("button")).toBeDefined()
  });
});
