import { readSourceCode } from "@/utils/code";
import { cn } from "@jamsrui/utils";
import { Text } from "jamsrui/text";
import { CodeBlock, CodeBlockProps } from "./code-block";

type CodeExampleProps = Omit<CodeBlockProps, "children"> & {
  url: string;
  children: React.ReactElement;
  title: string;
  description?: string;
  isCentered?: boolean;
};

export const CodeExampleV2 = async (props: CodeExampleProps) => {
  const { children, url, lang, title, description, isCentered } = props;
  const code = await readSourceCode(url);
  const id = title.toLowerCase().replace(" ", "-");
  return (
    <section id={id} className="flex flex-col gap-2">
      <div>
        <Text render={<a href={`#${id}`} />} variant="h5">
          {title}
        </Text>
        {description && <Text>{description}</Text>}
      </div>
      <div
        className={cn(
          "border min-h-50  border-border rounded-lg flex flex-col",
          isCentered && "flex items-center justify-center",
        )}
      >
        <div className="p-4">{children}</div>
        <div className="p-4 border-t border-border">
          <CodeBlock lang={lang}>{code}</CodeBlock>
        </div>
      </div>
    </section>
  );
};
