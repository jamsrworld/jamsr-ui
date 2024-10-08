type Props = {
  children: React.ReactNode;
  heading: string;
};

export const VariantPage = (props: Props) => {
  const { children, heading } = props;
  return (
    <main data-heading={heading} className="flex flex-col gap-12">
      {children}
    </main>
  );
};
