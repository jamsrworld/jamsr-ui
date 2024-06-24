import { Close, ImageUpload as ImageUploadIcon } from "@jamsr-ui/shared-icons";
import { SlotsToClasses, cn, dataAttr } from "@jamsr-ui/utils";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { UploadSlots, uploadVariants } from "./style";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export type MultiUploadImgState = {
  file: string;
  id: string;
  progress: "PENDING" | "COMPLETE" | "ERROR" | number;
};

export type ImageUploadProps = {
  value: MultiUploadImgState[];
  onValueChange: (value: MultiUploadImgState[]) => void;
  onFilesSelect: (file: MultiUploadImgState[]) => void | Promise<void>;
  className?: string;
  classNames?: SlotsToClasses<UploadSlots>;
  disabled?: boolean;
  onError?: (error: string) => void;
  showDeleteBtn?: boolean;
  dropzoneOptions?: DropzoneOptions;
};

export const MultiImageUpload = (props: ImageUploadProps) => {
  const {
    value,
    className,
    classNames,
    disabled = false,
    onFilesSelect,
    onValueChange,
    onError,
    showDeleteBtn = true,
    dropzoneOptions = {},
  } = props;
  const { maxFiles } = dropzoneOptions;
  const canUploadImage = maxFiles && value.length < maxFiles;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles,
    maxSize: MAX_FILE_SIZE,
    multiple: true,
    accept: {
      "image/*": [".jpeg", ".png", ".webp"],
    },
    disabled,
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
          file: objectUrl,
          id: Math.random().toString(36).slice(2),
          progress: "PENDING",
        };
      });
      onValueChange([...value, ...selectedFiles]);
      onFilesSelect(selectedFiles);
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
    ...dropzoneOptions,
  });

  const styles = uploadVariants({
    disabled,
    isDragActive,
  });
  const baseStyles = styles.base({
    className: cn(classNames?.base, className),
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    onValueChange(value.filter((item) => item.id !== id));
  };

  return (
    <div className="flex gap-2">
      {value.map((item) => (
        <div
          data-slot="image-view"
          key={item.id}
          className="group relative size-20"
        >
          <img
            data-slot="image"
            key={item.id}
            src={item.file}
            alt="image"
            className="h-full w-full rounded-lg object-cover"
          />
          {showDeleteBtn && !disabled && (
            <button
              data-slot="delete-btn"
              onClick={(e) => handleDelete(e, item.id)}
              className={styles.deleteBtn({
                className: classNames?.deleteBtn,
              })}
            >
              <Close />
            </button>
          )}
        </div>
      ))}
      {canUploadImage && (
        <div
          {...getRootProps()}
          data-slot="base"
          data-component="image-upload"
          data-drag-active={dataAttr(isDragActive)}
          data-disabled={dataAttr(disabled)}
          className={baseStyles}
        >
          <input {...getInputProps()} />
          <ImageUploadIcon className="shrink-0 text-inherit" />
        </div>
      )}
    </div>
  );
};
