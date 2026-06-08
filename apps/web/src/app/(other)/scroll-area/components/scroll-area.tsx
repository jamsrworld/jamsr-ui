"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";

// Define context type
interface ScrollAreaContextType {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  isVerticalScrollable: boolean;
  setIsVerticalScrollable: (value: boolean) => void;
  isHorizontalScrollable: boolean;
  setIsHorizontalScrollable: (value: boolean) => void;
}

// Context for sharing scroll container reference and scrollable states
const ScrollAreaContext = createContext<ScrollAreaContextType | null>(null);

// Hook to access context
const useScrollAreaContext = () => {
  const context = useContext(ScrollAreaContext);
  if (!context) {
    throw new Error("useScrollAreaContext must be used within a ScrollArea");
  }
  return context;
};

// ScrollArea root component
export const ScrollArea: React.FC<{
  children: ReactNode;
  width?: string;
  height?: string;
}> = ({ children, width, height }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVerticalScrollable, setIsVerticalScrollable] = useState(false);
  const [isHorizontalScrollable, setIsHorizontalScrollable] = useState(false);

  return (
    <ScrollAreaContext.Provider
      value={{
        scrollContainerRef,
        isVerticalScrollable,
        setIsVerticalScrollable,
        isHorizontalScrollable,
        setIsHorizontalScrollable,
      }}
    >
      <div
        className="group relative"
        style={{ width, height }}
      >
        {children}
      </div>
    </ScrollAreaContext.Provider>
  );
};

// ScrollAreaViewport component
export const ScrollAreaViewport: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { scrollContainerRef, isVerticalScrollable, isHorizontalScrollable } =
    useScrollAreaContext();

  return (
    <div
      ref={scrollContainerRef}
      className="h-full w-full overflow-auto scrollbar-hide"
      style={{
        paddingRight: isVerticalScrollable ? "8px" : "0",
        paddingBottom: isHorizontalScrollable ? "8px" : "0",
      }}
    >
      {children}
    </div>
  );
};

