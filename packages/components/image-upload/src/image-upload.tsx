import { CircularProgress } from "@jamsr-ui/progress";
import { Close, ImageUpload as ImageUploadIcon } from "@jamsr-ui/shared-icons";
import type { SlotsToClasses } from "@jamsr-ui/utils";
import { cn, dataAttr } from "@jamsr-ui/utils";
import { useEffect, useState } from "react";
import type { DropzoneOptions } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import type { UploadSlots } from "./style";
import { uploadVariants } from "./style";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export type ImageUploadProps = {
  value: string;
  onValueChange: (value: string) => void;
  onFileSelect: (file: File) => void | Promise<void>;
  className?: string;
  classNames?: SlotsToClasses<UploadSlots>;
  isAvatar?: boolean;
  isDisabled?: boolean;
  onError?: (error: string) => void;
  showDeleteBtn?: boolean;
  progress?: number;
  description?: React.ReactNode;
  info?: React.ReactNode;
  dropzoneOptions?: DropzoneOptions;
};

export const ImageUpload = (props: ImageUploadProps) => {
  const {
    value,
    isAvatar = false,
    className,
    classNames,
    isDisabled = false,
    onFileSelect,
    onValueChange,
    onError,
    showDeleteBtn = true,
    progress,
    dropzoneOptions,
    description = "Choose a file or drag & drop it here",
    info = "JPEG, PNG, and WEBP formats, up to 5MB",
  } = props;
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (value && preview) {
      setPreview("");
      URL.revokeObjectURL(preview);
    }
  }, [preview, value]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
    multiple: false,
    accept: {
      "image/*": [".jpeg", ".png", ".webp"],
    },
    disabled: isDisabled,
    onDrop: (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      const objectUrl = URL.createObjectURL(file);
      onValueChange("");
      setPreview(objectUrl);
      void onFileSelect(file);
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

  const imageUrl = preview.length > 0 ? preview : value;

  const styles = uploadVariants({
    isDisabled,
    isAvatar,
    isDragActive,
  });
  const baseStyles = styles.base({
    className: cn(classNames?.base, className),
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onValueChange("");
  };

  return (
    <div
      {...getRootProps()}
      data-slot="base"
      data-component="image-upload"
      data-drag-active={dataAttr(isDragActive)}
      data-disabled={dataAttr(isDisabled)}
      data-avatar={dataAttr(isAvatar)}
      className={baseStyles}
    >
      <input {...getInputProps()} />
      <ImageUploadIcon className="shrink-0 text-inherit" />
      {!isAvatar && (
        <>
          {description && (
            <p
              data-slot="info"
              className={styles.info({ className: classNames?.info })}
            >
              {description}
            </p>
          )}
          {info && (
            <p
              data-slot="info"
              className={styles.info({ className: classNames?.info })}
            >
              JPEG, PNG, and WEBP formats, up to 5MB
            </p>
          )}
        </>
      )}
      {imageUrl && (
        <img
          data-slot="image"
          className={styles.image({ className: classNames?.image })}
          src={imageUrl}
          alt=""
        />
      )}
      {showDeleteBtn && imageUrl && !isDisabled && (
        <button
          type="button"
          data-slot="delete-btn"
          aria-label="Delete"
          onClick={handleDelete}
          className={styles.deleteBtn({ className: classNames?.deleteBtn })}
        >
          <Close />
        </button>
      )}
      {!!progress && (
        <div
          data-slot="overlay"
          className={styles.overlay({ className: classNames?.overlay })}
        >
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
