"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AutocompleteItem } from "@jamsr-ui/react";
import { RHFAutocomplete } from "@jamsr-ui/rhf";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  animal: string;
};

const schema = object({
  animal: string().min(1, "Animal is required"),
});

const animals = [
  {
    label: "Cat",
    value: "cat",
  },
  {
    label: "Dog",
    value: "dog",
  },
  {
    label: "Elephant",
    value: "elephant",
  },
  {
    label: "Lion",
    value: "lion",
  },
  {
    label: "Tiger",
    value: "tiger",
  },
  {
    label: "Giraffe",
    value: "giraffe",
  },
  {
    label: "Dolphin",
    value: "dolphin",
  },
  {
    label: "Penguin",
    value: "penguin",
  },
  {
    label: "Zebra",
    value: "zebra",
  },
  {
    label: "Shark",
    value: "shark",
  },
  {
    label: "Whale",
    value: "whale",
  },
  {
    label: "Otter",
    value: "otter",
  },
  {
    label: "Crocodile",
    value: "crocodile",
  },
];

export const RHFDemoAutocomplete = () => {
  const defaultValues: FormValues = {
    animal: "",
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
      <RHFAutocomplete<FormValues> name="animal" label="Animal">
        {animals.map((animal) => (
          <AutocompleteItem
            key={animal.value}
            value={animal.value}
            label={animal.label}
          >
            {animal.label}
          </AutocompleteItem>
        ))}
      </RHFAutocomplete>
    </RHFDemoWrapper>
  );
};
