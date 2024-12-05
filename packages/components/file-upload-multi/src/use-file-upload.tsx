import { useControlledState2, useIsDisabled } from "@jamsr-ui/hooks";
import { FileAddIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import type { PropGetter, SlotsToClasses, UIProps } from "@jamsr-ui/utils";
import { cn, dataAttr, deepMergeProps, randomId } from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback, useRef } from "react";
import {
  useDropzone,
  type DropzoneOptions,
  type FileError,
} from "react-dropzone";
import {
  multiUploadVariant,
  type MultiUploadSlots,
  type MultiUploadVariants,
} from "./style";

export type FileUploadProgress = "PENDING" | "COMPLETE" | "ERROR" | number;
export type FileUploadMultiState = {
  file: null | File;
  preview: string | null;
  id: string;
  progress: FileUploadProgress;
};

type Props = MultiUploadVariants & {
  label?: string;
  defaultValue?: FileUploadMultiState[];
  value?: FileUploadMultiState[];
  onValueChange?: (value: FileUploadMultiState[]) => void;
  onFilesSelect?: (file: File[]) => void | Promise<void>;
  onUploadSuccess?: (_: { id: string; response: any }) => void;
  className?: string;
  classNames?: SlotsToClasses<MultiUploadSlots>;
  isDisabled?: boolean;
  onError?: (error: FileError) => void;
  onDelete?: (id: string) => void;
  showDeleteBtn?: boolean;
  dropzoneOptions?: DropzoneOptions;
  isInvalid?: boolean;
  helperText?: React.ReactNode;
  uploadIcon?: React.ReactNode;
  info?: React.ReactNode;
  uploadApiUrl: string;
  getFileUrlAfterUpload: (response: any) => string;
  inputName: string;
};

