"use client";

// form
import { useForm } from "react-hook-form";
// @mui
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@jamsr-ui/react";
import { object, string } from "zod";

export default function page() {
  type FormValues = { secret: string | null };

  const methods = useForm<FormValues>({
    defaultValues: { secret: null },
    resolver: zodResolver(object({ secret: string().nullable() })),
  });

  const { getValues, setValue } = methods;

  const getConfig = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fetch("/").then(() => {
      console.log({ secret: getValues("secret") });
    });
  };

  const handleClick = async () => {
    setValue("secret", "Hello World");
    await getConfig();
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
}
