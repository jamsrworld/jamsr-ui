import { type SVGProps } from "react";

export const ChevronDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
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

export const ChevronDoubleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
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

export const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 10.14a20.36 20.36 0 0 0 3.702 3.893c.175.141.42.141.596 0A20.361 20.361 0 0 0 16 10.14"
    />
  </svg>
);

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.126 8.14a20.351 20.351 0 0 0-3.895 3.701.472.472 0 0 0 0 .596 20.353 20.353 0 0 0 3.895 3.702"
    />
  </svg>
);

export const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14.264a20.354 20.354 0 0 1 3.702-3.894.472.472 0 0 1 .596 0A20.355 20.355 0 0 1 16 14.264"
    />
  </svg>
);

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 8.14a20.351 20.351 0 0 1 3.894 3.701.472.472 0 0 1 0 .596A20.353 20.353 0 0 1 10 16.139"
    />
  </svg>
);

export const Info = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.992 15h.009"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12V8"
    />
  </svg>
);

export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={16}
    height={16}
    color="currentColor"
    fill="none"
    {...props}
  >
    <path
      d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 18 6-6m0 0 6-6m-6 6L6 6m6 6 6 6"
    />
  </svg>
);

export const EyeClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414L17.265 5.32a.203.203 0 0 1-.244.032A10.058 10.058 0 0 0 12 4C8.933 4 6.446 5.396 4.745 7.029a10.928 10.928 0 0 0-1.988 2.55C2.307 10.394 2 11.257 2 12c0 .91.462 2.022 1.136 3.048.487.739 1.125 1.5 1.902 2.196a.203.203 0 0 1 .01.294l-3.755 3.755a1 1 0 1 0 1.414 1.414L18 7.414l4.707-4.707Zm-8.858 6.03a.19.19 0 0 0-.043-.307 4 4 0 0 0-5.376 5.376.19.19 0 0 0 .306.043l1.25-1.25c.05-.05.07-.123.055-.193a2 2 0 0 1 2.365-2.365.213.213 0 0 0 .194-.055l1.25-1.25Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m10.037 18.205 2.16-2.16a.206.206 0 0 1 .129-.058 4 4 0 0 0 3.66-3.662.206.206 0 0 1 .06-.129l3.325-3.325a1 1 0 0 1 1.548.166C21.561 10.035 22 11.112 22 12c0 .743-.307 1.606-.757 2.42a10.929 10.929 0 0 1-1.988 2.551C17.555 18.604 15.068 20 12 20a9.94 9.94 0 0 1-1.396-.098 1 1 0 0 1-.566-1.697Z"
    />
  </svg>
);

export const EyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.745 7.029C6.446 5.396 8.933 4 12 4s5.554 1.396 7.255 3.029c.851.817 1.523 1.709 1.988 2.55.45.815.757 1.678.757 2.421 0 .743-.307 1.606-.757 2.42a10.926 10.926 0 0 1-1.988 2.551C17.554 18.604 15.067 20 12 20s-5.554-1.396-7.255-3.029a10.927 10.927 0 0 1-1.988-2.55C2.307 13.606 2 12.743 2 12c0-.743.307-1.606.757-2.42a10.928 10.928 0 0 1 1.988-2.551ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      clipRule="evenodd"
    />
  </svg>
);

export const ImageUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.39 4.393C2 5.784 2 8.023 2 12.502c0 4.478 0 6.717 1.39 8.109l1.193.79.789-.951c4.155-5.031 8.875-10.745 15.62-6.394.003-.486.003-1.003.003-1.554 0-4.478 0-6.718-1.391-8.109s-3.63-1.391-8.107-1.391c-4.477 0-6.715 0-8.106 1.391Z"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.497 3.002c-4.477 0-6.715 0-8.106 1.391S2 8.023 2 12.502c0 4.478 0 6.717 1.39 8.109 1.392 1.391 3.63 1.391 8.107 1.391 4.477 0 6.716 0 8.107-1.391 1.39-1.392 1.39-3.63 1.39-8.109v-.5"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M4.999 21.002c4.209-4.751 8.939-11.053 15.996-6.327"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.996 1.998v8.008M22 5.977l-8.009.015"
    />
  </svg>
);

