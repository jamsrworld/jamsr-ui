import { readSourceCode } from "@/utils/code";
import { CodeBlockProps } from "./code-block";
import { codeToHtml } from "shiki";
import { CodeExampleProvider } from "./code-example-context";
import { CodeExampleV2Client } from "./code-example-v2-client";
import { type ComponentType, type ReactNode } from "react";

type VariantOption = {
  options: string[];
  defaultValue: string;
  label?: string;
};

type CodeExampleProps = Omit<CodeBlockProps, "children"> & {
  url: string;
  children?: ReactNode;
  component?: ComponentType<any>;
  title: string;
  description?: string;
  variants?: Record<string, VariantOption>;
};

const cleanCodeTemplate = (code: string) => {
  let cleaned = code;
  // Replace (props: ...) with ()
  cleaned = cleaned.replace(/\(props:\s*[^)]*\)/g, "()");
  // Replace {...props} with __PROPS_PLACEHOLDER__
  cleaned = cleaned.replace(/\{\.\.\.props\}/g, "__PROPS_PLACEHOLDER__");
  return cleaned.trim();
};

export const CodeExampleV2 = async (props: CodeExampleProps) => {
  const {
    children,
    component,
    url,
    lang = "tsx",
    title,
    description,
    variants,
  } = props;
  const code = await readSourceCode(url);
  const cleanedCode = cleanCodeTemplate(code);

  const isOwnLine = /^\s*__PROPS_PLACEHOLDER__/m.test(cleanedCode);
  const indentMatch = cleanedCode.match(/^(\s*)__PROPS_PLACEHOLDER__/m);
  const indent = indentMatch?.[1] ?? "      ";

  const html = await codeToHtml(cleanedCode, {
    lang,
    theme: "github-dark-default",
  });
  const id = title.toLowerCase().replace(" ", "-");

  const initialProps: Record<string, unknown> = {};
  if (variants) {
    Object.entries(variants).forEach(([key, config]) => {
      initialProps[key] = config.defaultValue;
    });
  }

  return (
    <CodeExampleProvider initialProps={initialProps}>
      <CodeExampleV2Client
        id={id}
        title={title}
        description={description}
        highlightedHtml={html}
        variants={variants}
        isOwnLine={isOwnLine}
        indent={indent}
        component={component}
        code={cleanedCode}
      >
        {children}
      </CodeExampleV2Client>
    </CodeExampleProvider>
  );
};
