import { Sortable } from "@jamsr-ui/dnd";
import { CloseIcon, DragDropHorizontalIcon } from "@jamsr-ui/shared-icons";
import { useId } from "react";
import { ProgressView } from "./progress-view";
import type { UseFileUploadMultiProps } from "./use-file-upload";
import { useFileUploadMulti } from "./use-file-upload";

export type FileUploadMultiProps = UseFileUploadMultiProps;

export const FileUploadMulti = (props: FileUploadMultiProps) => {
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
    getLabelProps,
    label,
  } = useFileUploadMulti(props);
  const htmlForId = useId();
  return (
    <Component {...getBaseProps()}>
      <label {...getLabelProps()} htmlFor={htmlForId}>
        {label}
      </label>
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
                <button
                  ref={setActivatorNodeRef}
                  {...listeners}
                  className="absolute left-1 top-1 z-10 hidden rounded bg-content1 group-hover:block"
                  type="button"
                >
                  <DragDropHorizontalIcon />
                </button>
                <img src={item.preview!} alt="" {...getFileProps()} />
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
            </div>
          )}
        </Sortable>
        {canUploadFile && (
          <div {...getRootProps()} {...getPickerProps()}>
            <input id={htmlForId} {...getInputProps()} />
            {uploadIcon}
            {info && <div {...getInfoProps()}>{info}</div>}
          </div>
        )}
      </div>
      {helperText && <div {...getHelperTextProps()}>{helperText}</div>}
    </Component>
  );
};
