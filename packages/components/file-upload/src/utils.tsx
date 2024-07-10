import { ZipIcon } from "@jamsr-ui/shared-icons";

export const isImageExt = (url: string): boolean => {
  try {
    const ext = new URL(url).pathname.split(".").pop();
    return !!ext && ["png", "jpg", "jpeg", "webp", "svg"].includes(ext);
  } catch {
    return true;
  }
};

export const getFileExtension = (url: string) => {
  const ext = new URL(url).pathname.split(".").pop();
  if (!ext) return "";
  return ext;
};

export const getFileIconFromUrl = (url: string) => {
  if (!url.length) return null;
  const ext = new URL(url).pathname.split(".").pop();
  switch (ext) {
    case "png":
    case "jpg":
    case "jpeg":
      return "image";
    case "pdf":
      return "pdf";
    case "zip":
      return <ZipIcon />;
    default:
      return "file";
  }
};

export const formatFileSize = (bytes?: number) => {
  if (!bytes) {
    return "0 Bytes";
  }
  bytes = Number(bytes);
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const dm = 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};
