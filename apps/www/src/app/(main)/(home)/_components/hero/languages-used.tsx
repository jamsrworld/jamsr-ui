export const LanguagesUsed = () => {
  return (
    <div className="relative flex flex-wrap items-center justify-center gap-4">
      <div className="mr-4 flex items-center space-x-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 shrink-0 stroke-1 text-neutral-500 md:size-10"
          >
            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
            <path d="M15 12v-3" />
          </svg>
        </span>
        <span className="shrink-0 text-sm font-semibold text-neutral-500">
          Next.js
        </span>
      </div>
      <div className="mr-4 flex items-center space-x-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 shrink-0 stroke-1 text-neutral-500 md:size-10"
          >
            <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
            <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
            <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
            <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
            <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
            <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
            <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
          </svg>
        </span>
        <span className="shrink-0 text-sm font-semibold text-neutral-500">
          React
        </span>
      </div>
      <div className="mr-4 flex items-center space-x-2">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            className="size-4 shrink-0 stroke-[0.5px] text-neutral-500 md:size-10"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" />
          </svg>
        </span>
        <span className="shrink-0 text-sm font-semibold text-neutral-500">
          Tailwind CSS
        </span>
      </div>
      <div className="mr-4 flex items-center space-x-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 shrink-0 stroke-1 text-neutral-500 md:size-10"
          >
            <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
            <path d="M20 12l-8 8l-4 -4" />
          </svg>
        </span>
        <span className="shrink-0 text-sm font-semibold text-neutral-500">
          Framer Motion
        </span>
      </div>
    </div>
  );
};
