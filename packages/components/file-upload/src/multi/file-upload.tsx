import { Close } from "@jamsr-ui/shared-icons";
import type { UseMultiFileUploadProps } from "./use-file-upload";
import { useMultiFileUpload } from "./use-file-upload";

export type MultiFileUploadProps = UseMultiFileUploadProps;

export const MultiFileUpload = (props: MultiFileUploadProps) => {
  const {
    getRootProps,
    getInputProps,
    getBaseProps,
    getFileViewProps,
    getFileProps,
    getDeleteBtnProps,
    getPickerProps,
    handleDelete,
    value,
    showDeleteBtn,
    isDisabled,
    canUploadFile,
    helperText,
    getHelperTextProps,
    info,
    getInnerWrapperProps,
    getInfoProps,
    uploadIcon,
  } = useMultiFileUpload(props);

  return (
    <div {...getBaseProps()}>
      <div {...getInnerWrapperProps()}>
        {value.map((item) => (
          <div key={item.id} {...getFileViewProps()}>
            <img src={item.preview} alt="" {...getFileProps()} />
            {showDeleteBtn && !isDisabled && (
              <button
                type="button"
                onClick={(e) => handleDelete(e, item.id)}
                {...getDeleteBtnProps()}
              >
                <Close className="size-4" />
              </button>
            )}
          </div>
        ))}
        {canUploadFile && (
          <div {...getRootProps()} {...getPickerProps()}>
            <input {...getInputProps()} />
            {uploadIcon}
            {info && <div {...getInfoProps()}>{info}</div>}
          </div>
        )}
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </div>
  );
};
