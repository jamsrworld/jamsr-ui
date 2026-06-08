import React, { useState, useRef, useEffect } from "react";
import {
  format,
  parse,
  isValid,
  getDaysInMonth,
  addDays,
  subDays,
  addMonths,
  subMonths,
  addYears,
  subYears,
  compareAsc,
} from "date-fns";

const MIN_YEAR = 1900;
const MAX_YEAR = 2100;

export const CustomDateInput = React.forwardRef(
  ({ value = "", onChange, min, max, ...props }, ref) => {
    const [parts, setParts] = useState(() => getParts(value));
    const [focused, setFocused] = useState("day");
    const [maxDay, setMaxDay] = useState(31);

    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);
    const containerRef = useRef(null);

    const parsedMin = min ? parse(min, "yyyy-MM-dd", new Date()) : null;
    const parsedMax = max ? parse(max, "yyyy-MM-dd", new Date()) : null;
    const minYear = parsedMin ? parseInt(format(parsedMin, "yyyy")) : MIN_YEAR;
    const maxYear = parsedMax ? parseInt(format(parsedMax, "yyyy")) : MAX_YEAR;

    function getParts(val) {
      if (!val) return { day: "", month: "", year: "" };
      const d = parse(val, "yyyy-MM-dd", new Date());
      return isValid(d)
        ? {
            day: format(d, "dd"),
            month: format(d, "MM"),
            day: format(d, "dd"),
          }
        : { day: "", month: "", year: "" };
    }

    useEffect(() => {
      setParts(getParts(value));
    }, [value]);

    useEffect(() => {
      const m = parseInt(parts.month);
      const y = parseInt(parts.year);
      if (m >= 1 && m <= 12 && y) {
        setMaxDay(getDaysInMonth({ year: y, month: m }));
      } else {
        setMaxDay(31);
      }
    }, [parts.month, parts.year]);

    useEffect(() => {
      if (dayRef.current) {
        dayRef.current.innerText = parts.day;
        monthRef.current.innerText = parts.month;
        yearRef.current.innerText = parts.year;
      }
    }, [parts]);

    useEffect(() => {
      const refs = { day: dayRef, month: monthRef, year: yearRef };
      const currentRef = refs[focused]?.current;
      if (currentRef) {
        currentRef.focus();
        const range = document.createRange();
        range.selectNodeContents(currentRef);
        range.collapse(range.endContainer === currentRef ? false : true); // Start for new focus
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }, [focused]);

    const getRef = (segment) =>
      ({ day: dayRef, month: monthRef, year: yearRef })[segment];

    const setSegmentText = (segment, text) => {
      const r = getRef(segment).current;
      if (r) {
        r.innerText = text;
        const range = document.createRange();
        range.selectNodeContents(r);
        range.collapse(false);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    };

    const updateDate = (newParts) => {
      const { day, month, year } = newParts;
      if (!day || !month || !year) return;
      const dateStr = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      let d = parse(dateStr, "yyyy-MM-dd", new Date());
      if (!isValid(d)) return;
      if (parsedMin && compareAsc(d, parsedMin) < 0) d = parsedMin;
      if (parsedMax && compareAsc(d, parsedMax) > 0) d = parsedMax;
      const newVal = format(d, "yyyy-MM-dd");
      setParts(getParts(newVal));
      setInternalValue(newVal);
      if (onChange) onChange({ target: { value: newVal } });
    };

    const handleInput = (segment) => (e) => {
      let newVal = e.target.innerText.replace(/\D/g, "");
      if (segment === "year" && newVal.length > 4) newVal = newVal.slice(-4);
      else if (newVal.length > 2) newVal = newVal.slice(-2);
      e.target.innerText = newVal;
      const range = document.createRange();
      range.selectNodeContents(e.target);
      range.collapse(false);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      const updated = { ...parts, [segment]: newVal };
      if (shouldMoveNext(segment, newVal, updated)) {
        moveToNext(segment);
      }
      setParts(updated);
      // Delay update to allow full input
      setTimeout(() => updateDate(updated), 0);
    };

    const shouldMoveNext = (segment, val, updated) => {
      const numVal = parseInt(val);
      if (isNaN(numVal)) return false;
      if (segment === "day") {
        const days = maxDay;
        if (val.length === 1) {
          return numVal * 10 > days;
        } else if (val.length === 2) {
          return numVal >= 1 && numVal <= days;
        }
      } else if (segment === "month") {
        if (val.length === 1) {
          return numVal >= 3 && numVal <= 9; // As spec: 3-9 move; 1-2 stay for 10-12
        } else if (val.length === 2) {
          return numVal >= 1 && numVal <= 12;
        }
      } else if (segment === "year") {
        return val.length === 4;
      }
      return false;
    };

    const moveToNext = (segment) => {
      const nextMap = { day: "month", month: "year", year: null };
      const next = nextMap[segment];
      if (next) {
        setFocused(next);
      }
    };

    const moveToPrev = (segment) => {
      const prevMap = { day: null, month: "day", year: "month" };
      const prev = prevMap[segment];
      if (prev) {
        setFocused(prev);
      }
    };

    const incrementSegment = (segment) => {
      const currentDate = parse(
        `${parts.year}-${parts.month.padStart(2, "0")}-${parts.day.padStart(2, "0")}`,
        "yyyy-MM-dd",
        new Date(),
      );
      if (!isValid(currentDate)) return;
      let newDate = currentDate;
      if (segment === "day") newDate = addDays(currentDate, 1);
      else if (segment === "month") newDate = addMonths(currentDate, 1);
      else newDate = addYears(currentDate, 1);
      if (parsedMin && compareAsc(newDate, parsedMin) < 0) newDate = parsedMin;
      if (parsedMax && compareAsc(newDate, parsedMax) > 0) newDate = parsedMax;
      const newParts = getParts(format(newDate, "yyyy-MM-dd"));
      setParts(newParts);
      setTimeout(() => updateDate(newParts), 0);
    };

    const decrementSegment = (segment) => {
      const currentDate = parse(
        `${parts.year}-${parts.month.padStart(2, "0")}-${parts.day.padStart(2, "0")}`,
        "yyyy-MM-dd",
        new Date(),
      );
      if (!isValid(currentDate)) return;
      let newDate = currentDate;
      if (segment === "day") newDate = subDays(currentDate, 1);
      else if (segment === "month") newDate = subMonths(currentDate, 1);
      else newDate = subYears(currentDate, 1);
      if (parsedMin && compareAsc(newDate, parsedMin) < 0) newDate = parsedMin;
      if (parsedMax && compareAsc(newDate, parsedMax) > 0) newDate = parsedMax;
      const newParts = getParts(format(newDate, "yyyy-MM-dd"));
      setParts(newParts);
      setTimeout(() => updateDate(newParts), 0);
    };

    const setToMin = (segment) => {
      let newParts;
      if (segment === "day") {
        newParts = { ...parts, day: "1" };
      } else if (segment === "month") {
        newParts = { ...parts, month: "1" };
      } else {
        newParts = { ...parts, year: minYear.toString() };
      }
      setParts(newParts);
      updateDate(newParts);
    };

    const setToMax = (segment) => {
      let newParts;
      if (segment === "day") {
        newParts = { ...parts, day: maxDay.toString() };
      } else if (segment === "month") {
        newParts = { ...parts, month: "12" };
      } else {
        newParts = { ...parts, year: maxYear.toString() };
      }
      setParts(newParts);
      updateDate(newParts);
    };

    const handleKeyDown = (segment) => (e) => {
      const { key } = e;
      if (
        [
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Home",
          "End",
        ].includes(key)
      ) {
        e.preventDefault();
      }
      switch (key) {
        case "ArrowLeft":
          moveToPrev(segment);
          break;
        case "ArrowRight":
          moveToNext(segment);
          break;
        case "ArrowUp":
          incrementSegment(segment);
          break;
        case "ArrowDown":
          decrementSegment(segment);
          break;
        case "Home":
          setToMin(segment);
          break;
        case "End":
          setToMax(segment);
          break;
        case "Enter":
          if (segment === "year") {
            containerRef.current?.blur();
          } else {
            moveToNext(segment);
          }
          break;
        default:
          break;
      }
    };

    const handleBlur = () => {
      updateDate(parts);
    };

    return (
      <div
        ref={containerRef}
        role="group"
        aria-label="Date"
        {...props}
        ref={ref}
      >
        <div
          ref={dayRef}
          contentEditable
          role="spinbutton"
          aria-label="Day"
          aria-valuemin="1"
          aria-valuemax={maxDay}
          aria-valuenow={parts.day || ""}
          onInput={handleInput("day")}
          onKeyDown={handleKeyDown("day")}
          onBlur={handleBlur}
          style={{ display: "inline-block", width: "2ch", textAlign: "center" }}
        />
        <span
          aria-hidden="true"
          style={{ margin: "0 2px" }}
        >
          /
        </span>
        <div
          ref={monthRef}
          contentEditable
          role="spinbutton"
          aria-label="Month"
          aria-valuemin="1"
          aria-valuemax="12"
          aria-valuenow={parts.month || ""}
          onInput={handleInput("month")}
          onKeyDown={handleKeyDown("month")}
          onBlur={handleBlur}
          style={{ display: "inline-block", width: "2ch", textAlign: "center" }}
        />
        <span
          aria-hidden="true"
          style={{ margin: "0 2px" }}
        >
          /
        </span>
        <div
          ref={yearRef}
          contentEditable
          role="spinbutton"
          aria-label="Year"
          aria-valuemin={minYear}
          aria-valuemax={maxYear}
          aria-valuenow={parts.year || ""}
          onInput={handleInput("year")}
          onKeyDown={handleKeyDown("year")}
          onBlur={handleBlur}
          style={{ display: "inline-block", width: "4ch", textAlign: "center" }}
        />
      </div>
    );
  },
);

CustomDateInput.displayName = "CustomDateInput";
