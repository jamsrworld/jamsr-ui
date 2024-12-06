import { FloatingFocusManager, FloatingList } from "@floating-ui/react";
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
          <FloatingFocusManager
            context={context}
            initialFocus={-1}
            visuallyHiddenDismiss
          >
            <div {...getPopoverProps()}>
              <FloatingList elementsRef={elementsRef}>
                <div {...getContentProps()}>
                  {childrenToRender.length ? (
                    childrenToRender
                  ) : (
                    <li {...getEmptyContentProps()}>No items found</li>
                  )}
                </div>
              </FloatingList>
            </div>
          </FloatingFocusManager>
        )}
      </AutocompleteProvider>
    </div>
  );
};
