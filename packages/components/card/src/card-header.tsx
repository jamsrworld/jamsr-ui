import { useUIStyle } from "@jamsr-ui/styles";
import { Text } from "../../text/src";
import {
  cn,
  deepMergeProps,
  mergeClassNames,
  type ComponentPropsWithAs,
} from "@jamsr-ui/utils";

export type CardHeaderProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T> & {
    heading?: React.ReactNode;
    subHeading?: React.ReactNode;
    className?: string;
    gutterBottom?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    classNames?: {
      heading?: string;
      subHeading?: string;
      base?: string;
      innerWrapper?: string;
      startContent?: string;
      endContent?: string;
    };
  };

export const CardHeader = <T extends React.ElementType = "div">(
  $props: CardHeaderProps<T>,
) => {
  const { cardHeader: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);
  const {
    as,
    heading,
    className,
    subHeading,
    gutterBottom,
    startContent,
    endContent,
    classNames: $classNames,
    ...restProps
  } = props;
  const Component = as ?? "div";

  const { cardHeader } = useUIStyle();
  const classNames = mergeClassNames(cardHeader?.classNames, $classNames);
  return (
    <Component
      data-slot="header"
      className={cn(
        "relative flex items-center gap-2 px-4 pt-4",
        { "pb-4": gutterBottom },
        cardHeader?.className,
        classNames?.base,
        className,
      )}
      {...restProps}
    >
      {startContent && (
        <div className={classNames?.startContent}>{startContent}</div>
      )}
      <div className={cn("grid grow", classNames?.innerWrapper)}>
        <Text
          as="h3"
          variant="body1"
          className={cn("font-medium", classNames?.heading)}
        >
          {heading}
        </Text>
        {subHeading && (
          <Text
            className={cn("text-foreground-secondary", classNames?.subHeading)}
            variant="caption"
            as="div"
          >
            {subHeading}
          </Text>
        )}
      </div>
      {endContent && <div className={classNames?.endContent}>{endContent}</div>}
    </Component>
  );
};
