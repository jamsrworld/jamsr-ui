import { useControlledState } from "@jamsr-ui/hooks";
import { FileAddIcon } from "@jamsr-ui/shared-icons";
import {
  cn,
  dataAttr,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback, useMemo, useState } from "react";
import type { DropzoneOptions, FileError } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import {
  singleUploadVariants,
  type UploadSlots,
  type UploadVariants,
} from "./style";
import { getFileExtension, getFileIconFromUrl, isImageExt } from "./utils";

type Props = Omit<UploadVariants, "isDragActive"> & {
  defaultValue?: null | string;
  value?: null | string;
  onValueChange?: (value: null | string) => void;
  onFileSelect?: (file: File) => void;
  onUploadSuccess: (response: any) => void;
  className?: string;
  classNames?: SlotsToClasses<UploadSlots>;
  onError?: (error: FileError) => void;
  onDelete?: () => void;
  showDeleteBtn?: boolean;
  description?: React.ReactNode;
  info?: React.ReactNode;
  dropzoneOptions?: DropzoneOptions;
  fileSize?: number;
  fileName?: string;
  inputName: string;
  helperText?: React.ReactNode;
  uploadIcon?: React.ReactNode;
  getFileIcon?: (ext: string) => React.ReactNode;
  uploadApiUrl: string;
  getFileUrlAfterUpload: (response: any) => string;
};

export type UseSingleFileUploadProps = Props & UIProps<"div", keyof Props>;

export const useSingleFileUpload = (props: UseSingleFileUploadProps) => {
  const {
    value: $value,
    defaultValue,
    onValueChange,
    onFileSelect,
    className,
    classNames,
    onError,
    onDelete,
    showDeleteBtn = true,
    description = "Choose a file or drag & drop it here",
    info = "Select images",
    dropzoneOptions,
    fileSize,
    fileName,
    helperText,
    uploadIcon = <FileAddIcon className="shrink-0 text-inherit" />,
    isAvatar,
    isDisabled,
    isInvalid,
    getFileIcon,
    as,
    inputName,
    uploadApiUrl,
    onUploadSuccess,
    getFileUrlAfterUpload,
    ...restProps
  } = props;

  const [value = null, setValue] = useControlledState(
    defaultValue,
    $value,
    onValueChange,
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(value);
  const [progress, setProgress] = useState(0);

  const isImage = value && isImageExt(value);
  const Component = as ?? "div";
  const isEmpty = value ? value.length === 0 : true;

  const fileIcon = useMemo(() => {
    if (!value) return "";
    return getFileIcon
      ? getFileIcon?.(getFileExtension(value))
      : getFileIconFromUrl(value);
  }, [getFileIcon, value]);

  const uploadFile = useCallback(
    (file: File) => {
      const formData = new FormData();
      formData.append(inputName, file);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", uploadApiUrl);
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setProgress(progress);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const response = JSON.parse(xhr.responseText);
          setProgress(0);
          const fileUrl = getFileUrlAfterUpload(response);
          setValue(fileUrl);
          setPreviewUrl(fileUrl);
          onUploadSuccess(response);
        } else {
          onError?.({
            message: "Invalid response received",
            code: "INVALID_RESPONSE",
          });
        }
      };
      xhr.onerror = () => {
        onError?.({ message: "Upload failed", code: "UPLOAD_FAILED" });
      };
      xhr.send(formData);
    },
    [
      getFileUrlAfterUpload,
      inputName,
      onError,
      onUploadSuccess,
      setValue,
      uploadApiUrl,
    ],
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      uploadFile(file);
      onFileSelect?.(file);
    },
    [onFileSelect, previewUrl, uploadFile],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...dropzoneOptions,
    maxFiles: 1,
    multiple: false,
    disabled: isDisabled,
    onDrop,
    onDropRejected(fileRejections) {
      fileRejections.forEach((item) => {
        const { errors } = item;
        const error = errors[0];
        if (error) onError?.(error);
      });
    },
  });

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
      setValue(null);
    },
    [onDelete, setValue],
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
        src: previewUrl ?? undefined,
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
