import { useControlledState, useIsDisabled } from "@jamsr-ui/hooks";
import { FileAddIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  dataAttr,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { DropzoneOptions, FileError } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import {
  singleUploadVariants,
  type UploadSlots,
  type UploadVariants,
} from "./styles";
import { getFileExtension, getFileIconFromUrl, isImageExt } from "./utils";

type Props = {
  defaultValue?: null | string;
  value?: null | string;
  onValueChange?: (value: null | string) => void;
  onFileSelect?: (file: File) => void;
  onUploadSuccess?: (response: any) => void;
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
  getFileIcon?: (ext: string | null) => React.ReactNode;
  uploadApiUrl: string;
  getFileUrlAfterUpload: (response: any) => string;
  label?: string;
  isFormControl?: boolean;
} & UploadVariants;

export type UseFileUploadSingleProps = UIProps<"div", Props>;

export const useFileUploadSingle = ($props: UseFileUploadSingleProps) => {
  const { fileUploadSingle: _globalProps = {}, globalConfig } = useUIStyle();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    singleUploadVariants.variantKeys,
  );
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
    fileSize: $fileSize,
    fileName: $fileName,
    helperText,
    uploadIcon = <FileAddIcon className="shrink-0 text-inherit" />,
    getFileIcon,
    as,
    inputName,
    uploadApiUrl,
    onUploadSuccess,
    getFileUrlAfterUpload,
    label,
    isFormControl = false,
    ...restProps
  } = props;
  const xhrRef = useRef<XMLHttpRequest | null>(null);
  const [value = null, setValue] = useControlledState(
    defaultValue,
    $value,
    onValueChange,
  );
  const { isDisabled: propIsDisabled = false } = variantProps;
  const { isDisabled, ref: inputRef } = useIsDisabled<HTMLInputElement>({
    isDisabled: propIsDisabled,
    isFormControl,
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(value);
  const [progress, setProgress] = useState(0);
  const [isFailed, setIsFailed] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const fileName = file ? file.name : $fileName;
  const fileSize = file ? file.size : $fileSize;
  const isImage = value && isImageExt(value);
  const Component = as ?? "div";
  const isEmpty = !previewUrl;

  const fileIcon = useMemo(() => {
    if (!value) return "";
    return getFileIcon
      ? getFileIcon?.(getFileExtension(value))
      : getFileIconFromUrl(value);
  }, [getFileIcon, value]);

  const revokePreviewUrl = useCallback(() => {
    if (previewUrl?.startsWith("blob:")) URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  useEffect(() => {
    if (value !== previewUrl) setPreviewUrl(value);
  }, [previewUrl, value]);

  const resetUpload = useCallback(() => {
    setValue(null);
    setPreviewUrl(null);
    setProgress(0);
    setFile(null);
    setIsFailed(false);
    revokePreviewUrl();
  }, [revokePreviewUrl, setValue]);

  const onSuccess = useCallback(
    (fileUrl: string) => {
      setProgress(0);
      setIsFailed(false);
      xhrRef.current = null;
      revokePreviewUrl();
      setValue(fileUrl);
      setPreviewUrl(fileUrl);
    },
    [revokePreviewUrl, setValue],
  );

  const onUploadFailed = useCallback(() => {
    setProgress(0);
    setIsFailed(true);
    onError?.({
      message: "Invalid response received",
      code: "INVALID_RESPONSE",
    });
  }, [onError]);

  const handleDeleteFile = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onDelete?.();
      resetUpload();
      if (xhrRef.current) xhrRef.current.abort();
    },
    [onDelete, resetUpload],
  );

  const uploadFile = useCallback(
    (file: File) => {
      const formData = new FormData();
      formData.append(inputName, file);

      const xhr = new XMLHttpRequest();
      xhrRef.current = xhr;

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
          const fileUrl = getFileUrlAfterUpload(response);
          onSuccess(fileUrl);
          onUploadSuccess?.(response);
        } else {
          onUploadFailed();
        }
      };
      xhr.onerror = () => {
        onUploadFailed();
      };
      xhr.onabort = () => {
        resetUpload();
      };
      xhr.send(formData);
    },
    [
      getFileUrlAfterUpload,
      inputName,
      onSuccess,
      onUploadFailed,
      onUploadSuccess,
      resetUpload,
      uploadApiUrl,
    ],
  );

  const onRetry = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (file) uploadFile(file);
      setIsFailed(false);
    },
    [file, uploadFile],
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      setFile(file);
      revokePreviewUrl();
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      uploadFile(file);
      onFileSelect?.(file);
    },
    [onFileSelect, revokePreviewUrl, uploadFile],
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
    ...variantProps,
    isDisabled,
    isDragActive,
  });

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

  const getLabelProps: PropGetter<ComponentProps<"label">> = (props) => {
    return {
      "data-slot": "label",
      className: styles.label({ className: classNames?.label }),
      ...props,
    };
  };

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

  const getOverlayProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "progress-overlay",
        ...props,
        className: styles.overlay({
          className: classNames?.overlay,
        }),
      };
    },
    [classNames?.overlay, styles],
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
    getLabelProps,
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
    isAvatar: variantProps.isAvatar,
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
    isFailed,
    onRetry,
    label,
    inputRef,
  };
};
