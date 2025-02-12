"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, object, record } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";
import { RHFEditor } from "@jamsr-ui/rhf";

type FormValues = {
  description: Record<string, unknown>;
};

const schema = object({
  description: record(any(), any()).refine((value) => {
    if (typeof value !== "object" || Object.keys(value).length === 0) {
      return false;
    }
    if (!value.content || !Array.isArray(value.content)) {
      return false;
    }
    return Object.keys(value.content).length > 0;
  }, "Description is required"),
});

export const RHFDemoEditor = () => {
  const defaultValues: FormValues = {
    description: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          attrs: {
            textAlign: null,
          },
          content: [
            {
              type: "text",
              text: "→ © hey there",
            },
          ],
        },
      ],
    },
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <RHFDemoWrapper methods={methods} isPending={false} onSubmit={onSubmit}>
      <RHFEditor<FormValues>
        name="description"
        label="Enter product description"
      />
    </RHFDemoWrapper>
  );
};
