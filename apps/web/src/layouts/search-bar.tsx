"use client";

import { SearchIcon } from "@/components/icons";
import { NextLink } from "@/components/next";
import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  Input,
} from "@jamsr-ui/react";
import { ChevronRightIcon, CloseIcon } from "@jamsr-ui/shared-icons";
import { type Route } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

const items: { label: string; url: Route }[] = [
  {
    label: "Accordion",
    url: "/components/accordion",
  },
  {
    label: "Alert",
    url: "/components/alert",
  },
  {
    label: "Autocomplete",
    url: "/components/autocomplete",
  },
  {
    label: "Avatar",
    url: "/components/avatar",
  },
  {
    label: "Badge",
    url: "/components/badge",
  },
  {
    label: "Button",
    url: "/components/button",
  },
  {
    label: "Card",
    url: "/components/card",
  },
  {
    label: "Checkbox",
    url: "/components/checkbox",
  },
  {
    label: "Chip",
    url: "/components/chip",
  },
  {
    label: "Confirmation",
    url: "/components/confirmation",
  },
  {
    label: "Data Table",
    url: "/components/data-table",
  },
  {
    label: "Dialog",
    url: "/components/dialog",
  },
  {
    label: "Divider",
    url: "/components/divider",
  },
  {
    label: "Drag and Drop",
    url: "/components/drag-and-drop",
  },
  {
    label: "Drawer",
    url: "/components/drawer",
  },
  {
    label: "Editor",
    url: "/components/editor",
  },
  {
    label: "File Upload Single",
    url: "/components/file-upload-single",
  },
  {
    label: "File Upload Multi",
    url: "/components/file-upload-multi",
  },
  {
    label: "Header",
    url: "/components/header",
  },
  {
    label: "Input",
    url: "/components/input",
  },
  {
    label: "Kbd",
    url: "/components/kbd",
  },
  {
    label: "Link",
    url: "/components/link",
  },
  {
    label: "Menu",
    url: "/components/menu",
  },
  {
    label: "OTP Input",
    url: "/components/otp-input",
  },
  {
    label: "Popover",
    url: "/components/popover",
  },
  {
    label: "Progress",
    url: "/components/progress",
  },
  {
    label: "Radio",
    url: "/components/radio",
  },
  {
    label: "Rating",
    url: "/components/rating",
  },
  {
    label: "Repeater",
    url: "/components/repeater",
  },
  {
    label: "React Hook Form",
    url: "/components/react-hook-form",
  },
  {
    label: "Ripple",
    url: "/components/ripple",
  },
  {
    label: "Select",
    url: "/components/select",
  },
  {
    label: "Skeleton",
    url: "/components/skeleton",
  },
  {
    label: "Switch",
    url: "/components/switch",
  },
  {
    label: "Tab",
    url: "/components/tab",
  },
  {
    label: "Table",
    url: "/components/table",
  },
  {
    label: "Tags Input",
    url: "/components/tags-input",
  },
  {
    label: "Textarea",
    url: "/components/textarea",
  },
  {
    label: "Toast",
    url: "/components/toast",
  },
  {
    label: "Tooltip",
    url: "/components/tooltip",
  },
  {
    label: "Typography",
    url: "/components/typography",
  },
];

export const SearchBar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose, setIsOpen } = useDisclosure();
  const handleOnClick = () => {
    onOpen();
  };
  const [search, setSearch] = useState("");
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()),
  );

  const onClearSearch = () => {
    setSearch("");
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: Route,
  ) => {
    e.preventDefault();
    onClearSearch();
    onClose();
    router.push(url);
  };

  return (
    <>
      <Button
        startContent={<SearchIcon />}
        onClick={handleOnClick}
        className="min-w-40 justify-start"
      >
        Search
      </Button>
      <Dialog isScroll hideCloseButton isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[500px] overflow-y-auto">
          <DialogHeader>
            <Input
              size="lg"
              startContent={<SearchIcon />}
              placeholder="Search"
              value={search}
              onValueChange={setSearch}
              type="search"
              autoComplete="off"
              endContent={
                search.length > 0 ? (
                  <Button
                    onClick={onClearSearch}
                    isIconOnly
                    size="sm"
                    isRounded
                    variant="light"
                  >
                    <CloseIcon />
                  </Button>
                ) : null
              }
            />
          </DialogHeader>
          <DialogBody>
            <ul className="flex flex-col gap-2">
              {filteredItems.map((item) => (
                <NextLink
                  href={item.url}
                  key={item.label}
                  className="flex items-center gap-2 rounded-xl bg-content2 p-4 text-foreground hover:bg-content3"
                  onClick={(e) => handleLinkClick(e, item.url)}
                >
                  <span className="grow">{item.label}</span>
                  <ChevronRightIcon />
                </NextLink>
              ))}
              {filteredItems.length === 0 && (
                <li className="flex flex-col items-center gap-2 rounded-xl text-center text-foreground">
                  <span className="grow">No results for "{search}"</span>
                  <span className="text-foreground-secondary">
                    Try searching for something else.
                  </span>
                </li>
              )}
            </ul>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </>
  );
};
