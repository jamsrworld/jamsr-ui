import { FloatingFocusManager, FloatingList } from "@floating-ui/react";
import { Input } from "@jamsr-ui/input";
import { useAutocomplete, type UseAutocompleteProps } from "./use-autocomplete";
import { AutocompleteProvider } from "./use-autocomplete-context";

export type AutocompleteProps = UseAutocompleteProps;

export const Autocomplete = (props: AutocompleteProps) => {
  const {
    context,
    elementsRef,
    labelsRef,
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
              <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                <div {...getContentProps()}>
                  {childrenToRender.length ? (
                    childrenToRender
                  ) : (
                    <div {...getEmptyContentProps()}>No items found</div>
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
