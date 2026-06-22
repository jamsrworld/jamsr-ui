"use client";

import { fileUploadStyles } from "./styles";
import { useFileUpload } from "./use-file-upload";
import { formatBytes } from "./utils";

import type { ComponentProps } from "react";

export const FileUpload = (props: FileUpload.Props) => {
  const {
    className,
    maxSize,
    maxFiles,
    accept,
    multiple,
    onFilesChange,
    onFilesAdded,
    children,
    ...rest
  } = props;

  const {
    getInputProps,
    isDragging,
    files,
    removeFile,
    getRootProps,
    openFileDialog,
  } = useFileUpload({
    maxSize,
    maxFiles,
    accept,
    multiple,
    onFilesChange,
    onFilesAdded,
  });

  const styles = fileUploadStyles();

  return (
    <div className="w-full">
      <div
        className={styles.root({ className })}
        data-dragging={isDragging}
        onClick={openFileDialog}
        {...getRootProps({})}
        {...rest}
      >
        <input {...getInputProps({})} accept={accept} />
        {children ?? (
          <>
            <svg
              className={styles.icon()}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.label()}>
              Drag & drop files here or click to upload
            </span>
          </>
        )}
      </div>

      {files.length > 0 && (
        <div className={styles.preview()}>
          {files.map((file) => (
            <div key={file.id} className={styles.previewItem()}>
              {file.preview ? (
                <img
                  alt={file.file.name}
                  className="w-full h-full object-cover"
                  src={file.preview}
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full bg-surface text-center p-1 text-[10px]">
                  <span className="truncate max-w-full font-medium">
                    {file.file.name}
                  </span>
                  <span className="text-foreground-secondary">
                    {formatBytes(file.file.size)}
                  </span>
                </div>
              )}
              <button
                aria-label="Remove file"
                className={styles.removeButton()}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(file.id);
                }}
              >
                <svg
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export namespace FileUpload {
  export interface Props
    extends
      Omit<
        ComponentProps<"div">,
        "onDragEnter" | "onDragLeave" | "onDrop" | "onDragOver"
      >,
      useFileUpload.Props {}
}
