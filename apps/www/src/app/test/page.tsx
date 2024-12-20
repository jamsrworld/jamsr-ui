"use client";

import { useKeyPress } from "@jamsr-ui/hooks";
import {
  Button,
  Checkbox,
  Editor,
  Input,
  OtpInput,
  Radio,
  RadioGroup,
  Rating,
  Select,
  SelectItem,
  Switch,
  TagsInput,
  Textarea,
} from "@jamsr-ui/react";
import { useState } from "react";

const Page = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const onToggle = () => setIsDisabled((prev) => !prev);

  useKeyPress("a", () => setIsDisabled(true), {
    isWindow: true,
  });

  return (
    <div className="container mx-auto max-w-screen-sm py-24">
      <fieldset disabled={isDisabled}>
        <Input />
        <Select>
          <SelectItem value="hhiii">Hii</SelectItem>
          <SelectItem value="hello">Hello</SelectItem>
        </Select>
        {/* <FileUploadSingle />
        <FileUploadMulti /> */}
        <TagsInput />
        <Textarea />
        <Checkbox />
        <Switch />
        <Rating />
        <OtpInput />
        <RadioGroup name="gender">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </RadioGroup>
        <Editor />
        <Button isLoading={isDisabled}>Click me!</Button>
      </fieldset>
      <Button onClick={onToggle}>Click {isDisabled ? 1 : 0}</Button>
    </div>
  );
};

export default Page;
