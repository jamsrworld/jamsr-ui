import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "./breadcrumb";

import type { VariantProps } from "tailwind-variants";

import type { breadcrumbStyles } from "./styles";

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
});

export namespace Breadcrumb {
  export type Variants = VariantProps<typeof breadcrumbStyles>;
  export interface Props extends BreadcrumbRoot.Props {}
}
