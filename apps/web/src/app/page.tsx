import Link from "next/link";

const page = () => {
  return (
    <div className="bg-background text-foreground light h-dvh">
      <Link href="/components/accordion">See Components</Link>
    </div>
  );
};

export default page;
