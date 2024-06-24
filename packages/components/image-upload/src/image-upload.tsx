import { CircularProgress } from "@jamsr-ui/progress";
import { Close, ImageUpload as ImageUploadIcon } from "@jamsr-ui/shared-icons";
import { SlotsToClasses, cn, dataAttr } from "@jamsr-ui/utils";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadSlots, uploadVariants } from "./style";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export type ImageUploadProps = {
  value: string;
  onValueChange: (value: string) => void;
  onFileSelect: (file: File) => void | Promise<void>;
  className?: string;
  classNames?: SlotsToClasses<UploadSlots>;
  isAvatar?: boolean;
  disabled?: boolean;
  onError?: (error: string) => void;
  showDeleteBtn?: boolean;
  progress?: number;
};

export const ImageUpload = (props: ImageUploadProps) => {
  const {
    value,
    isAvatar = false,
    className,
    classNames,
    disabled = false,
    onFileSelect,
    onValueChange,
    onError,
    showDeleteBtn = true,
    progress,
  } = props;
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (value && preview) {
      setPreview("");
      URL.revokeObjectURL(preview);
    }
  }, [value]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
    multiple: false,
    accept: {
      "image/*": [".jpeg", ".png", ".webp"],
    },
    disabled,
    onDrop: (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      const objectUrl = URL.createObjectURL(file);
      onValueChange("");
      setPreview(objectUrl);
      onFileSelect(file);
    },
    onDropRejected(fileRejections) {
      fileRejections.forEach((item) => {
        const { errors } = item;
        let error = errors[0];
        if (error) {
          const message = error.message;
          onError?.(message);
        }
      });
    },
  });

  const imageUrl = preview.length > 0 ? preview : value;

  const styles = uploadVariants({
    disabled,
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
      data-disabled={dataAttr(disabled)}
      data-avatar={dataAttr(isAvatar)}
      className={baseStyles}
    >
      <input {...getInputProps()} />
      <ImageUploadIcon className="shrink-0 text-inherit" />
      {!isAvatar && (
        <>
          <p
            data-slot="info"
            className={styles.info({ className: classNames?.info })}
          >
            Choose a file or drag & drop it here
          </p>
          <p
            data-slot="info"
            className={styles.info({ className: classNames?.info })}
          >
            JPEG, PNG, and WEBP formats, up to 5MB
          </p>
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
      {showDeleteBtn && imageUrl && !disabled && (
        <button
          data-slot="delete-btn"
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
