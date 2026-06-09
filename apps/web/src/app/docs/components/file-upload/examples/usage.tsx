"use client";

import { Icon } from "@iconify/react";
import { Avatar } from "ui/avatar";
import { IconButton } from "ui/icon-button";
import { Text } from "ui/text";
import { formatBytes, useFileUpload } from "ui/file-upload";
import { cn } from "@jamsrui/utils";

import React from "react";

export const FileUploadUsage = (props: React.ComponentProps<"div">) => {
  const {
    getInputProps,
    isDragging,
    files,
    removeFile,
    getRootProps,
    openFileDialog,
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
        <ul className="flex gap-4 flex-wrap py-4">
          {files.map((file) => {
            return (
              <li
                key={file.id}
                className="flex size-32 flex-col gap-4 group relative bg-background-secondary rounded-md"
              >
                {file.preview ? (
                  <Avatar
                    radius="md"
                    className="size-full"
                  >
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
                <div className="absolute bottom-0 bg-background/40 right-0 w-full py-1 px-2">
                  <Text
                    variant="caption"
                    className="text-foreground"
                  >
                    {file.file.name}
                  </Text>
                  <Text variant="caption">{formatBytes(file.file.size)}</Text>
                </div>
                <IconButton
                  label="Remove"
                  size="sm"
                  radius="full"
                  className="absolute -top-2 -right-2 hidden group-hover:flex"
                  onClick={() => removeFile(file.id)}
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
