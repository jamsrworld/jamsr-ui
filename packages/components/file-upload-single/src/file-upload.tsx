import { CircularProgress } from "@jamsr-ui/progress";
import { RefreshIcon, TrashIcon } from "@jamsr-ui/shared-icons";
import {
  useFileUploadSingle,
  type UseFileUploadSingleProps,
} from "./use-file-upload";
import { formatFileSize } from "./utils";

export type FileUploadSingleProps = UseFileUploadSingleProps;

export const FileUploadSingle = (props: FileUploadSingleProps) => {
  const {
    getRootProps,
    getInputProps,
    getDeleteBtnProps,
    getPickerProps,
    getOverlayProps,
    getHelperTextProps,
    getFileWrapperProps,
    getInfoProps,
    getDescriptionProps,
    getImageProps,
    Component,
    uploadIcon,
    isAvatar,
    description,
    info,
    previewUrl,
    isImage,
    getFileNameProps,
    getFileSizeProps,
    fileName,
    fileSize,
    fileIcon,
    showDeleteBtn,
    isDisabled,
    progress,
    getBaseProps,
    helperText,
    isEmpty,
    isFailed,
    onRetry,
  } = useFileUploadSingle(props);

  return (
    <Component {...getBaseProps()}>
      <div {...getPickerProps()} {...getRootProps()}>
        <input {...getInputProps()} />
        {uploadIcon}
        {!isAvatar && (
          <>
            {description && <p {...getDescriptionProps()}>{description}</p>}
            {info && <p {...getInfoProps()}>{info}</p>}
          </>
        )}
        {previewUrl && isImage && (
          <div {...getFileWrapperProps()}>
            <img alt="" {...getImageProps()} />
          </div>
        )}
        {!isImage && !isEmpty && (
          <div {...getFileWrapperProps()}>
            {fileIcon}
            {fileName && <p {...getFileNameProps()}>{fileName}</p>}
            {fileSize && (
              <p {...getFileSizeProps()}>{formatFileSize(fileSize)}</p>
            )}
          </div>
        )}
        {showDeleteBtn && !isDisabled && !isEmpty && (
          <button {...getDeleteBtnProps()} type="button">
            <TrashIcon />
          </button>
        )}
        {!!progress && (
          <div {...getOverlayProps()}>
            <CircularProgress value={progress} />
          </div>
        )}
        {isFailed && (
          <div {...getOverlayProps()}>
            <span>failed</span>
            <button type="button" onClick={onRetry}>
              <RefreshIcon />
            </button>
          </div>
        )}
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </Component>
  );
};
