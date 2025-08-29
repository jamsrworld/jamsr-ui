/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  FileUploadMulti,
  type FileUploadMultiProps,
  type FileUploadMultiState,
} from "@jamsr-ui/file-upload-multi";
import { randomId } from "@jamsr-ui/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Controller,
  useFormContext,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> &
  Partial<FileUploadMultiProps> &
  Pick<
    FileUploadMultiProps,
    "uploadApiUrl" | "inputName" | "getFileUrlAfterUpload"
  > & {
    getValueFromResponse: (response: any) => any;
  };

export const RenderController = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>(
  props: Props<TFieldValues> & {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
  },
) => {
  const {
    field: { onChange, onBlur, value: $value },
    fieldState: { error },
    uploadApiUrl,
    inputName,
    getFileUrlAfterUpload,
    getValueFromResponse,
    ...restProps
  } = props;
  const value = useMemo(() => (Array.isArray($value) ? $value : []), [$value]);
  const uploadsDefault = value.map((item) => ({
    id: randomId(),
    response: item,
  }));
  const defaultState: FileUploadMultiState[] = uploadsDefault.map((item) => ({
    file: null,
    id: item.id,
    preview: getFileUrlAfterUpload(item.response),
    progress: "COMPLETE",
  }));
  const uploadsRef =
    useRef<{ id: string; response: Record<string, string> }[]>(uploadsDefault);
  const [stateValue, setStateValue] =
    useState<FileUploadMultiState[]>(defaultState);

  useEffect(() => {
    const finalValue = stateValue
      .map((item) => {
        const upload = uploadsRef.current.find((upload) => {
          return upload.id === item.id;
        });
        return upload?.response;
      })
      .filter(Boolean);
    onChange(finalValue);
  }, [stateValue, onChange]);

  const onUploadSuccess = (data: {
    id: string;
    response: Record<string, string>;
  }) => {
    const schema = getValueFromResponse(data.response);
    uploadsRef.current.push({
      id: data.id,
      response: schema,
    });
  };

  useEffect(() => {
    setStateValue(defaultState);
  }, [defaultState]);

  return (
    <FileUploadMulti
      isFormControl
      value={stateValue}
      onValueChange={setStateValue}
      onUploadSuccess={onUploadSuccess}
      onBlur={onBlur}
      showDeleteBtn
      isInvalid={!!error}
      helperText={error?.message}
      data-invalid={!!error}
      uploadApiUrl={uploadApiUrl}
      inputName={inputName}
      getFileUrlAfterUpload={getFileUrlAfterUpload}
      {...restProps}
    />
  );
};

export const RHFFileUploadMulti = <T extends FieldValues>(props: Props<T>) => {
  const { name } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <RenderController field={field} fieldState={fieldState} {...props} />
        );
      }}
    />
  );
};
