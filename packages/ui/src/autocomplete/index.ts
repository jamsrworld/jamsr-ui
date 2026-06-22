import {
  AutocompleteClear,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteIcon,
  AutocompleteInput,
  AutocompleteInputGroup,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteRoot,
  AutocompleteSeparator,
  AutocompleteStatus,
  AutocompleteTrigger,
  AutocompleteValue,
} from "./autocomplete";

import type { VariantProps } from "tailwind-variants";

import type { autocompleteStyles } from "./styles";

export const Autocomplete = Object.assign(AutocompleteRoot, {
  Input: AutocompleteInput,
  InputGroup: AutocompleteInputGroup,
  Trigger: AutocompleteTrigger,
  Clear: AutocompleteClear,
  Content: AutocompleteContent,
  List: AutocompleteList,
  Item: AutocompleteItem,
  Empty: AutocompleteEmpty,
  Group: AutocompleteGroup,
  GroupLabel: AutocompleteGroupLabel,
  Separator: AutocompleteSeparator,
  Value: AutocompleteValue,
  Icon: AutocompleteIcon,
  Status: AutocompleteStatus,
});

export namespace Autocomplete {
  export interface Props extends React.ComponentProps<
    typeof AutocompleteRoot
  > {}
  export type Variants = VariantProps<typeof autocompleteStyles>;
}
