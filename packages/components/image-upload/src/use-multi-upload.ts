import type { PropGetter, PropsOf, SlotsToClasses } from "@jamsr-ui/utils";
import { cn, dataAttr } from "@jamsr-ui/utils";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { useDropzone, type DropzoneOptions } from "react-dropzone";
import {
  multiUploadVariant,
  type MultiUploadSlots,
  type MultiUploadVariants,
} from "./style";

export type MultiUploadImgState = {
  file?: File;
  preview: string;
  id: string;
  progress: "PENDING" | "COMPLETE" | "ERROR" | number;
};

type Props = MultiUploadVariants & {
  value: MultiUploadImgState[];
  onValueChange: (value: MultiUploadImgState[]) => void;
  onFilesSelect: (file: MultiUploadImgState[]) => void | Promise<void>;
  className?: string;
  classNames?: SlotsToClasses<MultiUploadSlots>;
  isDisabled?: boolean;
  onError?: (error: string) => void;
  showDeleteBtn?: boolean;
  dropzoneOptions?: DropzoneOptions;
  onDelete?: (id: string) => void;
  maxFileSize?: number;
};

export type UseMultiUploadProps = Props & Omit<PropsOf<"div">, "onError">;
export const useMultiUpload = (props: UseMultiUploadProps) => {
  const {
    value,
    className,
    classNames,
    isDisabled = false,
    onFilesSelect,
    onValueChange,
    onError,
    showDeleteBtn = true,
    dropzoneOptions = {},
    onDelete,
    ...restProps
  } = props;
  const { maxFiles } = dropzoneOptions;
  const canUploadImage = maxFiles ? value.length < maxFiles : true;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles,
    multiple: true,
    accept: {
      "image/*": [".jpeg", ".png", ".webp"],
    },
    disabled: isDisabled,
    onDrop: (acceptedFiles: File[]) => {
      const files = acceptedFiles;
      if (maxFiles && value.length + files.length > maxFiles) {
        const message = `You can only upload ${maxFiles} files`;
        onError?.(message);
        return;
      }

      const selectedFiles = files.map<MultiUploadImgState>((file) => {
        const objectUrl = URL.createObjectURL(file);
        return {
          preview: objectUrl,
          file,
          id: Math.random().toString(36).slice(2),
          progress: "PENDING",
        };
      });

      onValueChange([...value, ...selectedFiles]);
      void onFilesSelect(selectedFiles);
    },
    onDropRejected(fileRejections) {
      fileRejections.forEach((item) => {
        const { errors } = item;
        const error = errors[0];
        if (error) {
          const { message } = error;
          onError?.(message);
        }
      });
    },
    ...dropzoneOptions,
  });

  const styles = multiUploadVariant({
    isDisabled,
    isDragActive,
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    onDelete?.(id);
    e.stopPropagation();
    onValueChange(value.filter((item) => item.id !== id));
  };

  const getBaseProps: PropGetter<ComponentProps<"div">> = useCallback(
    (props) => {
      return {
        "data-component": "image-upload",
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

  return {
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
    canUploadImage,
  };
};
