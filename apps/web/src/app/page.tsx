import Link from "next/link";

const page = () => {
  return (
    <div className="h-dvh bg-background text-foreground light">
      <Link href="/components/accordion">See Components</Link>
    </div>
  );
};

export default page;
