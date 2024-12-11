import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
} from "@floating-ui/react";
import { Input } from "@jamsr-ui/input";
import { useAutocomplete, type UseAutocompleteProps } from "./use-autocomplete";
import { AutocompleteProvider } from "./use-autocomplete-context";

export type AutocompleteProps = UseAutocompleteProps;

export const Autocomplete = (props: AutocompleteProps) => {
  const {
    context,
    elementsRef,
    isOpen,
    getBaseProps,
    getInputProps,
    getPopoverProps,
    getContentProps,
    contextValue,
    childrenToRender,
    getEmptyContentProps,
  } = useAutocomplete(props);

  return (
    <div {...getBaseProps()}>
      <Input {...getInputProps()} />
      <AutocompleteProvider value={contextValue}>
        {isOpen && (
          <FloatingPortal>
            <FloatingFocusManager
              context={context}
              initialFocus={-1}
              visuallyHiddenDismiss
              modal
              restoreFocus
            >
              <div {...getPopoverProps()}>
                <FloatingList elementsRef={elementsRef}>
                  <ul {...getContentProps()}>
                    {childrenToRender.length ? (
                      childrenToRender
                    ) : (
                      <li {...getEmptyContentProps()}>No items found</li>
                    )}
                  </ul>
                </FloatingList>
              </div>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </AutocompleteProvider>
    </div>
  );
};
