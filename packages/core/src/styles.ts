import {
  type AccordionItemProps,
  type AccordionProps,
} from "@jamsr-ui/accordion";
import { type AlertProps } from "@jamsr-ui/alert";
import { type AutocompleteProps } from "@jamsr-ui/autocomplete";
import { type AvatarProps } from "@jamsr-ui/avatar";
import { type BadgeProps } from "@jamsr-ui/badge";
import { type ButtonProps } from "@jamsr-ui/button";
import type {
  CardContentProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
} from "@jamsr-ui/card";
import { type CheckboxProps } from "@jamsr-ui/checkbox";
import { type ChipProps } from "@jamsr-ui/chip";
import { type ConfirmationProps } from "@jamsr-ui/confirmation";
import { type DataTableProps } from "@jamsr-ui/data-table";
import { type DialogProps } from "@jamsr-ui/dialog";
import { type DividerProps } from "@jamsr-ui/divider";
import { type DrawerProps } from "@jamsr-ui/drawer";
import { type EditorProps } from "@jamsr-ui/editor";
import { type SingleFileUploadProps } from "@jamsr-ui/file-upload";
import { type MultiFileUploadProps } from "@jamsr-ui/file-upload-multi";
import { type HeaderProps } from "@jamsr-ui/header";
import { type InputProps } from "@jamsr-ui/input";
import { type LinkProps } from "@jamsr-ui/link";
import { type MenuProps } from "@jamsr-ui/menu";
import { type OtpInputProps } from "@jamsr-ui/otp-input";
import { type PopoverProps } from "@jamsr-ui/popover";
import { type RadioProps } from "@jamsr-ui/radio";
import { type RatingProps } from "@jamsr-ui/rating";
import { type SelectProps } from "@jamsr-ui/select";
import { type SkeletonProps } from "@jamsr-ui/skeleton";
import { type SwitchProps } from "@jamsr-ui/switch";
import { type TabProps } from "@jamsr-ui/tab";
import { type TableProps } from "@jamsr-ui/table";
import { type TagsInputProps } from "@jamsr-ui/tags-input";
import { type TextareaProps } from "@jamsr-ui/textarea";
import { type TooltipProps } from "@jamsr-ui/tooltip";
import { type TypographyProps } from "@jamsr-ui/typography";

export interface UIStyleConfig {
  input?: Pick<InputProps, "className" | "classNames">;
  button?: Pick<ButtonProps, "className">;
  select?: Pick<SelectProps, "className" | "classNames">;
  accordion?: Pick<AccordionProps, "className">;
  accordionItem?: Pick<AccordionItemProps, "className">;
  alert?: Pick<AlertProps, "className" | "classNames">;
  autocomplete?: Pick<AutocompleteProps, "className" | "classNames">;
  avatar?: Pick<AvatarProps, "className">;
  badge?: Pick<BadgeProps, "className">;
  card?: Pick<CardProps, "className">;
  cardContent?: Pick<CardContentProps, "className">;
  cardFooter?: Pick<CardFooterProps, "className">;
  cardHeader?: Pick<CardHeaderProps, "className" | "classNames">;
  checkbox?: Pick<CheckboxProps, "className" | "classNames">;
  chip?: Pick<ChipProps, "className">;
  confirmation?: Pick<ConfirmationProps, "className" | "classNames">;
  dataTable?: Pick<DataTableProps, "className" | "classNames">;
  dialog?: Pick<DialogProps, "className" | "classNames">;
  divider?: Pick<DividerProps, "className" | "classNames">;
  drawer?: Pick<DrawerProps, "className" | "classNames">;
  editor?: Pick<EditorProps, "className" | "classNames">;
  fileUpload?: Pick<SingleFileUploadProps, "className">;
  fileUploadMulti?: Pick<MultiFileUploadProps, "className" | "classNames">;
  header?: Pick<HeaderProps, "className">;
  link?: Pick<LinkProps, "className">;
  menu?: Pick<MenuProps, "className" | "classNames">;
  otpInput?: Pick<OtpInputProps, "className" | "classNames">;
  popover?: Pick<PopoverProps, "className">;
  radio?: Pick<RadioProps, "className" | "classNames">;
  rating?: Pick<RatingProps, "className" | "classNames">;
  skeleton?: Pick<SkeletonProps, "className" | "classNames">;
  switch?: Pick<SwitchProps, "className" | "classNames">;
  tab?: Pick<TabProps, "className">;
  table?: Pick<TableProps, "className" | "classNames">;
  tagsInput?: Pick<TagsInputProps, "className" | "classNames">;
  textarea?: Pick<TextareaProps, "className" | "classNames">;
  tooltip?: Pick<TooltipProps, "className" | "classNames">;
  typography?: Pick<TypographyProps, "className">;
}

declare module "@jamsr-ui/styles" {
  interface UIStylesType extends UIStyleConfig {}
}
