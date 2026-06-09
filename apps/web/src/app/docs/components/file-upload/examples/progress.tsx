"use client";

import { Icon } from "@iconify/react";
import { Avatar } from "ui/avatar";
import { CircularProgress } from "ui/circular-progress";
import { IconButton } from "ui/icon-button";
import { Text } from "ui/text";
import { formatBytes, useFileUpload } from "ui/file-upload";
import { cn } from "@jamsrui/utils";
import { useState } from "react";

type UploadProgress = {
  fileId: string;
  progress: number;
  completed: boolean;
};

const uploadFile = (
  file: File,
  onProgress: (progress: number) => void,
  onComplete: () => void,
  onError: () => void,
) => {
  const formData = new FormData();
  formData.append("file", file);

  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener("progress", (event) => {
    if (event.lengthComputable) {
      const progress = (event.loaded / event.total) * 100;
      onProgress(progress);
    }
  });

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("File uploaded successfully");
      onComplete();
    } else {
      console.error("File upload failed");
      onError();
    }
  });

  xhr.addEventListener("error", () => {
    onError();
  });

  xhr.open("POST", "https://test-cdn.jamsrworld.com/upload/jamsrui");
  xhr.send(formData);
};

export const FileUploadUsage = () => {
  // State to track upload progress for each file
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);

  const { getInputProps, isDragging, files, removeFile, getRootProps } =
    useFileUpload({
      multiple: true,
      onFilesAdded(newFiles) {
        for (const file of newFiles) {
          if (!(file.file instanceof File)) continue;
          uploadFile(
            file.file,
            (progress) => {
              setUploadProgress((prev) =>
                prev.map((item) =>
                  item.fileId === file.id ? { ...item, progress } : item,
                ),
              );
            },
            () => {
              setUploadProgress((prev) =>
                prev.map((item) =>
                  item.fileId === file.id
                    ? { ...item, progress: 100, completed: true }
                    : item,
                ),
              );
            },
            () => {
              setUploadProgress((prev) =>
                prev.map((item) =>
                  item.fileId === file.id
                    ? { ...item, progress: 0, completed: true }
                    : item,
                ),
              );
            },
          );
        }

        setUploadProgress((prev) => [
          ...prev,
          ...newFiles.map((file) => ({
            fileId: file.id,
            progress: 0,
            completed: false,
          })),
        ]);
      },
    });

  return (
    <div>
      <div
        {...getRootProps({})}
        className={cn(
          "w-full border border-border border-dashed rounded-md flex flex-col justify-center items-center gap-2 px-4 py-8",
          isDragging ? "border-primary" : "hover:border-border-light",
        )}
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
            const progress = uploadProgress.find(
              (progress) => progress.fileId === file.id,
            );
            return (
              <li
                key={file.id}
                className="flex flex-col gap-4 group relative"
              >
                <Avatar
                  className="size-32"
                  radius="sm"
                >
                  <Avatar.Image
                    src={file.preview}
                    alt={file.file.name}
                  />
                </Avatar>
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
                {progress && !progress.completed && (
                  <div className="absolute flex justify-center items-center inset-0 size-full bg-black/50">
                    <CircularProgress
                      value={progress.progress}
                      isIntermediate={false}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
