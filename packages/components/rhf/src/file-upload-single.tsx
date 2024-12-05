import {
  FileUploadSingle,
  type FileUploadSingleProps,
} from "@jamsr-ui/file-upload-single";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> &
  Partial<FileUploadSingleProps> &
  Pick<
    FileUploadSingleProps,
    "uploadApiUrl" | "inputName" | "getFileUrlAfterUpload"
  > & {
    defaultStateValue: any;
    getValueFromResponse: (response: any) => unknown;
  };

export const RHFFileUploadSingle = <T extends FieldValues>(props: Props<T>) => {
  const {
    name,
    uploadApiUrl,
    inputName,
    getFileUrlAfterUpload,
    defaultStateValue,
    getValueFromResponse,
    isAvatar,
    ...restProps
  } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        const onValueChange = (url: string | null) => {
          if (!url) onChange(defaultStateValue);
        };
        const onUploadSuccess = (response: unknown) => {
          const value = getValueFromResponse(response);
          onChange(value);
        };
        return (
          <FileUploadSingle
            value={getFileUrlAfterUpload(value)}
            onValueChange={onValueChange}
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
            classNames={{
              picker: isAvatar ? "" : "aspect-video h-40",
              ...restProps.classNames,
            }}
          />
        );
      }}
    />
  );
};
