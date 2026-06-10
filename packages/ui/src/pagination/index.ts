import {
  Pagination as PaginationRoot,
  PaginationEllipsis,
  PaginationItem,
} from "./pagination";

import type { VariantProps } from "tailwind-variants";

import type { paginationStyles } from "./styles";

export const Pagination = Object.assign(PaginationRoot, {
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
});

export namespace Pagination {
  export type Variants = VariantProps<typeof paginationStyles>;
  export interface Props extends PaginationRoot.Props {}
  export interface Item extends PaginationItem.Props {}
  export interface Ellipsis extends PaginationEllipsis.Props {}
}
