import { CircularProgress } from "@jamsr-ui/circular-progress";
import { useMergeRefs } from "@jamsr-ui/hooks";
import { CloseFilledIcon, RefreshIcon } from "@jamsr-ui/shared-icons";
import React, { useId } from "react";
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
    getLabelProps,
    label,
    inputRef,
  } = useFileUploadSingle(props);
  const htmlForId = useId();
  const inputProps = getInputProps();
  const mergedInputRefs = useMergeRefs([
    inputRef,
    "ref" in inputProps
      ? (inputProps?.ref as React.RefObject<HTMLInputElement>)
      : undefined,
  ]);
  return (
    <Component {...getBaseProps()}>
      <label {...getLabelProps()} htmlFor={htmlForId}>
        {label}
      </label>
      <div {...getPickerProps()} {...getRootProps()}>
        <input id={htmlForId} {...inputProps} ref={mergedInputRefs} />
        {isEmpty && uploadIcon}
        {!isAvatar && isEmpty && (
          <>
            {description && <p {...getDescriptionProps()}>{description}</p>}
            {info && <p {...getInfoProps()}>{info}</p>}
          </>
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
        {previewUrl && (
          <div {...getFileWrapperProps()}>
            <img alt="" {...getImageProps()} />
          </div>
        )}
        {showDeleteBtn && !isDisabled && !isEmpty && (
          <button {...getDeleteBtnProps()} type="button">
            <CloseFilledIcon className="size-4" />
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
            <button title="Delete" type="button" onClick={onRetry}>
              <RefreshIcon />
            </button>
          </div>
        )}
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </Component>
  );
};
