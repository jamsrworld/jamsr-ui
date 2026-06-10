"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { cn, mergeProps } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

export type FileMetadata = {
  name: string;
  size: number;
  type: string;
  url: string;
  id: string;
};
export type FileWithPreview = {
  file: File | FileMetadata;
  id: string;
  preview?: string;
};

export const useFileUpload = (props: useFileUpload.Props) => {
  const {
    accept,
    maxFiles = Number.POSITIVE_INFINITY,
    maxSize = Number.POSITIVE_INFINITY,
    multiple,
    onFilesAdded,
    onFilesChange,
  } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const createPreview = useCallback(
    (file: File | FileMetadata): string | undefined => {
      if (file instanceof File) {
        if (file.type.startsWith("image/")) {
          return URL.createObjectURL(file);
        } else {
          return undefined;
        }
      }
      return file.url;
    },
    [],
  );

  const generateUniqueId = useCallback((file: File | FileMetadata): string => {
    if (file instanceof File) {
      return `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    }
    return file.id;
  }, []);

  const clearFiles = useCallback(() => {
    setFiles((prev) => {
      for (const file of prev) {
        if (file.preview && file.file instanceof File) {
          URL.revokeObjectURL(file.preview);
        }
      }
      return [];
    });
    onFilesChange?.([]);
  }, [onFilesChange]);

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      if (newFiles.length === 0) return;

      // clear files in single mode
      if (!multiple) {
        clearFiles();
      }

      // check max files limit
      if (multiple && files.length + newFiles.length > maxFiles) {
        return;
      }

      const validFiles: FileWithPreview[] = [];
      const newFilesArray = Array.from(newFiles);

      for (const file of newFilesArray) {
        if (multiple) {
          const isDuplicate = files.some(
            (existingFile) =>
              existingFile.file.name === file.name &&
              existingFile.file.size === file.size,
          );
          if (isDuplicate) {
            continue;
          }
        }

        if (file.size > maxSize) {
          continue;
        }

        validFiles.push({
          file,
          id: generateUniqueId(file),
          preview: createPreview(file),
        });
      }

      if (validFiles.length < 1) return;

      onFilesAdded?.(validFiles);
      setFiles((prev) => {
        const newFiles = multiple
          ? [...prev, ...validFiles]
          : validFiles.slice(0, 1);
        onFilesChange?.(newFiles);
        return newFiles;
      });

      // clear input value
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [
      clearFiles,
      createPreview,
      files,
      generateUniqueId,
      maxFiles,
      maxSize,
      multiple,
      onFilesAdded,
      onFilesChange,
    ],
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if ((e.target.files?.length ?? 0) > 0) {
        const files = e.target.files;
        if (files) addFiles(files);
      }
    },
    [addFiles],
  );

  const removeFile = useCallback(
    (id: string) => {
      const fileToRemove = files.find((file) => file.id === id);
      if (
        fileToRemove &&
        fileToRemove.file instanceof File &&
        fileToRemove.preview
      ) {
        URL.revokeObjectURL(fileToRemove.preview);
      }

      const newFiles = files.filter((file) => file.id !== id);
      onFilesChange?.(newFiles);
      setFiles(newFiles);
    },
    [files, onFilesChange],
  );

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const files = e.dataTransfer.files;
      if (files) addFiles(files);
      setIsDragging(false);
    },
    [addFiles],
  );

  const getInputProps: PropGetter<UIProps<"input">> = useCallback(
    (props) => ({
      type: "file",
      multiple,
      ref: inputRef,
      className: cn(props.className, "sr-only"),
      ...mergeProps(props, {
        onChange: handleOnChange,
      }),
    }),
    [handleOnChange, multiple],
  );

  const getRootProps: PropGetter<UIProps<"div">> = useCallback(
    (props) => ({
      ...mergeProps(props, {
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        onDragOver: handleDragOver,
      }),
    }),
    [handleDragEnter, handleDragLeave, handleDrop, handleDragOver],
  );

  const openFileDialog = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  return useMemo(
    () => ({
      isDragging,
      getInputProps,
      files,
      setFiles,
      removeFile,
      getRootProps,
      openFileDialog,
      clearFiles,
    }),
    [
      isDragging,
      getInputProps,
      files,
      setFiles,
      removeFile,
      getRootProps,
      openFileDialog,
      clearFiles,
    ],
  );
};

export namespace useFileUpload {
  export interface Props {
    maxSize?: number;
    maxFiles?: number;
    accept?: string;
    multiple?: boolean;
    onFilesChange?: (files: FileWithPreview[]) => void;
    onFilesAdded?: (files: FileWithPreview[]) => void;
  }
}
