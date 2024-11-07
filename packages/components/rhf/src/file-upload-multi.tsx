import {
  FileUploadMulti,
  type FileUploadMultiProps,
  type FileUploadMultiState,
} from "@jamsr-ui/file-upload-multi";
import { useEffect, useRef, useState } from "react";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> &
  Partial<FileUploadMultiProps> &
  Pick<
    FileUploadMultiProps,
    "uploadApiUrl" | "inputName" | "getFileUrlAfterUpload"
  >;

export const RHFFileUploadMulti = <T extends FieldValues>(props: Props<T>) => {
  const { name, uploadApiUrl, inputName, getFileUrlAfterUpload, ...restProps } =
    props;
  const { control, setValue } = useFormContext<T>();
  const uploadsRef = useRef<{ id: string; response: Record<string, string> }[]>(
    [],
  );
  const [stateValue, setStateValue] = useState<FileUploadMultiState[]>([]);

  useEffect(() => {
    const finalValue = uploadsRef.current
      .filter(
        (item) => stateValue.findIndex((value) => value.id === item.id) >= 0,
      )
      .map((item) => item.response);
    // @ts-expect-error typeError
    setValue(name, finalValue);
  }, [stateValue, name, setValue]);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur }, fieldState: { error } }) => {
        const onUploadSuccess = (data: {
          id: string;
          response: Record<string, string>;
        }) => {
          uploadsRef.current.push(data);
        };
        return (
          <FileUploadMulti
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
            className="aspect-video h-40"
            {...restProps}
          />
        );
      }}
    />
  );
};
