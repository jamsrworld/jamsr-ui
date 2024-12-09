import { Chip } from "@jamsr-ui/chip";
import { useControlledState } from "@jamsr-ui/hooks";
import { Input, type InputProps } from "@jamsr-ui/input";
import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps } from "@jamsr-ui/utils";
import { useCallback, useMemo, useState } from "react";

type Props = {
  value?: string[];
  onValueChange?: (value: string[]) => void;
  defaultValue?: string[];
  showClearButton?: boolean;
};

export type TagsInputProps = Omit<InputProps, keyof Props> & Props;

export const TagsInput = ($props: TagsInputProps) => {
  const { tagsInput:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const {
    onValueChange,
    defaultValue,
    value,
    classNames,
    isClearable,
    ...restProps
  } = props;
  const delimiters = ["Enter", ","];

  const [values = [], setValues] = useControlledState(
    defaultValue ?? [],
    value,
    onValueChange,
  );

  const getValueSetFromInput = (inputValue: string) => {
    return new Set(
      inputValue
        .split(",")
        .filter((value) => value !== "")
        .map((value) => value.trim()),
    );
  };

  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (delimiters.includes(e.key)) {
      const { value } = e.target as HTMLInputElement;
      e.preventDefault();
      setValues((prev) => [
        ...new Set([...prev, ...getValueSetFromInput(value)]),
      ]);
      setInputValue("");
    }
  };

  const handleOnDelete = useCallback(
    (item: string) => {
      setValues((prev) => [
        ...new Set([...prev].filter((value) => value !== item)),
      ]);
    },
    [setValues],
  );

  const handleOnClear = useCallback(() => {
    setValues([]);
  }, [setValues]);

  const renderTags = useMemo(() => {
    return [...values].map((value) => (
      <Chip onDelete={() => handleOnDelete(value)} key={value}>
        {value}
      </Chip>
    ));
  }, [handleOnDelete, values]);

  const handleOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      setValues((prev) => [
        ...new Set([
          ...prev,
          ...getValueSetFromInput(e.clipboardData?.getData("text") ?? ""),
        ]),
      ]);
    },
    [setValues],
  );

  return (
    <Input
      {...restProps}
      value={inputValue}
      onValueChange={setInputValue}
      onKeyDown={handleKeyDown}
      classNames={{
        contentWrapper: "p-1 flex flex-wrap gap-1",
        ...classNames,
      }}
      onPaste={handleOnPaste}
      onClearInput={handleOnClear}
      showClearButton={values.length > 0 && isClearable}
    >
      {renderTags}
    </Input>
  );
};