// ScrollBar component
export const ScrollBar: React.FC<{
  orientation: "horizontal" | "vertical";
}> = ({ orientation }) => {
  const {
    scrollContainerRef,
    isVerticalScrollable,
    setIsVerticalScrollable,
    isHorizontalScrollable,
    setIsHorizontalScrollable,
  } = useScrollAreaContext();
  const [thumbSize, setThumbSize] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef(0);
  const thumbStartRef = useRef(0);

  // Update thumb position and size
  useEffect(() => {
    const updateThumb = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      if (orientation === "vertical") {
        const scrollRatio = container.clientHeight / container.scrollHeight;
        const thumbHeight = Math.max(20, container.clientHeight * scrollRatio);
        setThumbSize(thumbHeight);
        const maxScroll = container.scrollHeight - container.clientHeight;
        const thumbPos =
          maxScroll > 0
            ? (container.scrollTop / maxScroll) *
              (container.clientHeight - thumbHeight)
            : 0;
        setThumbPosition(thumbPos);
        setIsVerticalScrollable(
          container.scrollHeight > container.clientHeight,
        );
      } else {
        const scrollRatio = container.clientWidth / container.scrollWidth;
        const thumbWidth = Math.max(20, container.clientWidth * scrollRatio);
        setThumbSize(thumbWidth);
        const maxScroll = container.scrollWidth - container.clientWidth;
        const thumbPos =
          maxScroll > 0
            ? (container.scrollLeft / maxScroll) *
              (container.clientWidth - thumbWidth)
            : 0;
        setThumbPosition(thumbPos);
        setIsHorizontalScrollable(
          container.scrollWidth > container.clientWidth,
        );
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateThumb);
      window.addEventListener("resize", updateThumb);
      updateThumb();
      return () => {
        container.removeEventListener("scroll", updateThumb);
        window.removeEventListener("resize", updateThumb);
      };
    }
  }, [
    scrollContainerRef,
    orientation,
    setIsVerticalScrollable,
    setIsHorizontalScrollable,
  ]);

  // Handle thumb dragging
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const delta =
        (orientation === "vertical" ? e.clientY : e.clientX) -
        dragStartRef.current;
      const newThumbPosition = thumbStartRef.current + delta;
      const container = scrollContainerRef.current;
      if (container) {
        const maxThumbPosition =
          (orientation === "vertical"
            ? container.clientHeight
            : container.clientWidth) - thumbSize;
        const clampedThumbPosition = Math.min(
          maxThumbPosition,
          Math.max(0, newThumbPosition),
        );
        const scrollRatio = clampedThumbPosition / maxThumbPosition;
        if (orientation === "vertical") {
          container.scrollTop =
            scrollRatio * (container.scrollHeight - container.clientHeight);
        } else {
          container.scrollLeft =
            scrollRatio * (container.scrollWidth - container.clientWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("contextmenu", handleMouseUp); // Reset dragging on context menu
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("contextmenu", handleMouseUp);
    };
  }, [isDragging, orientation, thumbSize, scrollContainerRef]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    dragStartRef.current = orientation === "vertical" ? e.clientY : e.clientX;
    thumbStartRef.current = thumbPosition;
  };

  // Handle track click to scroll by one page
  const handleTrackClick = (e: React.MouseEvent) => {
    if (e.target === thumbRef.current) return;
    const track = trackRef.current;
    const container = scrollContainerRef.current;
    if (!track || !container) return;
    const rect = track.getBoundingClientRect();
    const clickPosition =
      orientation === "vertical" ? e.clientY - rect.top : e.clientX - rect.left;
    if (orientation === "vertical") {
      if (clickPosition < thumbPosition) {
        container.scrollBy({
          top: -container.clientHeight,
          behavior: "smooth",
        });
      } else if (clickPosition > thumbPosition + thumbSize) {
        container.scrollBy({ top: container.clientHeight, behavior: "smooth" });
      }
    } else {
      if (clickPosition < thumbPosition) {
        container.scrollBy({
          left: -container.clientWidth,
          behavior: "smooth",
        });
      } else if (clickPosition > thumbPosition + thumbSize) {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
      }
    }
  };

  const trackZIndex = orientation === "vertical" ? "z-10" : "z-0";
  const trackClass = `absolute ${
    orientation === "vertical"
      ? "right-0 top-0 h-full w-2"
      : "bottom-0 left-0 w-full h-2"
  } bg-gray-100/20 transition-opacity duration-200 opacity-0 ${
    (orientation === "vertical" ? isVerticalScrollable : isHorizontalScrollable)
      ? "group-hover:opacity-100"
      : ""
  } ${isDragging ? "opacity-100" : ""} pointer-events-none ${
    (orientation === "vertical" ? isVerticalScrollable : isHorizontalScrollable)
      ? "group-hover:pointer-events-auto"
      : ""
  } ${isDragging ? "pointer-events-auto" : ""} ${trackZIndex}`;
  const thumbClass = `bg-gray-500 rounded pointer-events-auto`;

  const thumbStyle: React.CSSProperties = {
    position: "absolute",
    left: orientation === "horizontal" ? thumbPosition : 0,
    top: orientation === "vertical" ? thumbPosition : 0,
    width: orientation === "horizontal" ? thumbSize : "100%",
    height: orientation === "vertical" ? thumbSize : "100%",
  };

  return (
    <div
      ref={trackRef}
      className={trackClass}
      onClick={handleTrackClick}
    >
      <div
        ref={thumbRef}
        className={thumbClass}
        style={thumbStyle}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

// ScrollAreaCorner component
export const ScrollAreaCorner: React.FC = () => {
  const { isVerticalScrollable, isHorizontalScrollable } =
    useScrollAreaContext();
  if (!isVerticalScrollable || !isHorizontalScrollable) return null;
  return (
    <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-100/20 z-20" />
  );
};
