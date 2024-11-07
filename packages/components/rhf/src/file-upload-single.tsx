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
    defaultRHFValue: unknown;
  };

export const RHFFileUploadSingle = <T extends FieldValues>(props: Props<T>) => {
  const {
    name,
    uploadApiUrl,
    inputName,
    getFileUrlAfterUpload,
    defaultRHFValue,
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
          if (!url) onChange(defaultRHFValue);
        };
        return (
          <FileUploadSingle
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            value={value.url}
            onValueChange={onValueChange}
            onUploadSuccess={onChange}
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