export const Email = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    color="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 6 6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.94.05 3.862.05 5.802 0 3.149-.079 4.723-.118 5.854-1.254 1.131-1.135 1.164-2.668 1.23-5.733.02-.986.02-1.966 0-2.952-.066-3.065-.099-4.598-1.23-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.066 69.066 0 0 0 0 2.952Z"
    />
  </svg>
);

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={16}
    height={16}
    color="currentColor"
    fill="none"
    {...props}
  >
    <path
      d="M17.5 17.5L22 22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const ZipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FFCD66"
        d="M23.172 0a2 2 0 0 1 1.414.585l11.828 11.82A2 2 0 0 1 37 13.818v21.514C37 37.911 34.869 40 32.24 40H7.76C5.131 40 3 37.91 3 35.333V4.667C3 2.089 5.131 0 7.76 0h15.412Z"
      />
      <g filter="url(#b)">
        <path
          fill="#fff"
          fillOpacity={0.24}
          d="M35.155 12.138a.5.5 0 0 1-.355.852H29c-2.577 0-4.902-2.267-4.902-4.78V2.204a.5.5 0 0 1 .855-.352l10.202 10.286Z"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        fill="#fff"
        d="M22.43 16.467h-1.513c-.109 0-.163.046-.217.093-.054.047-.054.14-.054.233.108.187.162.42.162.607v6.067l.163.933c0 .093.108.14.162.187.054 0 .108.046.108.046l.27.14c.865.28 1.405.98 1.405 1.727v2.1c0 .093.054.187.162.187.054 0 .054.046.108.046.055 0 .108 0 .163-.046.432-.28.648-.654.648-1.12v-9.8c.054-.794-.648-1.4-1.567-1.4Z"
        opacity={0.48}
      />
      <path
        fill="#fff"
        d="M15.134 17.12a.273.273 0 0 1 .27-.187h.541c.108 0 .216.047.27.187l.325 1.073.432-.793-.649-1.307V16h-1.459v.093l-.54 1.307.432.887.378-1.167Z"
      />
      <path
        fill="#fff"
        d="m15.62 17.4-.702 2.1a.447.447 0 0 0 .108.56c.216.187 1.027.187 1.243 0 .162-.14.216-.373.162-.56l-.703-2.1h-.108Z"
      />
      <path
        fill="#fff"
        d="m21.35 25.193-.379-.14c-.432-.14-.757-.466-.757-.886V17.4c0-.793-.702-1.4-1.621-1.4h-1.73l.703 1.307a.128.128 0 0 1 0 .186l-.702 1.167c0 .047-.054.093-.108.093l.216.607c.162.327.054.747-.27 1.027-.217.186-.595.28-1.027.28-.433 0-.811-.094-1.027-.28-.325-.28-.432-.7-.27-1.027l.216-.56c-.108 0-.216-.047-.27-.14l-.54-1.167v-.186l.54-1.307H11.62c-.918 0-1.621.607-1.621 1.4v11.2c0 .793.703 1.4 1.621 1.4h9.188c.919 0 1.621-.607 1.621-1.4v-2.1c0-.607-.432-1.12-1.08-1.307Zm-6.216 2.94h-.54c-.162 0-.27-.093-.27-.233s.108-.233.27-.233h.54c.162 0 .27.093.27.233s-.108.233-.27.233Zm0-.933h-.54c-.162 0-.27-.093-.27-.233s.108-.234.27-.234h.54c.162 0 .27.094.27.234s-.108.233-.27.233Zm0-.933h-.54c-.162 0-.27-.094-.27-.234s.108-.233.27-.233h.54c.162 0 .27.093.27.233s-.108.234-.27.234Zm0-.934h-.54c-.162 0-.27-.093-.27-.233s.108-.233.27-.233h.54c.162 0 .27.093.27.233s-.108.233-.27.233Zm0-.933h-.54c-.162 0-.27-.093-.27-.233s.108-.234.27-.234h.54c.162 0 .27.094.27.234s-.108.233-.27.233Zm0-.933h-.54c-.162 0-.27-.094-.27-.234s.108-.233.27-.233h.54c.162 0 .27.093.27.233s-.108.234-.27.234Zm0-.934h-.54c-.162 0-.27-.093-.27-.233s.108-.233.27-.233h.54c.162 0 .27.093.27.233s-.108.233-.27.233Zm0-.933h-.54c-.162 0-.27-.093-.27-.233s.108-.234.27-.234h.54c.162 0 .27.094.27.234s-.108.233-.27.233Zm1.622 6.067h-.54c-.163 0-.271-.094-.271-.234s.108-.233.27-.233h.54c.163 0 .27.093.27.233s-.107.234-.27.234Zm0-.934h-.54c-.163 0-.271-.093-.271-.233s.108-.233.27-.233h.54c.163 0 .27.093.27.233s-.107.233-.27.233Zm0-.933h-.54c-.163 0-.271-.093-.271-.233s.108-.234.27-.234h.54c.163 0 .27.094.27.234s-.107.233-.27.233Zm0-.933h-.54c-.163 0-.271-.094-.271-.234s.108-.233.27-.233h.54c.163 0 .27.093.27.233s-.107.234-.27.234Zm0-.934h-.54c-.163 0-.271-.093-.271-.233s.108-.233.27-.233h.54c.163 0 .27.093.27.233s-.107.233-.27.233Zm0-.933h-.54c-.163 0-.271-.093-.271-.233s.108-.234.27-.234h.54c.163 0 .27.094.27.234s-.107.233-.27.233Zm0-.933h-.54c-.163 0-.271-.094-.271-.234s.108-.233.27-.233h.54c.163 0 .27.093.27.233s-.107.234-.27.234Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
      <filter
        id="b"
        width={15.203}
        height={15.287}
        x={22.098}
        y={1.703}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1255_158078"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1255_158078"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
