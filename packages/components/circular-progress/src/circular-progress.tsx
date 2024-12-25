import { cn, type SlotsToClasses } from "@jamsr-ui/utils";
import {
  circularProgress,
  type CircularProgressSlots,
  type CircularProgressVariants,
} from "./style";

interface Props {
  value?: number; // Progress value (0 - 100)
  size?: number; // Diameter of the circle
  trackWidth?: number; // Width of the circular track
  progressWidth?: number; // Width of the progress arc
  showLabel?: boolean; // Show progress label
  strokeWidth?: number; // Stroke width for both track and progress
  isIntermediate?: boolean;
  labelFormatter?: (value: number) => string;
  slotProps?: {
    track?: React.HTMLAttributes<SVGCircleElement>;
    progress?: React.HTMLAttributes<SVGCircleElement>;
    svg?: React.HTMLAttributes<SVGSVGElement>;
    label?: React.HTMLAttributes<SVGTextElement>;
  };
}

export type CircularProgressProps = Props &
  CircularProgressVariants & {
    className?: string;
    classNames?: SlotsToClasses<CircularProgressSlots>;
  };

export const CircularProgress = (props: CircularProgressProps) => {
  const {
    value = 40,
    color,
    size = 40,
    className,
    classNames,
    strokeWidth,
    progressWidth = strokeWidth ?? 3,
    trackWidth = strokeWidth ?? 3,
    showLabel = false,
    isIntermediate = true,
    labelFormatter = (value) => `${value}%`,
    slotProps,
  } = props;

  const styles = circularProgress({
    className,
    color,
    isIntermediate,
  });

  const radius = (size - Math.max(trackWidth, progressWidth)) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (value / 100) * circumference;
  return (
    <svg
      {...slotProps?.svg}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={styles.svg({ className: cn(classNames?.svg, className) })}
    >
      {/* Background Track */}
      <circle
        {...slotProps?.track}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={trackWidth}
        fill="none"
        className={styles.track({ className: classNames?.track })}
      />
      {/* Progress Arc */}
      <circle
        {...slotProps?.progress}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={progressWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className={styles.progress({ className: classNames?.progress })}
      />
      {/* Text inside the circle */}
      {showLabel && (
        <text
          {...slotProps?.label}
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="18"
          className={styles.label({ className: classNames?.label })}
        >
          {`${labelFormatter ? labelFormatter(value) : value}`}
        </text>
      )}
    </svg>
  );
};
