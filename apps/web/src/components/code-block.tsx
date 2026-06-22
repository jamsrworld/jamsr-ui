import { BundledLanguage, codeToHtml } from "shiki";

export type CodeBlockProps = {
  children: string;
  lang?: BundledLanguage;
};

export const CodeBlock = async (props: CodeBlockProps) => {
  const { children, lang = "tsx" } = props;
  const html = await codeToHtml(children, {
    lang,
    theme: "vesper",
  });
  return (
    <div
      className="p-4 rounded-2xl [&_code]:text-sm max-h-[50vh] overflow-auto bg-background [&_.shiki]:bg-background!"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
