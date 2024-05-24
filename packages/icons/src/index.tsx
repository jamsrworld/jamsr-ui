import { type SVGProps } from "react";

const DoubleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 8a20.355 20.355 0 0 0-3.894 3.702.472.472 0 0 0 0 .596A20.357 20.357 0 0 0 11 16m6-8a20.354 20.354 0 0 0-3.894 3.702.472.472 0 0 0 0 .596A20.355 20.355 0 0 0 17 16"
    />
  </svg>
);

const DoubleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 8a20.354 20.354 0 0 1 3.894 3.702.472.472 0 0 1 0 .596A20.355 20.355 0 0 1 13 16M7 8a20.355 20.355 0 0 1 3.894 3.702.472.472 0 0 1 0 .596A20.357 20.357 0 0 1 7 16"
    />
  </svg>
);

const Down = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 10.14a20.36 20.36 0 0 0 3.702 3.893c.175.141.42.141.596 0A20.361 20.361 0 0 0 16 10.14"
    />
  </svg>
);

const Left = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.126 8.14a20.351 20.351 0 0 0-3.895 3.701.472.472 0 0 0 0 .596 20.353 20.353 0 0 0 3.895 3.702"
    />
  </svg>
);

const Up = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14.264a20.354 20.354 0 0 1 3.702-3.894.472.472 0 0 1 .596 0A20.355 20.355 0 0 1 16 14.264"
    />
  </svg>
);

const Right = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 8.14a20.351 20.351 0 0 1 3.894 3.701.472.472 0 0 1 0 .596A20.353 20.353 0 0 1 10 16.139"
    />
  </svg>
);

export const ChevronIcons = {
  Up,
  Down,
  Left,
  Right,
  DoubleLeft,
  DoubleRight,
};
