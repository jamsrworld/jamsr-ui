import {
  type AccordionItemProps,
  type AccordionProps,
} from "@jamsr-ui/accordion";
import { type AlertProps } from "@jamsr-ui/alert";
import {
  type AutocompleteItemProps,
  type AutocompleteProps,
} from "@jamsr-ui/autocomplete";
import { type AvatarProps } from "@jamsr-ui/avatar";
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
import {
  type DialogBodyProps,
  type DialogContentProps,
  type DialogFooterProps,
  type DialogHeaderProps,
  type DialogProps,
} from "@jamsr-ui/dialog";
import { type DividerProps } from "@jamsr-ui/divider";
import { type DrawerProps } from "@jamsr-ui/drawer";
import { type EditorProps } from "@jamsr-ui/editor";
import { type FileUploadMultiProps } from "@jamsr-ui/file-upload-multi";
import { type FileUploadSingleProps } from "@jamsr-ui/file-upload-single";
import { type HeaderProps } from "@jamsr-ui/header";
import { type IconButtonProps } from "@jamsr-ui/icon-button";
import { type InputProps } from "@jamsr-ui/input";
import { type KbdProps } from "@jamsr-ui/kbd";
import { type LinkProps } from "@jamsr-ui/link";
import { type MenuItemProps, type MenuProps } from "@jamsr-ui/menu";
import { type OtpInputProps } from "@jamsr-ui/otp-input";
import { type PopoverProps } from "@jamsr-ui/popover";
import { type RadioGroupProps, type RadioProps } from "@jamsr-ui/radio";
import { type RatingProps } from "@jamsr-ui/rating";
import { type SelectItemProps, type SelectProps } from "@jamsr-ui/select";
import { type SkeletonProps } from "@jamsr-ui/skeleton";
import { type StepperProps } from "@jamsr-ui/stepper";
import { type SwitchProps } from "@jamsr-ui/switch";
import { type TabProps, type TabsProps } from "@jamsr-ui/tab";
import {
  type TableBodyProps,
  type TableCellProps,
  type TableColumnProps,
  type TableHeaderProps,
  type TableProps,
  type TableRowProps,
} from "@jamsr-ui/table";
import { type TagsInputProps } from "@jamsr-ui/tags-input";
import { type TextareaProps } from "@jamsr-ui/textarea";
import { type TooltipProps } from "@jamsr-ui/tooltip";
import { type TypographyProps } from "@jamsr-ui/typography";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    accordion?: Partial<AccordionProps>;
    accordionItem?: Partial<AccordionItemProps>;
    alert?: Partial<AlertProps>;
    autocomplete?: Partial<AutocompleteProps>;
    autocompleteItem?: Partial<AutocompleteItemProps>;
    avatar?: Partial<AvatarProps>;
    button?: Partial<ButtonProps>;
    iconButton?: Partial<IconButtonProps>;
    card?: Partial<CardProps>;
    cardContent?: Partial<CardContentProps>;
    cardFooter?: Partial<CardFooterProps>;
    cardHeader?: Partial<CardHeaderProps>;
    checkbox?: Partial<CheckboxProps>;
    chip?: Partial<ChipProps>;
    confirmation?: Partial<ConfirmationProps>;
    dataTable?: Partial<DataTableProps>;
    dialog?: Partial<DialogProps>;
    dialogBody?: Partial<DialogBodyProps>;
    dialogContent?: Partial<DialogContentProps>;
    dialogFooter?: Partial<DialogFooterProps>;
    dialogHeader?: Partial<DialogHeaderProps>;
    divider?: Partial<DividerProps>;
    kbd?: Partial<KbdProps>;
    drawer?: Partial<DrawerProps>;
    editor?: Partial<EditorProps>;
    fileUploadMulti?: Partial<FileUploadMultiProps>;
    fileUploadSingle?: Partial<FileUploadSingleProps>;
    header?: Partial<HeaderProps>;
    input?: Partial<InputProps>;
    link?: Partial<LinkProps>;
    menu?: Partial<MenuProps>;
    menuItem?: Partial<MenuItemProps>;
    otpInput?: Partial<OtpInputProps>;
    popover?: Partial<PopoverProps>;
    radio?: Partial<RadioProps>;
    radioGroup?: Partial<RadioGroupProps>;
    rating?: Partial<RatingProps>;
    select?: Partial<SelectProps>;
    selectItem?: Partial<SelectItemProps>;
    skeleton?: Partial<SkeletonProps>;
    switch?: Partial<SwitchProps>;
    tabs?: Partial<TabsProps>;
    tab?: Partial<TabProps>;
    table?: Partial<TableProps>;
    tableBody?: Partial<TableBodyProps>;
    tableCell?: Partial<TableCellProps>;
    tableColumn?: Partial<TableColumnProps>;
    tableHeader?: Partial<TableHeaderProps>;
    tableRow?: Partial<TableRowProps>;
    typography?: Partial<TypographyProps>;
    tagsInput?: Partial<TagsInputProps>;
    textarea?: Partial<TextareaProps>;
    tooltip?: Partial<TooltipProps>;
    stepper?: Partial<StepperProps>;
  }
}