export type UseFileUploadMultiProps = Props & UIProps<"div", keyof Props>;
export const useFileUploadMulti = ($props: UseFileUploadMultiProps) => {
  const { fileUploadMulti: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    defaultValue,
    value: $value,
    className,
    classNames = {},
    isDisabled: propIsDisabled = false,
    onFilesSelect,
    onValueChange,
    onError,
    showDeleteBtn = true,
    dropzoneOptions = {},
    onDelete,
    isInvalid,
    helperText,
    info,
    uploadIcon = <FileAddIcon className="shrink-0 text-inherit" />,
    as,
    inputName,
    uploadApiUrl,
    onUploadSuccess,
    getFileUrlAfterUpload,
    label,
    ...restProps
  } = props;

  const [value, setValue] = useControlledState2(
    defaultValue ?? [],
    $value,
    onValueChange,
  );
  const { isDisabled, ref: inputRef } = useIsDisabled<HTMLInputElement>({
    isDisabled: propIsDisabled,
  });

  const xhrRefs = useRef<{ id: string; xhr: XMLHttpRequest }[]>([]);

  const Component = as ?? "div";
  const { maxFiles = 5 } = dropzoneOptions;
  const canUploadFile = value.length < maxFiles;

  const updateState = useCallback(
    (id: string, state: Partial<FileUploadMultiState>) => {
      setValue((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              ...state,
            };
          }
          return item;
        });
      });
    },
    [setValue],
  );

  const uploadFile = useCallback(
    (id: string, file: File) => {
      const formData = new FormData();
      formData.append(inputName, file);

      const xhr = new XMLHttpRequest();
      xhrRefs.current.push({ id, xhr });
      xhr.open("POST", uploadApiUrl);
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          updateState(id, { progress });
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const response = JSON.parse(xhr.responseText);
          const fileUrl = getFileUrlAfterUpload(response);
          const successItem = value.find((item) => item.id === id);
          if (successItem?.preview) {
            URL.revokeObjectURL(successItem.preview);
          }
          updateState(id, {
            progress: "COMPLETE",
            file: null,
            preview: fileUrl,
          });
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          onUploadSuccess?.({ id, response });
        } else {
          updateState(id, { progress: "ERROR" });
          onError?.({
            message: "Invalid response received",
            code: "INVALID_RESPONSE",
          });
        }
      };
      xhr.onerror = () => {
        updateState(id, { progress: "ERROR" });
        onError?.({ message: "Upload failed", code: "UPLOAD_FAILED" });
      };
      xhr.send(formData);
    },
    [
      getFileUrlAfterUpload,
      inputName,
      onError,
      onUploadSuccess,
      updateState,
      uploadApiUrl,
      value,
    ],
  );
  const retryUpload = (id: string) => {
    const item = value.find((item) => item.id === id);
    if (item?.file) {
      uploadFile(id, item.file);
    }
  };
  const cancelUpload = (id: string) => {
    const xhr = xhrRefs.current.find((item) => item.id === id)?.xhr;
    xhr?.abort();
    xhrRefs.current = xhrRefs.current.filter((item) => item.id !== id);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const files = acceptedFiles;
      const remainingFiles = maxFiles - value.length;
      if (maxFiles && files.length > remainingFiles) {
        const message = `You can only upload ${maxFiles} files. Remaining ${remainingFiles}`;
        onError?.({ message, code: "MAXIMUM_LIMIT_REACHED" });
        return;
      }
      const selectedFiles = files.map<FileUploadMultiState>((file) => {
        const objectUrl = URL.createObjectURL(file);
        return {
          preview: objectUrl,
          file,
          id: randomId(),
          progress: "PENDING",
        };
      });
      setValue((prev) => [...prev, ...selectedFiles]);
      selectedFiles.forEach((file) => {
        if (file.file) uploadFile(file.id, file.file);
      });
      void onFilesSelect?.(files);
    },
    [maxFiles, onError, onFilesSelect, setValue, uploadFile, value],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles,
    multiple: true,
    disabled: isDisabled,
    onDrop,
    onDropRejected(fileRejections) {
      fileRejections.forEach((item) => {
        const { errors } = item;
        const error = errors[0];
        if (error) {
          onError?.(error);
        }
      });
    },
    ...dropzoneOptions,
  });

  const styles = multiUploadVariant({
    isDisabled,
    isDragActive,
    isInvalid,
    className,
  });

  const overlayWrapperClassName = styles.overlayWrapper({
    className: classNames.overlayWrapper,
  });
  const overlayClassName = styles.overlay({
    className: classNames.overlay,
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    onDelete?.(id);
    cancelUpload(id);
    e.stopPropagation();
    setValue((value) => value.filter((item) => item.id !== id));
  };

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-component": "file-upload",
        "data-slot": "base",
        "data-drag-active": dataAttr(isDragActive),
        "data-disabled": dataAttr(isDisabled),
        ...props,
        className: styles.base({
          className: cn(classNames?.base, className),
        }),
        ...restProps,
      };
    },
    [className, classNames?.base, isDisabled, isDragActive, styles, restProps],
  );

  const getLabelProps: PropGetter<ComponentProps<"label">> = (props) => {
    return {
      "data-slot": "label",
      className: styles.label({ className: classNames?.label }),
      ...props,
    };
  };

  const getFileViewProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "file-view",
        className: styles.fileView({
          className: cn(classNames?.fileView, props?.className),
        }),
        ...props,
      };
    },
    [classNames?.fileView, styles],
  );

  const getFileProps: PropGetter<ComponentProps<"img">> = useCallback(
    (props) => {
      return {
        "data-slot": "file",
        className: styles.file({
          className: cn(classNames?.file, props?.className),
        }),
        ...props,
      };
    },
    [classNames?.file, styles],
  );

  const getDeleteBtnProps: PropGetter<ComponentProps<"button">> = useCallback(
    (props) => {
      return {
        "data-slot": "delete-btn",
        "aria-label": "delete",
        type: "button" as const,
        disabled: isDisabled,
        className: styles.deleteBtn({
          className: cn(classNames?.deleteBtn, props?.className),
        }),
        ...props,
      };
    },
    [classNames?.deleteBtn, isDisabled, styles],
  );

  const getPickerProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "picker",
        className: styles.picker({
          className: cn(classNames?.picker, props?.className),
        }),
        ...props,
      };
    },
    [classNames?.picker, styles],
  );

  const getHelperTextProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "helper-text",
        className: styles.helperText({
          className: cn(classNames?.helperText, props?.className),
        }),
        ...props,
      };
    },
    [classNames?.helperText, styles],
  );

  const getInnerWrapperProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "inner-wrapper",
        className: styles.innerWrapper({
          className: cn(classNames?.innerWrapper, props?.className),
        }),
        ...props,
      };
    },
    [classNames?.innerWrapper, styles],
  );

  const getInfoProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-slot": "info",
        className: styles.info({
          className: cn(classNames?.info, props?.className),
        }),
        ...props,
      };
    },
    [classNames?.info, styles],
  );

  return {
    Component,
    getRootProps,
    getInputProps,
    getBaseProps,
    getFileViewProps,
    getFileProps,
    getDeleteBtnProps,
    getPickerProps,
    handleDelete,
    value,
    setValue,
    showDeleteBtn,
    isDisabled,
    canUploadFile,
    helperText,
    getHelperTextProps,
    getInnerWrapperProps,
    info,
    getInfoProps,
    uploadIcon,
    retryUpload,
    overlayWrapperClassName,
    overlayClassName,
    label,
    getLabelProps,
    inputRef,
  };
};
