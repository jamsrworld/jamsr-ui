import { readSourceCode } from "@/utils/code";
import { cn } from "@jamsrui/utils";
import { CodeBlock, CodeBlockProps } from "./code-block";
import { Text } from "jamsrui/text";
import { Tabs } from "jamsrui/tabs";

type CodeExampleProps = Omit<CodeBlockProps, "children"> & {
  url: string;
  children: React.ReactElement;
  title: string;
  description?: string;
  isCentered?: boolean;
};

export const DocsPageSection = (props: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  const { title, description, children } = props;
  const id = title.toLowerCase().replace(" ", "-");
  return (
    <section
      id={id}
      className="flex flex-col gap-2"
    >
      <div>
        <Text
          render={<h1 />}
          variant="h5"
        >
          {title}
        </Text>
        <Text className="text-foreground-secondary">{description}</Text>
      </div>
      {children}
    </section>
  );
};

export const CodeExample = async (props: CodeExampleProps) => {
  const { children, url, lang, title, description, isCentered } = props;
  const code = await readSourceCode(url);
  const id = title.toLowerCase().replace(" ", "-");
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
      <Tabs defaultValue="preview">
        <Tabs.List>
          <Tabs.Tab value="preview">Preview</Tabs.Tab>
          <Tabs.Tab value="code">Code</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="preview">
          <div
            className={cn(
              "border min-h-50  border-border rounded-lg p-4 flex flex-col",
              isCentered && "flex items-center justify-center",
            )}
          >
            {children}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="code">
          <CodeBlock lang={lang}>{code}</CodeBlock>
        </Tabs.Panel>
      </Tabs>
    </section>
  );
};
