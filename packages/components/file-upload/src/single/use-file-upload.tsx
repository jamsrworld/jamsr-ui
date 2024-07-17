import { ImageUpload as FileUploadIcon } from "@jamsr-ui/shared-icons";
import {
  cn,
  dataAttr,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback, useState } from "react";
import type { DropzoneOptions, FileError } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { getFileExtension, getFileIconFromUrl, isImageExt } from "../utils";
import {
  singleUploadVariants,
  type UploadSlots,
  type UploadVariants,
} from "./style";

type Props = Omit<UploadVariants, "isDragActive"> & {
  value: string;
  onValueChange: (value: string) => void;
  onFileSelect: (file: File) => (void | string) | Promise<void | string>;
  className?: string;
  classNames?: SlotsToClasses<UploadSlots>;
  onError?: (error: FileError) => void;
  onDelete?: () => void;
  showDeleteBtn?: boolean;
  progress?: number;
  description?: React.ReactNode;
  info?: React.ReactNode;
  dropzoneOptions?: DropzoneOptions;
  fileSize?: number;
  fileName?: string;
  helperText?: React.ReactNode;
  uploadIcon?: React.ReactNode;
  getFileIcon?: (ext: string) => React.ReactNode;
};

export type UseSingleFileUploadProps = Props & UIProps<"div", keyof Props>;

export const useSingleFileUpload = (props: UseSingleFileUploadProps) => {
  const {
    value,
    onValueChange,
    onFileSelect,
    className,
    classNames,
    onError,
    onDelete,
    showDeleteBtn = true,
    progress,
    description = "Choose a file or drag & drop it here",
    info,
    dropzoneOptions,
    fileSize,
    fileName,
    helperText,
    uploadIcon = <FileUploadIcon className="shrink-0 text-inherit" />,
    isAvatar,
    isDisabled,
    isInvalid,
    getFileIcon,
    as,
    ...restProps
  } = props;

  const [preview, setPreview] = useState("");
  const isImage = isImageExt(value);
  const Component = as ?? "div";
  const isEmpty = value.length === 0;

  const fileIcon = getFileIcon
    ? getFileIcon?.(getFileExtension(value))
    : getFileIconFromUrl(value);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    multiple: false,
    disabled: isDisabled,
    onDrop: (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      const isFile = file.type.startsWith("file/");
      if (isFile) {
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
      }
      onValueChange("");
      void onFileSelect(file);
    },
    onDropRejected(fileRejections) {
      fileRejections.forEach((item) => {
        const { errors } = item;
        const error = errors[0];
        if (error) onError?.(error);
      });
    },
    ...dropzoneOptions,
  });
  const previewUrl = preview.length > 0 ? preview : value;

  const styles = singleUploadVariants({
    isDisabled,
    isAvatar,
    isDragActive,
    isInvalid,
  });

  const handleDeleteFile = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onDelete?.();
      onValueChange("");
    },
    [onDelete, onValueChange],
  );

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-component": "file-upload",
        "data-slot": "base",
        "data-drag-active": dataAttr(isDragActive),
        "data-disabled": dataAttr(isDisabled),
        ...props,
        ...restProps,
        className: styles.base({
          className: cn(classNames?.base, className),
        }),
      };
    },
    [className, classNames?.base, isDisabled, isDragActive, restProps, styles],
  );

  const getDeleteBtnProps: PropGetter<ComponentProps<"button">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "delete-btn",
        ...props,
        onClick: handleDeleteFile,
        className: styles.deleteBtn({
          className: classNames?.deleteBtn,
        }),
      };
    },
    [classNames?.deleteBtn, handleDeleteFile, styles],
  );

  const getPickerProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "picker",
        ...props,
        className: styles.picker({
          className: classNames?.picker,
        }),
      };
    },
    [classNames?.picker, styles],
  );

  const getProgressOverlayProps: PropGetter<ComponentProps<"div">> =
    useCallback(
      (props = {}) => {
        return {
          "data-slot": "progress-overlay",
          ...props,
          className: styles.progressOverlay({
            className: classNames?.progressOverlay,
          }),
        };
      },
      [classNames?.progressOverlay, styles],
    );

  const getHelperTextProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "helper-text",
        ...props,
        className: styles.helperText({
          className: classNames?.helperText,
        }),
      };
    },
    [classNames?.helperText, styles],
  );

  const getFileWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "file-wrapper",
        ...props,
        className: styles.fileWrapper({
          className: classNames?.fileWrapper,
        }),
      };
    },
    [classNames?.fileWrapper, styles],
  );

  const getInfoProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "info",
        ...props,
        className: styles.info({
          className: classNames?.info,
        }),
      };
    },
    [classNames?.info, styles],
  );

  const getDescriptionProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "description",
        ...props,
        className: styles.description({
          className: classNames?.description,
        }),
      };
    },
    [classNames?.description, styles],
  );

  const getImageProps: PropGetter<ComponentProps<"img">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "image",
        ...props,
        src: previewUrl,
        className: styles.image({
          className: classNames?.image,
        }),
      };
    },
    [classNames?.image, previewUrl, styles],
  );

  const getFileNameProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "file-name",
        ...props,
        className: styles.fileName({
          className: classNames?.fileName,
        }),
      };
    },
    [classNames?.fileName, styles],
  );

  const getFileSizeProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "file-size",
        ...props,
        className: styles.fileSize({
          className: classNames?.fileSize,
        }),
      };
    },
    [classNames?.fileSize, styles],
  );

  return {
    getBaseProps,
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
    helperText,
    isEmpty,
  };
};
