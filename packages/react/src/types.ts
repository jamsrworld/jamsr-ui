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
import { type CopyToClipboardProps } from "@jamsr-ui/copy-to-clipboard";
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
import { type TextProps } from "@jamsr-ui/text";
import { type TextareaProps } from "@jamsr-ui/textarea";
import { type TooltipProps } from "@jamsr-ui/tooltip";

type WithProps<T> = Partial<T> & { props?: (props: Partial<T>) => Partial<T> };

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    copyToClipboard?: WithProps<CopyToClipboardProps>;
    accordion?: WithProps<AccordionProps>;
    accordionItem?: WithProps<AccordionItemProps>;
    alert?: WithProps<AlertProps>;
    autocomplete?: WithProps<AutocompleteProps>;
    autocompleteItem?: WithProps<AutocompleteItemProps>;
    avatar?: WithProps<AvatarProps>;
    button?: WithProps<ButtonProps>;
    iconButton?: WithProps<IconButtonProps>;
    card?: WithProps<CardProps>;
    cardContent?: WithProps<CardContentProps>;
    cardFooter?: WithProps<CardFooterProps>;
    cardHeader?: WithProps<CardHeaderProps>;
    checkbox?: WithProps<CheckboxProps>;
    chip?: WithProps<ChipProps>;
    confirmation?: WithProps<ConfirmationProps>;
    dataTable?: WithProps<DataTableProps<any>>;
    dialog?: WithProps<DialogProps>;
    dialogBody?: WithProps<DialogBodyProps>;
    dialogContent?: WithProps<DialogContentProps>;
    dialogFooter?: WithProps<DialogFooterProps>;
    dialogHeader?: WithProps<DialogHeaderProps>;
    divider?: WithProps<DividerProps>;
    kbd?: WithProps<KbdProps>;
    drawer?: WithProps<DrawerProps>;
    editor?: WithProps<EditorProps>;
    fileUploadMulti?: WithProps<FileUploadMultiProps>;
    fileUploadSingle?: WithProps<FileUploadSingleProps>;
    header?: WithProps<HeaderProps>;
    input?: WithProps<InputProps>;
    link?: WithProps<LinkProps>;
    menu?: WithProps<MenuProps>;
    menuItem?: WithProps<MenuItemProps>;
    otpInput?: WithProps<OtpInputProps>;
    popover?: WithProps<PopoverProps>;
    radio?: WithProps<RadioProps>;
    radioGroup?: WithProps<RadioGroupProps>;
    rating?: WithProps<RatingProps>;
    select?: WithProps<SelectProps>;
    selectItem?: WithProps<SelectItemProps>;
    skeleton?: WithProps<SkeletonProps>;
    switch?: WithProps<SwitchProps>;
    tabs?: WithProps<TabsProps>;
    tab?: WithProps<TabProps>;
    table?: WithProps<TableProps>;
    tableBody?: WithProps<TableBodyProps>;
    tableCell?: WithProps<TableCellProps>;
    tableColumn?: WithProps<TableColumnProps>;
    tableHeader?: WithProps<TableHeaderProps>;
    tableRow?: WithProps<TableRowProps>;
    text?: WithProps<TextProps>;
    tagsInput?: WithProps<TagsInputProps>;
    textarea?: WithProps<TextareaProps>;
    tooltip?: WithProps<TooltipProps>;
    stepper?: WithProps<StepperProps>;
  }
}
