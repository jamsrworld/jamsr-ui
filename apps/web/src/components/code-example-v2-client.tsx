"use client";

import { useCodeExample } from "./code-example-context";
import { cn } from "ui/utils";
import { Text } from "ui/text";
import { Field } from "ui/field";
import { Select } from "ui/select";
import {
  type ReactNode,
  type ComponentType,
  useEffect,
  isValidElement,
  cloneElement,
} from "react";
import { ScrollArea } from "ui/scroll-area";
import { Clipboard } from "ui/clipboard";

type VariantOption = {
  options: string[];
  defaultValue: string;
  label?: string;
};

type Props = {
  id: string;
  title: string;
  description?: string;
  highlightedHtml: string;
  variants?: Record<string, VariantOption>;
  children?: ReactNode;
  component?: ComponentType<object>;
  isOwnLine: boolean;
  indent: string;
};

export const CodeExampleV2Client = (props: Props) => {
  const {
    id,
    title,
    description,
    highlightedHtml,
    variants,
    children,
    component,
    isOwnLine,
    indent,
  } = props;
  const { activeProps, setProps } = useCodeExample();

  // Initialize and update the context state with default values if it's empty
  useEffect(() => {
    if (variants) {
      const initial: Record<string, unknown> = {};
      Object.entries(variants).forEach(([key, config]) => {
        initial[key] = config.defaultValue;
      });
      setProps(initial);
    }
  }, [variants, setProps]);

  const handleValueChange = (key: string, value: string | null) => {
    if (value) {
      setProps({ ...activeProps, [key]: value });
    }
  };

  // Format props into JSX attributes format
  const propList = Object.entries(activeProps)
    .filter(([_, val]) => val !== undefined && val !== null && val !== "")
    .map(([key, val]) => {
      if (typeof val === "boolean") {
        return val ? key : "";
      }
      return `${key}="${val}"`;
    })
    .filter(Boolean);

  let formattedProps = "";
  if (propList.length > 0) {
    if (isOwnLine) {
      formattedProps = propList.join(`\n${indent}`);
    } else {
      formattedProps = ` ${propList.join(" ")}`;
    }
  }

  // Replace placeholder in the pre-highlighted HTML on the client
  const finalHtml = highlightedHtml.replaceAll(
    "__PROPS_PLACEHOLDER__",
    formattedProps,
  );

  const hasVariants = variants && Object.keys(variants).length > 0;

  const renderChildren = () => {
    if (component) {
      const Comp = component;
      return <Comp {...activeProps} />;
    }
    if (isValidElement(children)) {
      return cloneElement(children, activeProps);
    }
    return children;
  };

  return (
    <section
      id={id}
      className="flex flex-col gap-2"
    >
      <div>
        <Text
          render={<a href={`#${id}`} />}
          variant="h5"
        >
          {title}
        </Text>
        {description && <Text>{description}</Text>}
      </div>
      <div className="border border-border rounded-lg flex flex-col">
        {hasVariants ? (
          <div className="grid grid-cols-4 w-full min-h-50">
            <div
              className={cn("col-span-3 p-4 flex items-center justify-center")}
            >
              {renderChildren()}
            </div>
            <div className="col-span-1 p-4 border-l border-border flex flex-col gap-4">
              {Object.entries(variants).map(([key, config]) => {
                const label =
                  config.label || key.charAt(0).toUpperCase() + key.slice(1);
                // Convert options array to Select format (Record<string, string>)
                const items: Record<string, string> = {};
                config.options.forEach((opt) => {
                  items[opt] = opt.charAt(0).toUpperCase() + opt.slice(1);
                });

                return (
                  <Field
                    key={key}
                    className="w-full"
                  >
                    <Field.Label>{label}</Field.Label>
                    <Select
                      size="sm"
                      items={items}
                      value={
                        (activeProps[key] as string) || config.defaultValue
                      }
                      onValueChange={(val) => handleValueChange(key, val)}
                    >
                      <Select.Trigger />
                      <Select.Content>
                        {config.options.map((opt) => (
                          <Select.Item
                            key={opt}
                            value={opt}
                          >
                            <Select.ItemIndicator />
                            <Select.ItemText>{items[opt]}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  </Field>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="p-4 min-h-50 w-full flex items-center justify-center">
            {renderChildren()}
          </div>
        )}

        <div className="relative">
          <ScrollArea className="border-t border-border">
            <ScrollArea.Viewport className="max-h-[50vh]">
              {/* <div dangerouslySetInnerHTML={{ __html: finalHtml }} /> */}
              <div
                className="p-4 rounded-2xl [&_code]:text-sm [&_.shiki]:bg-background!"
                dangerouslySetInnerHTML={{ __html: finalHtml }}
              />
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar />
          </ScrollArea>
          <Clipboard
            text={finalHtml}
            className="absolute top-4 right-4"
          >
            <Clipboard.Icon />
          </Clipboard>
        </div>
      </div>
    </section>
  );
};
