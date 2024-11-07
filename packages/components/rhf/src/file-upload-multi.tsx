import {
  FileUploadMulti,
  type FileUploadMultiProps,
} from "@jamsr-ui/file-upload-multi";
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
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        return (
          <FileUploadMulti
            value={value}
            onValueChange={onChange}
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
