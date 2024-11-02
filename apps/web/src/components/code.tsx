type CodeProps = {
  children: React.ReactNode;
};

export const Code = (props: CodeProps) => {
  const { children } = props;
  return (
    <code className="bg-content2 p-1 mx-1 rounded-lg text-sm">{children}</code>
  );
};
