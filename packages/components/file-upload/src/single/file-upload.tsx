import { CircularProgress } from "@jamsr-ui/progress";
import { formatFileSize } from "../utils";
import {
  useSingleFileUpload,
  type UseSingleFileUploadProps,
} from "./use-file-upload";

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
            {description && <p {...getInfoProps()}>{info}</p>}
          </>
        )}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        {previewUrl && isImage && <img {...getImageProps()} />}
        {!isImage && (
          <div {...getFileWrapperProps()}>
            {fileIcon}
            {fileName && <p {...getFileNameProps()}>{fileName}</p>}
            {fileSize && (
              <p {...getFileSizeProps()}>{formatFileSize(fileSize)}</p>
            )}
          </div>
        )}
        {showDeleteBtn && !isDisabled && isEmpty && (
          <button {...getDeleteBtnProps()} type="button" />
        )}
        {!!progress && (
          <div {...getProgressOverlayProps()}>
            <CircularProgress />
          </div>
        )}
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </Component>
  );
};
