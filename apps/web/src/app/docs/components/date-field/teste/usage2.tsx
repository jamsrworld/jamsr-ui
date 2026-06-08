"use client";

import { useState } from "react";
import { SegmentedDateInput } from "./per";

export const DateInputUsage = () => {
  return (
    <div>
      <h2>Date Input Demo</h2>
      <Example />
    </div>
  );
};

export default function Example() {
  const [value, setValue] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Submitted date: ${value || "(empty/invalid)"}`);
      }}
    >
      <label
        htmlFor="dob"
        style={{ display: "block", marginBottom: 8 }}
      >
        Date of birth
      </label>

      <SegmentedDateInput
        id="dob"
        name="dob"
        required
        min="1900-01-01"
        max="2100-12-31"
        value={value as any}
        onChange={setValue}
        autoFocus
        aria-label="Date of birth"
        style={{
          border: "1px solid #ccc",
          padding: "6px 8px",
          borderRadius: 6,
          display: "inline-flex",
          gap: 4,
          fontFamily: "system-ui, sans-serif",
          fontSize: 14,
        }}
        className="caret-transparent focus:bg-primary"
      />

      <div style={{ marginTop: 12 }}>
        <button type="submit">Submit</button>
      </div>

      <div style={{ marginTop: 8, color: "#555" }}>
        Current ISO value: {value || "(none)"}
      </div>
    </form>
  );
}
