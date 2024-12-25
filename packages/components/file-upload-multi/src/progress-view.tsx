import { CircularProgress } from "@jamsr-ui/circular-progress";
import { RefreshIcon } from "@jamsr-ui/shared-icons";
import { useCallback, useMemo } from "react";
import { type FileUploadProgress } from "./use-file-upload";

type Props = {
  id: string;
  progress: FileUploadProgress;
  onRetry: (id: string) => void;
  overlayWrapperClassName: string;
  overlayClassName: string;
};

export const ProgressView = (props: Props) => {
  const { progress, onRetry, id, overlayWrapperClassName, overlayClassName } =
    props;

  const handleRetry = useCallback(() => {
    onRetry(id);
  }, [id, onRetry]);

  const getContent = useMemo(() => {
    if (typeof progress === "number") {
      return (
        <CircularProgress
          isIntermediate={false}
          value={progress}
          showLabel
          classNames={{ label: "fill-white" }}
        />
      );
    }

    if (progress === "PENDING") {
      return <span>pending</span>;
    }

    if (progress === "ERROR") {
      return (
        <div className="flex flex-col">
          <span>failed</span>
          <button onClick={() => handleRetry()} type="button">
            <RefreshIcon />
          </button>
        </div>
      );
    }
    return null;
  }, [handleRetry, progress]);

  if (getContent === null) return null;

  return (
    <div className={overlayWrapperClassName}>
      <div className={overlayClassName} />
      <div>{getContent}</div>
    </div>
  );
};
