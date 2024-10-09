import Link from "next/link";

const page = () => {
  return (
    <div className="bg-background text-foreground light h-dvh">
      <Link href="/components/accordion">See Components</Link>
      <div className="bg-background" />
    </div>
  );
};

export default page;
