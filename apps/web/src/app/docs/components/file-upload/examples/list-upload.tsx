"use client";

import { Icon } from "@iconify/react";
import { Avatar } from "ui/avatar";
import { Button } from "ui/button";
import { IconButton } from "ui/icon-button";
import { Text } from "ui/text";
import { formatBytes, useFileUpload } from "ui/file-upload";
import { cn } from "@jamsrui/utils";

import React from "react";

export const FileUploadListUpload = (props: React.ComponentProps<"div">) => {
  const {
    getInputProps,
    isDragging,
    files,
    removeFile,
    getRootProps,
    openFileDialog,
    clearFiles,
  } = useFileUpload({
    multiple: true,
    maxFiles: 10,
    maxSize: 5 * 1024 * 1024,
    accept: "image/*",
  });
  return (
    <div {...props}>
      <div
        {...getRootProps({})}
        className={cn(
          "w-full border border-border border-dashed rounded-md flex flex-col justify-center items-center gap-2 px-4 py-8",
          isDragging ? "border-primary" : "hover:border-border-light",
        )}
        onClick={openFileDialog}
      >
        <input
          multiple
          {...getInputProps({})}
        />
        <div className="size-12 bg-background-secondary rounded-full flex items-center justify-center">
          <Icon
            icon="mage:image"
            className="size-6 text-foreground-secondary"
          />
        </div>
        <Text variant="paragraph">Upload images to gallery</Text>
        <Text
          variant="paragraph2"
          className="text-foreground-secondary"
        >
          Drag and drop images here or click to browse
        </Text>
        <Text
          variant="caption"
          className="text-foreground-secondary"
        >
          PNG, JPG, GIF up to 5MB each (max 10 files)
        </Text>
      </div>

      {files.length > 0 && (
        <ul className="flex gap-2 flex-col py-4">
          <div className="flex justify-end">
            <Button
              onClick={clearFiles}
              size="sm"
            >
              Clear All
            </Button>
          </div>
          {files.map((file) => {
            return (
              <li
                key={file.id}
                className="flex w-full gap-2 group relative bg-background-secondary rounded-md items-center py-2 px-4"
              >
                <div>
                  {file.preview ? (
                    <Avatar radius="md">
                      <Avatar.Image
                        src={file.preview}
                        alt={file.file.name}
                      />
                    </Avatar>
                  ) : (
                    <div className="flex justify-center items-center size-full">
                      <Icon
                        icon="tabler:file-filled"
                        className="size-12 text-foreground"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <Text className="text-foreground">{file.file.name}</Text>
                  <Text
                    variant="caption"
                    className="text-foreground-secondary"
                  >
                    {formatBytes(file.file.size)}
                  </Text>
                </div>
                <IconButton
                  label="Remove"
                  size="sm"
                  radius="full"
                  onClick={() => removeFile(file.id)}
                  className="ml-auto"
                >
                  <Icon icon="material-symbols:close-rounded" />
                </IconButton>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
