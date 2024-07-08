import { Close, ImageUpload as ImageUploadIcon } from "@jamsr-ui/shared-icons";
import type { UseMultiUploadProps } from "./use-multi-upload";
import { useMultiUpload } from "./use-multi-upload";

export type MultiImageUploadProps = UseMultiUploadProps;

export const MultiImageUpload = (props: MultiImageUploadProps) => {
  const {
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
  } = useMultiUpload(props);

  return (
    <div {...getBaseProps()}>
      {value.map((item) => (
        <div key={item.id} {...getFileViewProps()}>
          <img src={item.preview} alt="" {...getFileProps()} />
          {showDeleteBtn && !isDisabled && (
            <button
              type="button"
              onClick={(e) => handleDelete(e, item.id)}
              {...getDeleteBtnProps()}
            >
              <Close className="size-4" />
            </button>
          )}
        </div>
      ))}
      {canUploadImage && (
        <div {...getRootProps()} {...getPickerProps()}>
          <input {...getInputProps()} />
          <ImageUploadIcon className="shrink-0 text-inherit" />
        </div>
      )}
    </div>
  );
};
