import { useEffect, useRef, useState } from "react";

type UseIsDisableProps = {
  isDisabled?: boolean;
};

export const useIsDisabled = <T extends HTMLElement>(
  props?: UseIsDisableProps,
) => {
  const { isDisabled: $isDisabled = false } = props ?? {};
  const ref = useRef<T>(null);
  const [isDisabled, setIsDisabled] = useState($isDisabled);

  useEffect(() => {
    const input = ref.current;
    if (!input || $isDisabled) return () => {};
    const fieldset = input.closest("fieldset");
    if (!fieldset) return () => {};
    const updateState = () => {
      const isDisabled = fieldset.disabled;
      setIsDisabled(isDisabled);
    };
    updateState();

    const observer = new MutationObserver(updateState);
    observer.observe(fieldset, {
      attributes: true,
      attributeFilter: ["disabled"],
    });
    return () => observer.disconnect();
  }, [$isDisabled]);
  return { ref, isDisabled };
};
