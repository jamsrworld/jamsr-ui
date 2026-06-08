"use client";

import { Icon } from "@iconify/react";
import { Avatar } from "jamsrui/avatar";
import { IconButton } from "jamsrui/icon-button";
import { Text } from "jamsrui/text";
import { useFileUpload } from "jamsrui/file-upload";
import { cn } from "@jamsrui/utils";

export const FileUploadAvatarUpload = () => {
  const {
    getInputProps,
    isDragging,
    files,
    removeFile,
    getRootProps,
    openFileDialog,
  } = useFileUpload({
    multiple: false,
    maxFiles: 1,
    maxSize: 2 * 1024 * 1024,
    accept: "image/*",
  });
  const avatar = files[0];
  return (
    <div className="flex flex-col items-center text-center">
      <div
        {...getRootProps({})}
        className={cn(
          "w-full border size-28 focus-within:outline-1 focus-within:outline-focus rounded-full border-border border-dashed flex flex-col justify-center items-center",
          isDragging ? "border-primary" : "hover:border-border-light",
        )}
        onClick={openFileDialog}
      >
        <input {...getInputProps({})} />
        {avatar ? (
          <Avatar className="size-full">
            <Avatar.Image
              src={avatar.preview}
              alt={avatar.file.name}
            />
            <IconButton
              label="Remove"
              size="sm"
              radius="full"
              className="absolute top-1 right-1 hidden group-hover:flex"
              onClick={(e) => {
                e.stopPropagation();
                removeFile(avatar.id);
              }}
            >
              <Icon icon="material-symbols:close-rounded" />
            </IconButton>
          </Avatar>
        ) : (
          <div className="size-12 bg-background-secondary rounded-full flex items-center justify-center">
            <Icon
              icon="mage:image"
              className="size-6 text-foreground-secondary"
            />
          </div>
        )}
      </div>
      <Text className="font-medium mt-2">Upload Avatar</Text>
      <Text
        variant="paragraph2"
        className="text-foreground-secondary"
      >
        PNG, JPG up to 2MB
      </Text>
    </div>
  );
};
