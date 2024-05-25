import { m, type Variants } from "framer-motion";

type Props = {
  isChecked: boolean;
  indeterminate?: boolean;
};

const tickVariants: Variants = {
  pressed: {
    pathLength: 0.5,
  },
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const CheckboxCheckIcon = (props: Props) => {
  const { isChecked } = props;
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
      <m.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3.5"
        stroke="currentColor"
        className="size-3.5"
        initial={false}
        animate={isChecked ? "checked" : "unchecked"}
      >
        <m.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
          variants={tickVariants}
        />
      </m.svg>
    </div>
  );
};
