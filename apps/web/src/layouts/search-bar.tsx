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
import { ChevronRightIcon } from "@jamsr-ui/shared-icons";
import { type Route } from "next";

const items: { label: string; url: Route }[] = [
  {
    label: "Accordion",
    url: "/components/accordion",
  },
  {
    label: "Autocomplete",
    url: "/components/autocomplete",
  },
  {
    label: "Alert",
    url: "/components/Alert",
  },
  {
    label: "Button",
    url: "/components/button",
  },
  {
    label: "Checkbox",
    url: "/components/checkbox",
  },
];

export const SearchBar = () => {
  const { isOpen, onOpen, setIsOpen } = useDisclosure();
  const handleOnClick = () => {
    onOpen();
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
      <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>Search</DialogHeader>
          <DialogBody>
            <Input
              size="lg"
              startContent={<SearchIcon />}
              placeholder="Search"
            />
            <ul className="mt-4 flex flex-col gap-2">
              {items.map((item) => (
                <NextLink
                  href={item.url}
                  key={item.label}
                  className="flex items-center gap-2 rounded-xl bg-content2 p-4 text-foreground hover:bg-content3"
                >
                  <span className="grow">{item.label}</span>
                  <ChevronRightIcon />
                </NextLink>
              ))}
            </ul>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </>
  );
};
