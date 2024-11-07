import { type AccordionProps } from "@jamsr-ui/accordion";
import { type AlertProps } from "@jamsr-ui/alert";
import { type AutocompleteProps } from "@jamsr-ui/autocomplete";
import { type AvatarProps } from "@jamsr-ui/avatar";
import { type BadgeProps } from "@jamsr-ui/badge";
import { type ButtonProps } from "@jamsr-ui/button";
import {
  type CardContentProps,
  type CardFooterProps,
  type CardHeaderProps,
  type CardProps,
} from "@jamsr-ui/card";
import { type CheckboxProps } from "@jamsr-ui/checkbox";
import { type ChipProps } from "@jamsr-ui/chip";
import { type ConfirmationProps } from "@jamsr-ui/confirmation";
import { type DataTableProps } from "@jamsr-ui/data-table";
import { type DialogProps } from "@jamsr-ui/dialog";
import { type DividerProps } from "@jamsr-ui/divider";
import { type DrawerProps } from "@jamsr-ui/drawer";
import { type EditorProps } from "@jamsr-ui/editor";
import { type FileUploadSingleProps } from "@jamsr-ui/file-upload-single";
import { type FileUploadMultiProps } from "@jamsr-ui/file-upload-multi";
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

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    accordion?: Pick<AccordionProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    alert?: Pick<AlertProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    autocomplete?: Pick<AutocompleteProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    avatar?: Pick<AvatarProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    input?: Pick<InputProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    badge?: Pick<BadgeProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    button?: Pick<ButtonProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    card?: Pick<CardProps, "className">;
    cardHeader?: Pick<CardHeaderProps, "className" | "classNames">;
    cardFooter?: Pick<CardFooterProps, "className">;
    cardContent?: Pick<CardContentProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    checkbox?: Pick<CheckboxProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    chip?: Pick<ChipProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    confirmation?: Pick<ConfirmationProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    dataTable?: Pick<DataTableProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    dialog?: Pick<DialogProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    divider?: Pick<DividerProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    drawer?: Pick<DrawerProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    editor?: Pick<EditorProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    fileUpload?: Pick<FileUploadSingleProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    fileUploadMulti?: Pick<FileUploadMultiProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    header?: Pick<HeaderProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    input?: Pick<InputProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    link?: Pick<LinkProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    menu?: Pick<MenuProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    otpInput?: Pick<OtpInputProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    popover?: Pick<PopoverProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    radio?: Pick<RadioProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    rating?: Pick<RatingProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    select?: Pick<SelectProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    skeleton?: Pick<SkeletonProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    switch?: Pick<SwitchProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    tab?: Pick<TabProps, "className">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    table?: Pick<TableProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    tagsInput?: Pick<TagsInputProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    textarea?: Pick<TextareaProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    tooltip?: Pick<TooltipProps, "className" | "classNames">;
  }
}

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    typography?: Pick<TypographyProps, "className">;
  }
}
