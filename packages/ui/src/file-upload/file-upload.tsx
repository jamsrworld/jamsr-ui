// import { FileUpload as FileUploadUI, formatBytes } from "@jamsrui/react";

import type { ComponentProps } from "react";

export const FileUpload = (props: FileUpload.Props) => {
  return null;
  // const { className, ...rest } = props;
  // const styles = fileUploadStyles();
  // return <FileUploadUI {...rest} className={styles.root({ className })} />;
};

// export { formatBytes };

export namespace FileUpload {
  export interface Props extends ComponentProps<"div"> {}
}
