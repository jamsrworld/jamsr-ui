import { FileUploadUsage } from "./usage";

export const FileUploadHorizontal = () => {
  return (
    <FileUploadUsage
      isAvatar
      classNames={{
        base: "w-full",
        wrapper: "flex flex-row",
        label: "w-1/2",
      }}
      helperText="Images should be less than 2MB"
    />
  );
};
