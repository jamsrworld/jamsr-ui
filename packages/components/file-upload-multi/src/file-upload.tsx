import { Sortable } from "@jamsr-ui/dnd";
import { CloseIcon, DragDropHorizontalIcon } from "@jamsr-ui/shared-icons";
import { ProgressView } from "./progress-view";
import type { UseMultiFileUploadProps } from "./use-file-upload";
import { useMultiFileUpload } from "./use-file-upload";

export type MultiFileUploadProps = UseMultiFileUploadProps;

export const MultiFileUpload = (props: MultiFileUploadProps) => {
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
    canUploadFile,
    helperText,
    getHelperTextProps,
    info,
    getInnerWrapperProps,
    getInfoProps,
    uploadIcon,
    Component,
    retryUpload,
    overlayWrapperClassName,
    overlayClassName,
    setValue,
  } = useMultiFileUpload(props);
  return (
    <Component {...getBaseProps()}>
      <div {...getInnerWrapperProps()}>
        <Sortable items={value} setItems={setValue}>
          {({
            item,
            attributes,
            isDisabled,
            listeners,
            setNodeRef,
            setActivatorNodeRef,
            styles,
          }) => (
            <div
              ref={setNodeRef}
              style={styles}
              key={item.id}
              {...attributes}
              suppressHydrationWarning
            >
              <div {...getFileViewProps()}>
                <img src={item.preview} alt="" {...getFileProps()} />
                <ProgressView
                  id={item.id}
                  onRetry={retryUpload}
                  progress={item.progress}
                  overlayWrapperClassName={overlayWrapperClassName}
                  overlayClassName={overlayClassName}
                />
                {showDeleteBtn && !isDisabled && (
                  <button
                    type="button"
                    onClick={(e) => handleDelete(e, item.id)}
                    {...getDeleteBtnProps()}
                  >
                    <CloseIcon className="size-4" />
                  </button>
                )}
              </div>
              <div className="flex w-full items-center justify-center bg-gray-100">
                <button ref={setActivatorNodeRef} {...listeners} type="button">
                  <DragDropHorizontalIcon />
                </button>
              </div>
            </div>
          )}
        </Sortable>
        {canUploadFile && (
          <div {...getRootProps()} {...getPickerProps()}>
            <input {...getInputProps()} />
            {uploadIcon}
            {info && <div {...getInfoProps()}>{info}</div>}
          </div>
        )}
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </Component>
  );
};
