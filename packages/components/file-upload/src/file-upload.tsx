import { CircularProgress } from "@jamsr-ui/progress";
import { TrashIcon } from "@jamsr-ui/shared-icons";
import {
  useSingleFileUpload,
  type UseSingleFileUploadProps,
} from "./use-file-upload";
import { formatFileSize } from "./utils";

export type SingleFileUploadProps = UseSingleFileUploadProps;

export const SingleFileUpload = (props: SingleFileUploadProps) => {
  const {
    getRootProps,
    getInputProps,
    getDeleteBtnProps,
    getPickerProps,
    getProgressOverlayProps,
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
  } = useSingleFileUpload(props);

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
          <div {...getProgressOverlayProps()}>
            <CircularProgress value={progress} />
          </div>
        )}
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </Component>
  );
};
