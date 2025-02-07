"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Radio } from "@jamsr-ui/react";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";
import { RHFRadioGroup } from "@jamsr-ui/rhf";

type FormValues = {
  paymentMethod: string;
};

const items = [
  {
    value: "Nowpayments",
    label: "Nowpayments",
  },
  {
    value: "BtcPay",
    label: "Bitcoin",
  },
  {
    value: "Paypal",
    label: "Paypal",
  },
];

const schema = object({
  paymentMethod: string().trim().min(1, "Payment Method is required"),
});

export const RHFDemoRadioGroup = () => {
  const defaultValues: FormValues = {
    paymentMethod: "",
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
      <RHFRadioGroup<FormValues> name="paymentMethod">
        {items.map(({ label, value }) => {
          return (
            <Radio
              key={label}
              value={label}
              className="text-ellipsis"
              classNames={{
                base: "border-2 border-divider rounded-xl p-3 m-0 gap-2 flex data-[selected=true]:border-primary ",
                label: "flex items-center gap-2 justify-between",
              }}
            >
              <span>{label}</span>
            </Radio>
          );
        })}
      </RHFRadioGroup>
    </RHFDemoWrapper>
  );
};
