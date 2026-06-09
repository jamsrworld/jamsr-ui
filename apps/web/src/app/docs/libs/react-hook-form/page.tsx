"use client";

import { DocsPage } from "@/components/docs-page";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosedIcon, EyeOpenIcon } from "@jamsrui/icons";
import { Button } from "jamsrui/button";
import { Field } from "jamsrui/field";
import { IconButton } from "jamsrui/icon-button";
import { InputGroup } from "jamsrui/input-group";
import { Label } from "jamsrui/label";
import { NumberField } from "jamsrui/number-field";
import { OtpInput } from "jamsrui/otp-input";
import { Radio } from "jamsrui/radio-group";
import { RHFField } from "jamsrui/rhf";
import { Select } from "jamsrui/select";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import z, { boolean, number, object, string } from "zod";

type FormValues = {
  username: string;
  password: string;
  bio: string;
  age: number;
  acceptedTerms: boolean;
  darkMode: boolean;
  gender: "male" | "female";
  otp: string;
  country: string;
  hobbies: string[];
};

const schema = object({
  username: string().min(1, "Username is required"),
  password: string().min(1, "Password is required"),
  bio: string().min(1, "Bio is required"),
  age: number().min(1, "Age is required"),
  acceptedTerms: boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
  darkMode: boolean().refine((val) => val === true, {
    message: "Dark mode is required",
  }),
  gender: z.enum(["male", "female"]),
  otp: string().length(6, "OTP is required"),
  country: string().min(1, "Country is required"),
  hobbies: z.array(z.string()).min(1, "Hobbies are required"),
});

const Page = () => {
  const defaultValues: FormValues = {
    username: "",
    password: "",
    bio: "",
    age: 0,
    acceptedTerms: false,
    darkMode: false,
    gender: "" as FormValues["gender"],
    otp: "",
    country: "",
    hobbies: [],
  };
  const form = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
    // toast.success(<pre>{JSON.stringify(values, null, 2)}</pre>);
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <DocsPage
      title="React Hook Form"
      description=""
    >
      <FormProvider {...form}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-8 max-w-md"
        >
          {/* Username */}
          <RHFField<FormValues> name="username">
            <Field.Label>Username</Field.Label>
            <RHFField.Input />
            <RHFField.FieldError />
          </RHFField>
          {/* Password */}
          <RHFField<FormValues> name="password">
            <Field>
              <Field.Label>Password</Field.Label>
              <InputGroup>
                <RHFField.Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your name"
                />
                <InputGroup.Suffix>
                  <IconButton
                    size="sm"
                    radius="full"
                    label="Toggle password"
                    variant="light"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </IconButton>
                </InputGroup.Suffix>
              </InputGroup>
              <RHFField.FieldError />
            </Field>
          </RHFField>
          {/* Bio */}
          <RHFField<FormValues> name="bio">
            <Field>
              <Field.Label>Bio</Field.Label>
              <RHFField.TextArea />
              <RHFField.FieldError />
            </Field>
          </RHFField>
          {/* Age */}
          <RHFField<FormValues> name="age">
            <RHFField.NumberField>
              <Label>Age</Label>
              <NumberField.Group>
                <NumberField.Input />
              </NumberField.Group>
              <RHFField.FieldError />
            </RHFField.NumberField>
          </RHFField>
          {/* Accepted Terms */}
          <RHFField<FormValues>
            name="acceptedTerms"
            orientation="horizontal"
          >
            <RHFField.Checkbox />
            <Field.Label>Accept Terms and Conditions</Field.Label>
          </RHFField>
          {/* Dark Mode */}
          <RHFField<FormValues>
            name="darkMode"
            orientation="horizontal"
          >
            <Field.Label>Dark Mode</Field.Label>
            <RHFField.Switch />
          </RHFField>
          {/* Gender */}
          <RHFField<FormValues> name="gender">
            <RHFField.RadioGroup>
              <Label>Gender</Label>
              <Field orientation="horizontal">
                <Radio value="male" />
                <Field.Label>Male</Field.Label>
              </Field>
              <Field orientation="horizontal">
                <Radio value="female" />
                <Field.Label>Female</Field.Label>
              </Field>
              <RHFField.FieldError />
            </RHFField.RadioGroup>
          </RHFField>
          {/* OTP */}
          <RHFField<FormValues> name="otp">
            <RHFField.OtpInput maxLength={6}>
              <OtpInput.Group>
                <OtpInput.Slot index={0} />
                <OtpInput.Slot index={1} />
                <OtpInput.Slot index={2} />
              </OtpInput.Group>
              <OtpInput.Separator />
              <OtpInput.Group>
                <OtpInput.Slot index={3} />
                <OtpInput.Slot index={4} />
                <OtpInput.Slot index={5} />
              </OtpInput.Group>
            </RHFField.OtpInput>
            <RHFField.FieldError />
          </RHFField>
          {/* Country */}
          <RHFField<FormValues> name="country">
            <RHFField.Select>
              <Label>Country</Label>
              <Select.Trigger>
                <Select.Value placeholder="Select a country..." />
                <Select.Icon />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="us">
                  <Select.ItemIndicator />
                  <Select.ItemText>United States</Select.ItemText>
                </Select.Item>
                <Select.Item value="ca">
                  <Select.ItemIndicator />
                  <Select.ItemText>Canada</Select.ItemText>
                </Select.Item>
                <Select.Item value="mx">
                  <Select.ItemIndicator />
                  <Select.ItemText>Mexico</Select.ItemText>
                </Select.Item>
              </Select.Content>
              <RHFField.FieldError />
            </RHFField.Select>
          </RHFField>
          {/* Hobbies */}
          <RHFField<FormValues> name="hobbies">
            <RHFField.Select multiple>
              <Label>Hobbies</Label>
              <Select.Trigger>
                <Select.Value placeholder="Select hobbies..." />
                <Select.Icon />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="sports">
                  <Select.ItemIndicator />
                  <Select.ItemText>Sports</Select.ItemText>
                </Select.Item>
                <Select.Item value="music">
                  <Select.ItemIndicator />
                  <Select.ItemText>Music</Select.ItemText>
                </Select.Item>
                <Select.Item value="movies">
                  <Select.ItemIndicator />
                  <Select.ItemText>Movies</Select.ItemText>
                </Select.Item>
              </Select.Content>
              <RHFField.FieldError />
            </RHFField.Select>
          </RHFField>
          <Button
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </FormProvider>
    </DocsPage>
  );
};

export default Page;
