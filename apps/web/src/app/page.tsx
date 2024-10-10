import Link from "next/link";
import { redirect } from "next/navigation";

const page = () => {
  redirect("/components/accordion");
  return (
    <div className="h-dvh bg-background text-foreground light">
      <Link href="/components/accordion">See Components</Link>
      <div className="bg-background" />
    </div>
  );
};

export default page;
