import { useMemo } from "react";
import { useKbd, type UseKbdProps } from "./use-kbd";
import { kbdKeysLabelMap, kbdKeysMap } from "./utils";

export type KbdProps = UseKbdProps;

export const Kbd = (props: KbdProps) => {
  const { Component, children, styles, classNames, keysToRender, getKbdProps } =
    useKbd(props);

  const keysContent = useMemo(() => {
    return keysToRender.map((key) => (
      <abbr
        key={key}
        className={styles.abbr({ class: classNames?.abbr })}
        title={kbdKeysLabelMap[key]}
      >
        {kbdKeysMap[key]}
      </abbr>
    ));
  }, [classNames?.abbr, keysToRender, styles]);

  return (
    <Component {...getKbdProps()}>
      {keysContent}
      {children && (
        <span className={styles.content({ class: classNames?.content })}>
          {children}
        </span>
      )}
    </Component>
  );
};
