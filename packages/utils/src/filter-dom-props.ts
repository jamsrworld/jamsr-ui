import { DOMPropNames, DOMEventNames } from "./dom-props";

interface DOMProps {
  /**
   * The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).
   */
  id?: string;
}

interface AriaLabelingProps {
  /**
   * Defines a string value that labels the current element.
   */
  "aria-label"?: string;

  /**
   * Identifies the element (or elements) that labels the current element.
   */
  "aria-labelledby"?: string;

  /**
   * Identifies the element (or elements) that describes the object.
   */
  "aria-describedby"?: string;

  /**
   * Identifies the element (or elements) that provide a detailed, extended description for the object.
   */
  "aria-details"?: string;
}

interface Options {
  /**
   * If the filter should be enabled.
   */
  enabled?: boolean;
  /**
   * If labelling associated aria properties should be included in the filter.
   */
  labelable?: boolean;
  /**
   * A Set of other property names that should be included in the filter.
   */
  propNames?: Set<string>;
  /**
   * A Set of other property names that should be removed from the filter.
   */
  omitPropNames?: Set<string>;
  /**
   * A Set of event names that should be excluded from the filter.
   */
  omitEventNames?: Set<string>;
  /**
   * Whether to omit data-* props.
   */
  omitDataProps?: boolean;
  /**
   * Whether to omit event props.
   */
  omitEventProps?: boolean;
}

const propRe = /^(data-.*)$/;
const ariaRe = /^(aria-.*)$/;
const funcRe = /^(on[A-Z].*)$/;

/**
 * Filters out all props that aren't valid DOM props or defined via override prop obj.
 * @param props - The component props to be filtered.
 * @param opts - Props to override.
 */
export function filterDOMProps(
  props: DOMProps & AriaLabelingProps,
  opts: Options = {},
): DOMProps & AriaLabelingProps {
  let {
    labelable = true,
    enabled = true,
    propNames,
    omitPropNames,
    omitEventNames,
    omitDataProps,
    omitEventProps,
  } = opts;
  let filteredProps = {};

  if (!enabled) {
    return props;
  }
  for (const prop in props) {
    if (omitPropNames?.has(prop)) {
      continue;
    }

    if (omitEventNames?.has(prop) && funcRe.test(prop)) {
      continue;
    }

    if (funcRe.test(prop) && !DOMEventNames.has(prop)) {
      continue;
    }

    if (omitDataProps && propRe.test(prop)) {
      continue;
    }

    if (omitEventProps && funcRe.test(prop)) {
      continue;
    }

    if (
      (Object.prototype.hasOwnProperty.call(props, prop) &&
        (DOMPropNames.has(prop) ||
          (labelable && ariaRe.test(prop)) ||
          propNames?.has(prop) ||
          propRe.test(prop))) ||
      funcRe.test(prop)
    ) {
      // @ts-ignore
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
}
