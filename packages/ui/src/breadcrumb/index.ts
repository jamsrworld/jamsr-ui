import type { VariantProps } from "tailwind-variants";
import { breadcrumbStyles } from "./styles";
import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "./breadcrumb";

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
});

export namespace Breadcrumb {
  export type Variants = VariantProps<typeof breadcrumbStyles>;
  export interface Props extends BreadcrumbRoot.Props {}
}
